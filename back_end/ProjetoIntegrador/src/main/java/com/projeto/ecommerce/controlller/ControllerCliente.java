package com.projeto.ecommerce.controlller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.ecommerce.model.Cliente;
import com.projeto.ecommerce.model.UserLogin;
import com.projeto.ecommerce.repository.RepositoryCliente;
import com.projeto.ecommerce.service.ClienteService;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControllerCliente {

	@Autowired
	private ClienteService clienteService;
	
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

	@GetMapping("/id/{id}")
	public ResponseEntity<Cliente> GetById(@PathVariable Long id) {
		return repository.findById(id).map(resp -> ResponseEntity.ok(resp)).orElse(ResponseEntity.notFound().build());
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<List<Cliente>> getByEmail(@PathVariable String email) {
		return ResponseEntity.ok(repository.findAllByEmailContainingIgnoreCase(email));	
	}
	
	@PutMapping
	public ResponseEntity<Cliente> put(@RequestBody Cliente cliente){
		return ResponseEntity.ok(repository.save(cliente));
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
		
	
	@PostMapping("/logar")
	public ResponseEntity<UserLogin> Autentication(@RequestBody Optional<UserLogin> user){
		return clienteService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Cliente> Post(@RequestBody Cliente cliente) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(clienteService.CadastrarCliente(cliente));
	}
}
