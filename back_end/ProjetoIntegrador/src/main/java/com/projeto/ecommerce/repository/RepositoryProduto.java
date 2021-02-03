package com.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.ecommerce.model.Categoria;
import com.projeto.ecommerce.model.Produto;
@Repository
public interface RepositoryProduto extends JpaRepository <Produto, Long> {

	public List <Produto> findAllByNomeContainingIgnoreCase(String nome);
	
	public List <Produto> findAllByPreco(double preco);	
	
}
