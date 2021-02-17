package com.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.ecommerce.model.Categoria;
@Repository
public interface RepositoryCategoria extends JpaRepository <Categoria, Long> {

	public List <Categoria> findAllByTipoContainingIgnoreCase(String tipo);
	
	
}
