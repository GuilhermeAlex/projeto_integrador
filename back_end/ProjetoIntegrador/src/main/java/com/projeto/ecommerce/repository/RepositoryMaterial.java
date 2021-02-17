package com.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.ecommerce.model.Material;


@Repository
public interface RepositoryMaterial extends JpaRepository <Material, Long> {

	
	public List <Material> findAllByMaterialContainingIgnoreCase(String material);
	
	
}

