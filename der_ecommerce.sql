CREATE TABLE `categoria` (
	`id_categoria` INT NOT NULL AUTO_INCREMENT,
	`tipo` varchar(255) NOT NULL,
	`tamanho` varchar(255) NOT NULL,
	PRIMARY KEY (`id_categoria`)
);

CREATE TABLE `produto` (
	`id_produto` INT NOT NULL AUTO_INCREMENT,
	`estoque` INT NOT NULL,
	`nome` varchar(255) NOT NULL,
	`preco` FLOAT(5.2) NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`id_categoria` INT NOT NULL,
	PRIMARY KEY (`id_produto`)
);

CREATE TABLE `cliente` (
	`id_cliente` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`cpf` INT(11) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	PRIMARY KEY (`id_cliente`)
);

CREATE TABLE `carrinho` (
	`id_carrinho` INT NOT NULL AUTO_INCREMENT,
	`valor_total` FLOAT(5.2) NOT NULL,
	`quantidade` INT NOT NULL,
	`id_cliente` INT NOT NULL,
	`id_produto` INT NOT NULL,
	PRIMARY KEY (`id_carrinho`)
);

ALTER TABLE `produto` ADD CONSTRAINT `produto_fk0` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`);

ALTER TABLE `carrinho` ADD CONSTRAINT `carrinho_fk0` FOREIGN KEY (`id_cliente`) REFERENCES `cliente`(`id_cliente`);

ALTER TABLE `carrinho` ADD CONSTRAINT `carrinho_fk1` FOREIGN KEY (`id_produto`) REFERENCES `produto`(`id_produto`);

