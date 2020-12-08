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

import com.projeto.ecommerce.Repository.RepositoryCategoria;
import com.projeto.ecommerce.model.CategoriaModel;

@RestController
@RequestMapping ("/")
public class ControllerCategoria {

	@Autowired
	private RepositoryCategoria repository;
	
	@PostMapping("/post")
	public CategoriaModel criar(@RequestBody CategoriaModel objetinho) {
		repository.save(objetinho);
		return objetinho;
	}
	
	@GetMapping ("/getAll")
	public ResponseEntity <List <CategoriaModel>> GetAll() {
		return ResponseEntity.ok (repository.findAll());
	}
	
	@GetMapping ("/getById/{id}")
	public ResponseEntity <CategoriaModel> GetById (@PathVariable Long id){	
		return repository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping  ("/put/{id}")
	public CategoriaModel atualizar (@PathVariable Long id, @RequestBody CategoriaModel objetinho) {
		objetinho.setId_categoria(id);
		repository.save(objetinho);
		return objetinho;
	}
	
	@DeleteMapping ("/delete/{id}")
	public String remover (@PathVariable Long id) {
		try {
			repository.deleteById(id);
		return "sucesso";
		} catch (Exception e) {
			return "Erro: " + e.getLocalizedMessage();			
		}
	}
	
	//@GetMapping("/tipo/{tipo}")
	//public ResponseEntity<List<CategoriaModel>> getByTipo ( @PathVariable String tipo){
		//return ResponseEntity.ok(repository.findAllByDescricaoContainingIgnoreCase(tipo));
	//}
		
}
