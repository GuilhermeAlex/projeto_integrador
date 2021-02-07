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
  preco: number = 299.0;

  valFrete: string;
  confirmFrete: boolean = true

  listaCarrinho: Produto[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    window.scroll(0, 0);

    // var fetchedObject = localStorage.getItem('listaIdProdutos');
    // console.log('fetchedObject for local storage: ', JSON.parse(fetchedObject ));

    // var listaCarrinho = JSON.parse( localStorage.getItem('listaIdProdutos') )
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
    this.valorFrete = 13.9;
  }

  validaFrete() {
    if (this.valFrete.length < 7) {
      this.confirmFrete = false;
    } else {
      this.confirmFrete = true;
    }
  }

  mostra() {
    let escondeB: boolean;
    if (this.confirmFrete == true) {
      escondeB = false;
    } else {
      escondeB = true;
    }
    return escondeB;
  }

  esconde() {
    let mostraB: boolean;
    if (this.confirmFrete == false) {
      mostraB = false;
    } else {
      mostraB = true;
    }
    return mostraB;
  }
}
