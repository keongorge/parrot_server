namespace parrot_server;
using Microsoft.Data.Sqlite;
using parrot_server.Models;
using System.Collections.Generic;

public static class SqliteService
{
    public static List<Parrot> ReadParrots()
    {
        List<Parrot> availableParrots = new List<Parrot>();
        using (var connection = new SqliteConnection("Data Source=./Database/parrotShoppe.db"))
        {
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
            @"
            SELECT *
            FROM Birds
            WHERE Sold = 0
            ";
            
            using (var reader = command.ExecuteReader())
            {
                while (reader.Read())
                {
                    Parrot bird = new Parrot();
                    bird.ProductID = reader.GetInt32(0);
                    bird.Name = reader.GetString(1);
                    bird.Species = reader.GetString(2);
                    bird.Age = reader.GetInt32(3);
                    bird.Description = reader.GetString(4);
                    bird.Picture = GetBytes(reader);
                    bird.Sold = reader.GetBoolean(6);

                    availableParrots.Add(bird);
                }
            }
        }
        return availableParrots;
    }

    static byte[] GetBytes(SqliteDataReader reader)
    {
        const int CHUNK_SIZE = 137 * 1024;
        byte[] buffer = new byte[CHUNK_SIZE];
        long bytesRead;
        long fieldOffset = 0;
        using (MemoryStream stream = new MemoryStream())
        {
            while ((bytesRead = reader.GetBytes(5, fieldOffset, buffer, 0, buffer.Length)) > 0)
            {
                stream.Write(buffer, 0, (int)bytesRead);
                fieldOffset += bytesRead;
            }
            return stream.ToArray();
        }
    }
}