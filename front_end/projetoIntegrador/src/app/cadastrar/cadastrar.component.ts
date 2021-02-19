import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  cliente: Cliente = new Cliente();

  alerta: string;
  alertaSobrenome: string;
  alertaCpf: string;
  alertaRg: string;
  alertaTel: string;
  alertaEmail: string;
  alertaEmailx: string;

  emailx: string;

  confirmSenha: string;
  confirmEmail: string;

  nome: boolean;
  sobrenome: boolean;
  cpf: boolean;
  rg: boolean;
  telefone: boolean;
  email: boolean;
  senha: boolean;
  box: boolean

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
    ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmarSenha(event: any) {
    this.confirmSenha = event.target.value;
  }

  confirmarEmail(event: any) {
    this.confirmEmail = event.target.value;
  }

  cadastrar() {
    if (
      this.cliente.senha != this.confirmSenha ||
      this.cliente.email != this.confirmEmail
    ) {
      this.alertas.showAlertDanger('As senhas ou e-mail´s não coincidem');
    } else {
      this.authService.cadastrar(this.cliente).subscribe((resp: Cliente) => {
        this.cliente = resp;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      });
    }
  }

  validaNome() {
    if (this.cliente.nome.length < 3) {
      this.nome = false;
      this.alerta = 'Nome inválido';
    } else {
      this.nome = true;
      this.alerta = '';
    }
  }

  validaSobrenome() {
    if (
      this.cliente.sobrenome.length < 3 ||
      this.cliente.sobrenome == this.cliente.nome
    ) {
      this.sobrenome = false;
      this.alertaSobrenome = 'Sobrenome inválido';
    } else {
      this.sobrenome = true;
      this.alertaSobrenome = '';
    }
  }

  validaCpf() {
    if (this.cliente.cpf.length < 11 || this.cliente.cpf.length > 11) {
      this.cpf = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpf = true;
      this.alertaCpf = '';
    }
  }

  validaRg() {
    if (this.cliente.rg.length < 9 || this.cliente.rg.length > 9) {
      this.rg = false;
      this.alertaRg = 'RG inválido';
    } else {
      this.rg = true;
      this.alertaRg = '';
    }
  }

  validaTel() {
    if (this.cliente.telefone.length < 11 || this.cliente.telefone.length > 11) {
      this.telefone = false;
      this.alertaTel = 'Telefone inválido';
    } else {
      this.telefone = true;
      this.alertaTel = '';
    }
  }

  mostra() {
    let escondeB: boolean;
    if (
      this.nome == true &&
      this.sobrenome == true &&
      this.cpf == true &&
      this.rg == true &&
      this.box == true
    ) {
      escondeB = false;
    } else {
      escondeB = true;
    }
    return escondeB;
  }

  esconde() {
    let mostraB: boolean;
    if (
      this.nome != true ||
      this.sobrenome != true ||
      this.cpf != true ||
      this.rg != true ||
      this.box != true

    ) {
      mostraB = false;
    } else {
      mostraB = true;
    }
    return mostraB;
  }
}
