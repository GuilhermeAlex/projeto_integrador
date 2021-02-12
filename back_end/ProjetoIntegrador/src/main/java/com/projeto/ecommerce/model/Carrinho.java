package com.projeto.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_carrinho")
public class Carrinho {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_carrinho;
	
	@OneToOne	
	private Produto produto;
	
	// Get e Set
	public long getId_carrinho() {
		return id_carrinho;
	}

	public void setId_carrinho(long id_carrinho) {
		this.id_carrinho = id_carrinho;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}	
}