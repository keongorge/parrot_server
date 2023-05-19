namespace parrot_server.Models;

public class Parrot
{
    public int ProductID {get; set;}

    public string? Name {get; set;}

    public string? Species {get; set;}

    public int Age {get; set;}

    public string? Description {get; set;}

    public byte[]? Picture {get; set;}

    public Boolean Sold {get; set;}
}