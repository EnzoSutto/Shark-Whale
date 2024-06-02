
create database Whale_Shark;

use Whale_Shark;

create table usuario(
idUsuario int not null auto_increment,
nome varchar(45) not null,
email varchar(45) not null,
senha varchar(50) not null,
primary key (idUsuario)
);
select * from usuario;


/*
create table resultado(
idTentativa int not null auto_increment,
pontuaçaofinal varchar(45) not null,
primary key(idTentativa)
);
select * from resultado;
*/




