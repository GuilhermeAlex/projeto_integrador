import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto();

  boleto: boolean = true;
  cartao: boolean;

  valorFrete: number = 0.0;
  preco: number = 299.99;

  cep: string;
  cepOK: boolean = false;
  nomeOk: boolean;
  nome: string;
  alertaNome: string;

  listaCarrinho: Produto[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.quantidade(1);
    this.mostraBoleto();
    this.frete()

  }

  mostraBoleto() {
    if (this.boleto === true) {
      this.cartao = false;
    } else if (this.boleto == false) {
      this.cartao = true;
    }
    return this.boleto;
  }
  mostraCartao() {
    if (this.boleto === false) {
      this.cartao = true;
    } else if (this.boleto == true) {
      this.cartao = false;
    }
    return this.cartao;
  }

  total() {
    let total: number;
    total = this.preco + this.valorFrete;

    return total;
  }

  frete() {
    this.valorFrete = 13.99;
  }

  validaFrete() {
    if (this.cep.length < 7) {
      this.cepOK = false;
    } else {
      this.cepOK = true;
    }
  }

  esconde() {
    let botaoOf: boolean;
    if (this.cepOK == false) {
      botaoOf = true;
    } else {
      botaoOf = false;
    }
    return botaoOf;
  }

  mostra() {
    let botaoOn: boolean;
    if (this.cepOK == true) {
      botaoOn = true;
    } else {
      botaoOn = false;
    }
    return botaoOn;
  }

  validaNome() {
    if (this.nome.length < 3) {
      this.nomeOk = false;
      this.alertaNome = 'Nome inválido';
    } else {
      this.nomeOk = true;
      this.alertaNome = '';
    }
  }

  quantidade(event: any) {
    let precoInicio: number;
    precoInicio = 299.99;
    this.preco = precoInicio;
    this.preco = this.preco * event.target.value;
  }
}
