# parrot_server

This project was created in one day for an interview for a junior full stack engineer position. Due to the short timeframe for the project, it has some rough edges that I hope to update and smooth out soon.

This project is a .net core backend with a React.js frontend and a sqlite database. It is a simple site that request data from the database to display unsold birds and their information as MUI cards as an approximation of a pet shop.

The database file holds a relational database with several tables with foreign key relationships between them. The DB stores images of the birds as blobs and does contain "sold" birds so that the site actually has to query for "undsold" birds instead of just getting all entries from the birds table.
