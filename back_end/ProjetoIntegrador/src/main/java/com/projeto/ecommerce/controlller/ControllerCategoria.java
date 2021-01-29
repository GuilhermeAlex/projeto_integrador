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

import com.projeto.ecommerce.model.Categoria;
import com.projeto.ecommerce.repository.RepositoryCategoria;

@RestController
@RequestMapping ("/categoria")
public class ControllerCategoria {

	@Autowired
	private RepositoryCategoria repository;
	
	@PostMapping
	public Categoria criar(@RequestBody Categoria objetinho) {
		repository.save(objetinho);
		return objetinho;
	}
	
	@GetMapping 
	public ResponseEntity <List <Categoria>> GetAll() {
		return ResponseEntity.ok (repository.findAll());
	}
	
	@GetMapping ("/id/{id}")
	public ResponseEntity <Categoria> GetById (@PathVariable Long id){	
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/material/{material}")
	public ResponseEntity<List<Categoria>> getByMaterial ( @PathVariable String material){
		return ResponseEntity.ok(repository.findAllByMaterialContainingIgnoreCase(material));
	}
	

	@GetMapping("/tipo/{tipo}")
	public ResponseEntity<List<Categoria>> getByTipo ( @PathVariable String tipo){
		return ResponseEntity.ok(repository.findAllByTipoContainingIgnoreCase(tipo));
	}
	
	
	@PutMapping  ("/put/{id}")
	public Categoria atualizar (@PathVariable Long id, @RequestBody Categoria objetinho) {
		objetinho.setId_categoria(id);
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
