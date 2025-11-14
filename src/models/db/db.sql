CREATE DATABASE gestao_produtos;

USE gestao_produtos;

CREATE TABLE usuarios (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `nome_completo` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE produtos (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `produto` VARCHAR(255) NOT NULL
);