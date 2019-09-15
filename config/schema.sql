DROP DATABASE IF EXISTS basicreactcrud2;
CREATE DATABASE basicreactcrud2;

USE basicreactcrud2;


CREATE TABLE users (
    firstname varchar(100) NOT NULL,
    lastname varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    password varchar(100) NOT NULL
);