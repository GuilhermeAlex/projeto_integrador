package com.projeto.ecommerce.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table (name = "tb_categoria")
public class CategoriaModel {

		@Id
		@Column
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private long id_categoria;
		
		@Column
		private String tipo;

		@Column
		private String tamanho;

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
			return tamanho;
		}

		public void setTamanho(String tamanho) {
			this.tamanho = tamanho;
		}
		
		
}
