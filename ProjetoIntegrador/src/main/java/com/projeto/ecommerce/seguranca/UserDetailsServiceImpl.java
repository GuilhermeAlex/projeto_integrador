package com.projeto.ecommerce.seguranca;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.projeto.ecommerce.model.Cliente;
import com.projeto.ecommerce.repository.RepositoryCliente;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private RepositoryCliente clienteRepository;
	
	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		Optional<Cliente> user = clienteRepository.findByEmail(userName);
		user.orElseThrow(() -> new UsernameNotFoundException(userName + " not found."));
		
		return user.map(UserDetailsImpl::new).get();
	}
	
}

