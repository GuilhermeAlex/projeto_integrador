import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {

  // alertaNome: string;
  // alertaSobrenome: string;
  // alertaCpf: string;
  // alertaRg: string;
  // alertaTel: string;
  // alertaEmail: string;
  // alertaEmailx: string;
  // nomeOk: boolean;
  // sobrenomeOk: boolean;
  // cpfOk: boolean;

  boleto: boolean = true;
  cartao: boolean;

  listaCarrinho: Produto[] = []

  constructor(private authService: AuthService) {}

  ngOnInit() {
<<<<<<< HEAD
    window.scroll(0, 0);

    // var fetchedObject = localStorage.getItem('listaIdProdutos');
    // console.log('fetchedObject for local storage: ', JSON.parse(fetchedObject ));
    
    // var listaCarrinho = JSON.parse( localStorage.getItem('listaIdProdutos') )

=======
>>>>>>> 57ec3a4492911a30290487986db7c374c427ed2f

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

<<<<<<< HEAD
  validaNome() {
    if (this.nome.length < 3) {
      this.nomeOk = false;
      this.alertaNome = 'Nome inválido';
    } else {
      this.nomeOk = true;
      this.alertaNome = '';
    }
  }
  validaSobrenome() {
    if (this.sobrenome.length < 3 || this.sobrenome == this.nome) {
      this.sobrenomeOk = false;
      this.alertaSobrenome = 'Sobrenome inválido';
    } else {
      this.sobrenomeOk = true;
      this.alertaSobrenome = '';
    }
  }

  validaCpf() {
    if (this.cpf.length < 11 || this.cpf.length > 12) {
      this.cpfOk = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpfOk = true;
      this.alertaCpf = '';
    }
  }



=======
  
>>>>>>> 57ec3a4492911a30290487986db7c374c427ed2f
}

  // validaNome() {
  //   if (this.nome.length < 3) {
  //     this.nomeOk = false;
  //     this.alertaNome = 'Nome inválido';
  //   } else {
  //     this.nomeOk = true;
  //     this.alertaNome = '';
  //   }
  // }
  // validaSobrenome() {
  //   if (this.sobrenome.length < 3 || this.sobrenome == this.nome) {
  //     this.sobrenomeOk = false;
  //     this.alertaSobrenome = 'Sobrenome inválido';
  //   } else {
  //     this.sobrenomeOk = true;
  //     this.alertaSobrenome = '';
  //   }
  // }

  // validaCpf() {
  //   if (this.cpf.length < 11 || this.cpf.length > 12) {
  //     this.cpfOk = false;
  //     this.alertaCpf = 'CPF inválido';
  //   } else {
  //     this.cpfOk = true;
  //     this.alertaCpf = '';
  //   }
  // }

