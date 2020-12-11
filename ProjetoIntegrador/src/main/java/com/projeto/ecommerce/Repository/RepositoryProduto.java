package com.projeto.ecommerce.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.projeto.ecommerce.model.Produto;

public interface RepositoryProduto extends JpaRepository <Produto, Long> {

	public List <Produto> findAllByNomeContainingIgnoreCase(String nome);
	
	
}
