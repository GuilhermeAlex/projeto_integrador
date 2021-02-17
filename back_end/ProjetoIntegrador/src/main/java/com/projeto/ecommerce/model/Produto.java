package com.projeto.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "tb_produto")
public class Produto {

		@Id
		@Column
		@GeneratedValue (strategy = GenerationType.IDENTITY)			
		private long id_produto;
		
		@Column
		private long estoque;
		
		@Column
		private String nome;
		
		@Column
		private double preco;
		
		@Column 
		private String descricao;
		
		@Column
		private String tamanho;
		
		@Column
		private String foto;
		
		@OneToOne
		private Carrinho carrinho;
		
		public Carrinho getCarrinho() {
			return carrinho;
		}

		public void setCarrinho(Carrinho carrinho) {
			this.carrinho = carrinho;
		}

		public String getFoto() {
			return foto;
		}

		public void setFoto(String foto) {
			this.foto = foto;
		}

		public String getTamanho() {
			return tamanho;
		}

		public void setTamanho(String tamanho) {
			this.tamanho = tamanho;
		}

		@ManyToOne 
		@JsonIgnoreProperties ("produto")
		private Categoria categoria;
		
		@ManyToOne 
		@JsonIgnoreProperties ("produto")
		private Material material;

		public Material getMaterial() {
			return material;
		}

		public void setMaterial(Material material) {
			this.material = material;
		}

		public long getId_produto() {
			return id_produto;
		}

		public void setId_produto(long id_produto) {
			this.id_produto = id_produto;
		}

		public long getEstoque() {
			return estoque;
		}

		public void setEstoque(long estoque) {
			this.estoque = estoque;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public double getPreco() {
			return preco;
		}

		public void setPreco(double preco) {
			this.preco = preco;
		}

		public String getDescricao() {
			return descricao;
		}

		public void setDescricao(String descricao) {
			this.descricao = descricao;
		}

		public Categoria getCategoria() {
			return categoria;
		}

		public void setCategoria(Categoria categoria) {
			this.categoria = categoria;
		}

}
