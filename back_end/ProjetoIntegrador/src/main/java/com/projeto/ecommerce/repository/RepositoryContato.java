package com.projeto.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.ecommerce.model.Contato;

public interface RepositoryContato extends JpaRepository<Contato, Long> {

}
