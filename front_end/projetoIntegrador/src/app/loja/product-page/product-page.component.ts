import { Categoria } from './../../model/Categoria';
import { ProdutoService } from './../../service/produto.service';
import { AuthService } from './../../service/auth.service';
import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  categoria: Categoria = new Categoria();

  constructor(
    private router: Router,
    private auth: AuthService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.getAllProdutos()
  }


  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      console.log(resp)
      this.listaProdutos = resp
    })
  }

}
