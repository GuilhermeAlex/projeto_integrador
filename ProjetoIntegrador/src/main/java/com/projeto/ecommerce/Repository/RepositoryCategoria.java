package com.projeto.ecommerce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.ecommerce.model.CategoriaModel;

public interface RepositoryCategoria extends JpaRepository <CategoriaModel, Long> {

	public List <CategoriaModel> findAllByTipoContainingIgnoreCase(String tipo);
}
