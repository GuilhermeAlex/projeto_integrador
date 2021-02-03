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

import com.projeto.ecommerce.model.Categoria;
import com.projeto.ecommerce.model.Produto;
import com.projeto.ecommerce.repository.RepositoryProduto;

	@RestController
	@RequestMapping ("/produto")
	@CrossOrigin(origins = "*", allowedHeaders = "*")
	public class ControllerProduto {

		@Autowired
		private RepositoryProduto repository;
		
		@PostMapping
		public Produto criar(@RequestBody Produto objetinho) {
			repository.save(objetinho);
			return objetinho;
		}
		
		@GetMapping 
		public ResponseEntity <List <Produto>> GetAll() {
			return ResponseEntity.ok (repository.findAll());
		}
		
		@GetMapping ("/id/{id}")
		public ResponseEntity <Produto> GetById (@PathVariable Long id){	
			return repository.findById(id)
					.map(resp -> ResponseEntity.ok(resp))
					.orElse(ResponseEntity.notFound().build());
		}
		
		@GetMapping("/nome/{nome}")
		public ResponseEntity<List<Produto>> getByNome ( @PathVariable String nome){
			return ResponseEntity.ok(repository.findAllByNomeContainingIgnoreCase(nome));
		}
		
		@GetMapping("/preco/{preco}")
		public ResponseEntity<List<Produto>> getByPreco ( @PathVariable double preco){
			return ResponseEntity.ok(repository.findAllByPreco(preco));
		}
			
		@PutMapping  ("/put/{id}")
		public Produto atualizar (@PathVariable Long id, @RequestBody Produto objetinho) {
			objetinho.setId_produto(id);
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
