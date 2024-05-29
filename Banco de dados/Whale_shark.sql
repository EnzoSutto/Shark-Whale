create database Whale_Shark;

use Whale_Shark;

create table usuario(
idUsuario int not null auto_increment,
email varchar(45) not null,
Nome varchar(45) not null,
Senha varchar(50) not null,
primary key (idUsuario)
);


create table resultado(
idTentativa int not null auto_increment,
fkuser int,
questao1 varchar(50) not null,
questao2 varchar(50) not null,
questao3 varchar(50) not null,
questao4 varchar(50) not null,
questao5 varchar(50) not null,
questao6 varchar(50) not null,
questao7 varchar(50) not null,
questao8 varchar(50) not null,
questao9 varchar(50) not null,
questao10 varchar(50) not null,
pontuaçaoinal varchar(45) not null,
primary key(idTentativa),
constraint fkuser foreign key (fkuser) references usuario(idUsuario)
);
drop table resultado;