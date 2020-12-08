CREATE TABLE `categoria` (
	`id_categoria` int NOT NULL,
	`tipo` varchar(255) NOT NULL,
	`tamanho` varchar(255) NOT NULL,
	PRIMARY KEY (`id_categoria`)
);

CREATE TABLE `produto` (
	`id_produto` int NOT NULL,
	`estoque` int NOT NULL,
	`nome` varchar(255) NOT NULL,
	`preco` FLOAT(5.2) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`id_categoria` int NOT NULL,
	PRIMARY KEY (`id_produto`)
);

CREATE TABLE `cliente` (
	`id_cliente` int NOT NULL,
	`nome` varchar(255) NOT NULL,
	`cpf` int(11) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id_cliente`)
);

CREATE TABLE `carrinho` (
	`id_carrinho` int NOT NULL,
	`valor_total` FLOAT(5.2) NOT NULL,
	`quantidade` int NOT NULL,
	`id_cliente` int NOT NULL,
	`id_produto` int NOT NULL,
	`id_vendedor` INT NOT NULL,
	PRIMARY KEY (`id_carrinho`)
);

CREATE TABLE `vendedor` (
	`id_vendedor` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`cpf_cnpj` INT(14) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id_vendedor`)
);

ALTER TABLE `produto` ADD CONSTRAINT `produto_fk0` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`);

ALTER TABLE `carrinho` ADD CONSTRAINT `carrinho_fk0` FOREIGN KEY (`id_cliente`) REFERENCES `cliente`(`id_cliente`);

ALTER TABLE `carrinho` ADD CONSTRAINT `carrinho_fk1` FOREIGN KEY (`id_produto`) REFERENCES `produto`(`id_produto`);

ALTER TABLE `carrinho` ADD CONSTRAINT `carrinho_fk2` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor`(`id_vendedor`);

