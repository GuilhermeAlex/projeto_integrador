import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  boleto: boolean = true
  cartao: boolean

  constructor() { }

  ngOnInit() {

  }

  mostraBoleto(){

    if(this.boleto === true){
      this.cartao = false

    }else if(this.boleto == false){
      this.cartao = true
    }
    return this.boleto

  }
    mostraCartao(){

      if(this.boleto === false){
        this.cartao = true

      }else if(this.boleto == true){
        this.cartao = false
      }
      return this.cartao
    }

}
