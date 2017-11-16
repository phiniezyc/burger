### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burgerName VARCHAR(255) NOT NULL,
	devoured BOOL DEFAULT FALSE,
	PRIMARY KEY (id)
);
