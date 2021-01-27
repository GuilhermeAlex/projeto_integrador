
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente: Cliente = new Cliente
  confirmSenha: string
  confirmEmail: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value
  }

  confirmarEmail(event: any) {
    this.confirmEmail = event.target.value
  }

  cadastrar() {

    if(this.cliente.senha != this.confirmSenha && this.cliente.email != this.confirmEmail){
      alert("As senhas ou e-mail´s não coincidem")
    }else{
      this.authService.cadastrar (this.cliente).subscribe((resp: Cliente) => {
        this.cliente = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}

