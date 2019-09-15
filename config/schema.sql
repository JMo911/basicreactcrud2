DROP DATABASE IF EXISTS basicreactcrud2;
CREATE DATABASE basicreactcrud2;

USE basicreactcrud2;


CREATE TABLE users (
username varchar(100) NOT NULL,
password varchar(100) NOT NULL
);