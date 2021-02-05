import { Categoria } from './../../model/Categoria';
import { ProdutoService } from './../../service/produto.service';
import { Produto } from './../../model/Produto';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {

  produto: Produto = new Produto();
  produtoModal: Produto = new Produto();
  listaProdutos: Produto[];
  listaProdutosModal: Produto[];
  listaIdProdutos: Produto[] = [];

  listaCategoria: Categoria[];
  categoriaModal: Categoria = new Categoria();
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

  findByIdProduto(id: number, idCategoria: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produtoModal = resp

    this.categoriaService.getByIdCategoria(idCategoria).subscribe((resp: Categoria) => {
      this.categoriaModal = resp      
      this.listaProdutosModal = this.categoriaModal.produto      
    })

    })
  }

  addCarrinho(idProduto: Produto){
    this.listaIdProdutos.push(idProduto)
    console.log(this.listaIdProdutos);
    
  }
  
}