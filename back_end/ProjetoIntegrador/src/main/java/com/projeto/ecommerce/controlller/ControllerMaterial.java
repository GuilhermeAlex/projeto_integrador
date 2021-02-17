package com.projeto.ecommerce.controlller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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


import com.projeto.ecommerce.model.Material;
import com.projeto.ecommerce.repository.RepositoryMaterial;


@RestController
@RequestMapping ("/material")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ControllerMaterial {

	@Autowired
	private RepositoryMaterial repository;
	
	@PostMapping
	public Material criar(@RequestBody Material objetinho) {
		repository.save(objetinho);
		return objetinho;
	}
	
	@GetMapping 
	public ResponseEntity <List <Material>> GetAll() {
		return ResponseEntity.ok (repository.findAll());
	}
	
	@GetMapping ("/id/{id}")
	public ResponseEntity <Material> GetById (@PathVariable Long id){	
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/material/{material}")
	public ResponseEntity<List<Material>> getByMaterial ( @PathVariable String material){
		return ResponseEntity.ok(repository.findAllByMaterialContainingIgnoreCase(material));
	}
	
	
	@PutMapping  ("/put/{id}")
	public Material atualizar (@PathVariable Long id, @RequestBody Material objetinho) {
		objetinho.setId_material(id);
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
