package com.projeto.ecommerce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.ecommerce.model.Cliente;

public interface RepositoryCliente extends JpaRepository <Cliente, Long> {

	public List <Cliente> findAllByNomeContainingIgnoreCase(String nome);

}
