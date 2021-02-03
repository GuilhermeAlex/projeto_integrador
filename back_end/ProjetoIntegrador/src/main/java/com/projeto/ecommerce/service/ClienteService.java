package com.projeto.ecommerce.service;

import java.nio.charset.Charset;
import java.util.Optional;
import com.projeto.ecommerce.model.Cliente;
import com.projeto.ecommerce.model.UserLogin;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.projeto.ecommerce.repository.RepositoryCliente;

@Service
public class ClienteService {
	
	@Autowired
	private RepositoryCliente repository;	
	
	public Cliente CadastrarCliente(Cliente cliente) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
				
		String senhaEncoder = encoder.encode(cliente.getSenha());
		cliente.setSenha(senhaEncoder);
		
		return repository.save(cliente);
	}
	
	public Optional<UserLogin> Logar(Optional<UserLogin> user){
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Cliente> cliente = repository.findByEmail(user.get().getEmail());
		
		if(cliente.isPresent()) {
			if(encoder.matches(user.get().getSenha(), cliente.get().getSenha())) {

				String auth = user.get().getEmail() + ":" + user.get().getSenha();
				byte[]  encoderAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encoderAuth);
				
				user.get().setToken(authHeader);
				user.get().setEmail(cliente.get().getEmail());
				user.get().setNome(cliente.get().getNome());
				user.get().setId(cliente.get().getId_cliente());
				
				return user;
			}
		}
		
		return null;
	}
}
