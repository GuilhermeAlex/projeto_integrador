package com.projeto.ecommerce.controlller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.ecommerce.model.Contato;
import com.projeto.ecommerce.repository.RepositoryContato;

@RestController
@RequestMapping("/contato")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControllerContato {
	
	@Autowired
	private RepositoryContato repository;

	@PostMapping
	public ResponseEntity<Contato> post(@RequestBody Contato contato){
		return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(contato));
	}
	
}
