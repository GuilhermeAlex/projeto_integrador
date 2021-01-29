package com.projeto.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.ecommerce.model.Carrinho;

@Repository
public interface RepositoryCarrinho extends JpaRepository<Carrinho, Long> {

	public List<Carrinho> findAllByQuantidade(int quantidade);
	
}
