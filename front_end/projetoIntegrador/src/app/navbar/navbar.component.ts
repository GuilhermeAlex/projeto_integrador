import { Produto } from './../model/Produto';
import { ProdutoService } from './../service/produto.service';

import { environment } from 'src/environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  produto: Produto = new Produto();
  listaProdutos: Produto[];
  nome: string;
  id: number;

  pesquisa: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  mostraNome() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
      this.nome = environment.nome;
      this.id = environment.id;
    }

    return ok;
  }

  escondeNome() {
    let ok: boolean = false;
    if (environment.token == '') {
      ok = true;
    }

    return ok;
  }

  verificaLogin() {
    let verifica: boolean;
    if (environment.token == '') {
      verifica = true;
    } else {
      verifica = false;
    }
    return verifica;
  }

  permiteLogin() {
    let verifica: boolean;
    if (environment.token != '') {
      verifica = true;
    } else {
      verifica = false;
    }
    return verifica;
  }

  sair() {
    environment.token = '';
    environment.nome = '';
    environment.email = '';
    environment.id = 0;
  }

  getAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    });
  }

  findByNomeProduto() {
    if (this.pesquisa == '') {
      this.getAllProdutos();
    } else {
      this.produtoService
        .getByNomeProduto(this.pesquisa)
        .subscribe((resp: Produto[]) => {
          this.listaProdutos = resp;
        });
    }
  }
}
