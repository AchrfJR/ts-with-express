
CREATE TABLE Categories(
    id INTEGER primary key AUTOINCREMENT, 
    name TEXT NOT NULL , 
    description TEXT
);

CREATE TABLE tools(
    id INTEGER primary key AUTOINCREMENT , 
    name TEXT UNIQUE NOT NULL ,
    "file-path" TEXT NOT NULL ,
    Categories_id INTEGER,
    FOREIGN KEY (Categories_id) REFERENCES Categories (id)
);