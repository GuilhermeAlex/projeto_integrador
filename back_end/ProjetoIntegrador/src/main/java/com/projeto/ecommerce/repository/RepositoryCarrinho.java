package com.projeto.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.ecommerce.model.Carrinho;

@Repository
public interface RepositoryCarrinho extends JpaRepository<Carrinho, Long> {

}
