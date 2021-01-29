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
	
	@Column
	private double valor_total;
	
	@Column
	private int quantidade;
	
	@OneToOne	
	private Cliente cliente;
	
	public long getId_carrinho() {
		return id_carrinho;
	}
	public void setId_carrinho(long id_carrinho) {
		this.id_carrinho = id_carrinho;
	}
	public double getValor_total() {
		return valor_total;
	}
	public void setValor_total(double valor_total) {
		this.valor_total = valor_total;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	
}