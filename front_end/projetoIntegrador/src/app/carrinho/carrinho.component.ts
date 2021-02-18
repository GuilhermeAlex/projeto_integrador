import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Carrinho } from '../model/Carrinho';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  carrinho: Carrinho = new Carrinho();

  listaCarrinho: Carrinho[];

  valorFrete: number = 0.0;
  preco: number = 0.0;

  totalValor: number = 0.0;

  nome: string;
  cepX: string;
  sobrenome: string;
  cpf: string;
  rua: string;
  bairro: string;
  cep: string;
  cidade: string;
  numCartao: string;
  nameFull: string;
  codSeg: string;

  cepOKX: boolean = false;
  nomeOk: boolean = false;
  sobrenomeOK: boolean = false;
  cpfOK: boolean = false;
  boleto: boolean = true;
  cartao: boolean;
  ruaOK: boolean = false;
  bairroOK: boolean = false;
  cepOK: boolean = false;
  cidadeOK: boolean = false;
  estadoOK: boolean = false;
  numCartaoOK: boolean = false;
  nameFullOK: boolean = false;
  codSegOK: boolean = false;

  alertaNameFull: string;
  alertaNumCartao: string;
  alertaCEP: string;
  alertaBairro: string;
  alertaNome: string;
  alertaSobrenome: string;
  alertaCpf: string;
  alertaRua: string;
  alertaCidade: string;
  alertaEstado: string;
  alertaCodSeg: string;

  constructor(
    private authService: AuthService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.findAllCarrinho();
    this.total()
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

  frete() {
    this.valorFrete = 13.99;
  }

  validaFrete() {
    if (this.cepX.length < 8 || this.cepX.length > 8) {
      this.cepOKX = false;
    } else {
      this.cepOKX = true;
    }
  }

  esconde() {
    let botaoOf: boolean;
    if (this.cepOKX == false) {
      botaoOf = true;
    } else {
      botaoOf = false;
    }
    return botaoOf;
  }

  mostra() {
    let botaoOn: boolean;
    if (this.cepOKX == true) {
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
  validaSobrenome() {
    if (this.sobrenome.length < 3 || this.sobrenome == this.nome) {
      this.sobrenomeOK = false;
      this.alertaSobrenome = 'Sobrenome inválido';
    } else {
      this.sobrenomeOK = true;
      this.alertaSobrenome = '';
    }
  }

  validaCpf() {
    if (this.cpf.length < 11 || this.cpf.length > 11) {
      this.cpfOK = false;
      this.alertaCpf = 'CPF inválido';
    } else {
      this.cpfOK = true;
      this.alertaCpf = '';
    }
  }

  validaRua() {
    if (this.rua.length < 3) {
      this.ruaOK = false;
      this.alertaRua = 'Nome da Rua Inválido';
    } else {
      this.ruaOK = true;
      this.alertaRua = '';
    }
  }

  validaBairro() {
    if (this.bairro.length < 4) {
      this.bairroOK = false;
      this.alertaBairro = 'Bairro Inválido';
    } else {
      this.bairroOK = true;
      this.alertaBairro = '';
    }
  }

  validaCep() {
    if (this.cep.length < 8 || this.cep.length > 8) {
      this.cepOK = false;
      this.alertaCEP = 'CEP Inválido';
    } else {
      this.cepOK = true;
      this.alertaCEP = '';
    }
  }

  validaCidade() {
    if (this.cidade.length < 3) {
      this.cidadeOK = false;
      this.alertaCidade = 'Cidade Inválida';
    } else {
      this.cidadeOK = true;
      this.alertaCidade = '';
    }
  }
  validaEstado(event: any) {
    if (event.target.value == 'NADA') {
      this.estadoOK = false;
      this.alertaEstado = 'Selecione um estado';
    } else {
      this.estadoOK = true;
      this.alertaEstado = '';
    }
  }

  validaNumCartao() {
    if (this.numCartao.length < 17 || this.numCartao.length > 17) {
      this.numCartaoOK = false;
      this.alertaNumCartao = 'Número do Cartão inválido';
    } else {
      this.numCartaoOK = true;
      this.alertaNumCartao = '';
    }
  }

  validaNameFull() {
    if (this.nameFull.length < 6) {
      this.nameFullOK = false;
      this.alertaNameFull = 'Nome inválido';
    } else {
      this.nameFullOK = true;
      this.alertaNameFull = '';
    }
  }

  validaCodSeg() {
    if (this.codSeg.length < 3 || this.codSeg.length > 3) {
      this.codSegOK = false;
      this.alertaCodSeg = 'Cod. Segurança inválido';
    } else {
      this.codSegOK = true;
      this.alertaCodSeg = '';
    }
  }

  quantidade(event: any) {
    let precoInicio: number;
    precoInicio = 299.99;
    this.preco = precoInicio;
    this.preco = this.preco * event.target.value;
  }

  escondeFinaliza() {
    let botaoOf: boolean;
    if (
      this.nomeOk == false ||
      this.sobrenomeOK == false ||
      this.cpfOK == false ||
      this.ruaOK == false ||
      this.bairroOK == false ||
      this.cepOK == false ||
      this.cidadeOK == false ||
      this.estadoOK == false
    ) {
      botaoOf = true;
    } else {
      botaoOf = false;
    }
    return botaoOf;
  }

  mostraFinaliza() {
    let botaoOn: boolean;
    if (
      this.nomeOk == true &&
      this.sobrenomeOK == true &&
      this.cpfOK == true &&
      this.ruaOK == true &&
      this.bairroOK == true &&
      this.cepOK == true &&
      this.cidadeOK == true &&
      this.estadoOK == true
    ) {
      botaoOn = true;
    } else {
      botaoOn = false;
    }
    return botaoOn;
  }
  escondeFinalizaX() {
    let botaoOf: boolean;
    if (
      this.numCartaoOK == false ||
      this.nameFullOK == false ||
      this.codSegOK == false ||
      this.cpfOK == false ||
      this.ruaOK == false ||
      this.bairroOK == false ||
      this.cepOK == false ||
      this.cidadeOK == false ||
      this.estadoOK == false
    ) {
      botaoOf = true;
    } else {
      botaoOf = false;
    }
    return botaoOf;
  }

  mostraFinalizaX() {
    let botaoOn: boolean;
    if (
      this.numCartaoOK == true &&
      this.nameFullOK == true &&
      this.codSegOK == true &&
      this.cpfOK == true &&
      this.ruaOK == true &&
      this.bairroOK == true &&
      this.cepOK == true &&
      this.cidadeOK == true &&
      this.estadoOK == true
    ) {
      botaoOn = true;
    } else {
      botaoOn = false;
    }
    return botaoOn;
  }

  findAllCarrinho() {
    this.carrinhoService.getAllCarrinho().subscribe((resp: Carrinho[]) => {
      this.listaCarrinho = resp;
      console.log(this.listaCarrinho);
    });
  }

  // Deletar apenas 1 item do carrinho
  remover(id: number) {
    console.log(id);
    this.carrinhoService.deleteIdCarrinho(id).subscribe(() => {});
    console.log('chegay');
    alert('Removido do carrinho com sucesso!');
    this.findAllCarrinho();
  }

  total() {
    for (var produto of Object.entries(this.listaCarrinho)) {
      // this.totalValor = this.totalValor + produto.produto.preco;
      console.log("teste")
    }
  }
}
