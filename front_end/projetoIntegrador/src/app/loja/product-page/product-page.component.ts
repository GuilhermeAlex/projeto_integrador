import { Categoria } from './../../model/Categoria';
import { ProdutoService } from './../../service/produto.service';
import { AuthService } from './../../service/auth.service';
import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {

  produto: Produto = new Produto();
  listaProdutos: Produto[];

  listaCategoria: Categoria[];

  categoria: Categoria = new Categoria();
  pegarTipo: number;
  tipo: number;


  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    this.findAllCategoria()
    this.findAllProdutos()
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp
      console.log(this.listaCategoria);
            
    })
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp
      this.findAllCategoria()
    })
  }

  findByIdCategoria(event: any) {
    this.categoriaService.getByIdCategoria(event.target.value).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.listaProdutos = this.categoria.produto
    })
  }

  infoProduto(id: number){
    console.log(id);
    
  }


}