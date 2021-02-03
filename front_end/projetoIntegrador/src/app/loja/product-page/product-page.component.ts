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
  listaTipo: Categoria[];
  listaMaterial: Categoria[];

  tipo: string

  tipoCategoria: string

  categoria: Categoria = new Categoria();

  constructor(
    private router: Router,
    private auth: AuthService,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.getAllProdutos()
    // this.findAllCategoria()
  }


  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{

      this.listaProdutos = resp
    })
  }
  // findAllCategoria(){
  //   this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
  //     this.listaCategoria = resp
  //     console.log(resp)
  //   })
  // }

  // findAllTipo(){
  //   this.categoriaService.getByTipoCategoria(this.tipo).subscribe((resp: Categoria[])=>{
  //     this.listaMaterial = resp
  //     console.log(resp)
  //   })
  // }

}
