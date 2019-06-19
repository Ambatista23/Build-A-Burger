CREATE DATABASE burgers_db;

use burgers_db;

create TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN,
    primary key(id)
);