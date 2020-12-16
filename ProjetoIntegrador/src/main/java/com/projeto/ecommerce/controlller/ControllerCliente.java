package com.projeto.ecommerce.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.ecommerce.Repository.RepositoryCliente;
import com.projeto.ecommerce.model.Cliente;

@RestController
@RequestMapping("/cliente")
public class ControllerCliente {

	@Autowired
	private RepositoryCliente repository;

	@PostMapping
	public Cliente criar(@RequestBody Cliente objetinho) {
		repository.save(objetinho);
		return objetinho;
	}

	@GetMapping
	public ResponseEntity<List<Cliente>> GetAll() {
		return ResponseEntity.ok(repository.findAll());
	}

	@GetMapping("/getById/{id}")
	public ResponseEntity<Cliente> GetById(@PathVariable Long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/getByNome/{nome}")
	public ResponseEntity<List<Cliente>> getByNome(@PathVariable String nome) {
		return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
	}

	@PutMapping("/put/{id}")
	public Cliente atualizar(@PathVariable Long id, @RequestBody Cliente objetinho) {
		objetinho.setId_cliente(id);
		repository.save(objetinho);
		return objetinho;
	}

	@DeleteMapping ("/delete/{id}")
	public String remover (@PathVariable Long id) {
		try {
			repository.deleteById(id);
		return "Deletado com sucesso !";
		} catch (Exception e) {
			return "Erro: " + e.getLocalizedMessage();			
		}
	}
}
