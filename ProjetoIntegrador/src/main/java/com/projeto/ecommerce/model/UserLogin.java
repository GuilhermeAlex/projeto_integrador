package com.projeto.ecommerce.model;

public class UserLogin {

	private String email;
	
	private String usuario;
	
	private String senha;
	
	private String token;

	// Get e Set


	public String getUsuario() {
		return usuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
