package com.projeto.ecommerce.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table (name = "tb_categoria")
public class Categoria {

		@Id
		@Column
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private long id_categoria;
		
		@Column
		private String tipo;

		@Column
		private String material;

		@OneToMany (mappedBy = "categoria",cascade = CascadeType.ALL)
		@JsonIgnoreProperties ("categoria")
		private List <Produto> produto;

		public long getId_categoria() {
			return id_categoria;
		}

		public void setId_categoria(long id_categoria) {
			this.id_categoria = id_categoria;
		}

		public String getTipo() {
			return tipo;
		}

		public void setTipo(String tipo) {
			this.tipo = tipo;
		}

		public String getTamanho() {
			return material;
		}

		public void setTamanho(String tamanho) {
			this.material = tamanho;
		}

		public List<Produto> getProduto() {
			return produto;
		}

		public void setProduto(List<Produto> produto) {
			this.produto = produto;
		}
		
		
		
		
}
