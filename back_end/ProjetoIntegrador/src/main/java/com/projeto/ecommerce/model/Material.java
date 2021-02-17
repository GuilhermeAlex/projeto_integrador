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
@Table (name = "tb_material")
public class Material {

		@Id
		@Column
		@GeneratedValue (strategy = GenerationType.IDENTITY)
		private long id_material;
		

		@Column
		private String material;

		@OneToMany (mappedBy = "material",cascade = CascadeType.ALL)
		@JsonIgnoreProperties ("material")
		private List <Produto> produto;

		public long getId_material() {
			return id_material;
		}

		public void setId_material(long id_material) {
			this.id_material = id_material;
		}

		public String getMaterial() {
			return material;
		}

		public void setMaterial(String material) {
			this.material = material;
		}

		public List<Produto> getProduto() {
			return produto;
		}

		public void setProduto(List<Produto> produto) {
			this.produto = produto;
		}

		
		
		
		
		
}