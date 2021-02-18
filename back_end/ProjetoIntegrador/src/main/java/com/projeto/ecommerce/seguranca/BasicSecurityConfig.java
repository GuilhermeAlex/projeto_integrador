package com.projeto.ecommerce.seguranca;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class BasicSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService);
	}
	
	@Bean
	public PasswordEncoder passawordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.authorizeRequests()
		.antMatchers("/cliente/**").permitAll()
		.antMatchers(HttpMethod.GET,"/produto").permitAll()
		.antMatchers(HttpMethod.GET,"/categoria").permitAll()
		.antMatchers(HttpMethod.GET,"/categoria/**").permitAll()
		.antMatchers(HttpMethod.GET,"/produto/**").permitAll()
		.antMatchers(HttpMethod.GET,"/carrinho/**").permitAll()
		.antMatchers(HttpMethod.POST,"/carrinho/**").permitAll()
		.antMatchers(HttpMethod.POST,"/contato/**").permitAll()
		.antMatchers(HttpMethod.DELETE,"/carrinho/**").permitAll()
		.antMatchers(HttpMethod.GET,"/material/**").permitAll()
		.antMatchers("/cliente/cadastrar").permitAll()
		.anyRequest().authenticated()
		.and().httpBasic()
		.and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().cors()
		.and().csrf().disable();
		
	}
	
}