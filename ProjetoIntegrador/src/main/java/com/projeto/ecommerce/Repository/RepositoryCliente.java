package com.projeto.ecommerce.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.projeto.ecommerce.model.Cliente;

@Repository
public interface RepositoryCliente extends JpaRepository <Cliente, Long> {

    public List<Cliente> findAllByEmailContainingIgnoreCase(String email);
	
	public Optional<Cliente> findByEmail(String email);
}

