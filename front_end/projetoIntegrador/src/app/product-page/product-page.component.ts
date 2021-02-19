import { Categoria } from '../model/Categoria';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Carrinho } from 'src/app/model/Carrinho';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { environment } from 'src/environments/environment.prod';
import { Material } from 'src/app/model/Material';
import { MaterialService } from 'src/app/service/material.service';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';

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

  teste:string = '/entrar'

  carrinho: Carrinho = new Carrinho();

  listaCategoria: Categoria[];
  listaMaterial: Material[];
  categoriaModal: Categoria = new Categoria();
  categoria: Categoria = new Categoria();
  material: Material = new Material();

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private carrinhoService: CarrinhoService,
    private materialService: MaterialService,
    private route: Router,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    this.findAllCategoria();
    this.findAllProdutos();
    this.findAllMaterial();
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[]) => {
      this.listaCategoria = resp;
    });
  }

  findAllMaterial() {
    this.materialService.getAllMaterial().subscribe((resp: Material[]) => {
      this.listaMaterial = resp;
    });
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;

      this.findAllCategoria();
      this.findAllMaterial();
    });
  }

  findByIdCategoria(event: any) {
    this.categoriaService
      .getByIdCategoria(event.target.value)
      .subscribe((resp: Categoria) => {
        this.categoria = resp;

        this.listaProdutos = this.categoria.produto;
      });
  }
  findByIdMaterial(event: any) {
    this.materialService
      .getByIdMaterial(event.target.value)
      .subscribe((resp: Material) => {
        this.material = resp;

        this.listaProdutos = this.material.produto;
      });
  }

  findByIdProduto(id: number, idCategoria: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produtoModal = resp;

      this.categoriaService
        .getByIdCategoria(idCategoria)
        .subscribe((resp: Categoria) => {
          this.categoriaModal = resp;
          this.listaProdutosModal = this.categoriaModal.produto;
        });
    });
  }

  addCarrinho(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.carrinho = new Carrinho();
      this.carrinho.produto = resp;
      this.postCarrinho(this.carrinho);
      this.alertas.showAlertInfo("Seu produto foi adicionado ao carrinho!")
    });
  }
  compraProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.carrinho = new Carrinho();
      this.carrinho.produto = resp;
      this.postCarrinho(this.carrinho);
      this.route.navigate(['/carrinho'])
    })
  }

  postCarrinho(carrinho: Carrinho) {
    this.carrinhoService.postCarrinho(carrinho).subscribe((resp: Carrinho) => {
      this.carrinho = resp;
    });
  }

  verificaLogin(){
    let verifica: boolean
    if (environment.token == '') {
      verifica = true
    }else{
      verifica = false
    }
    return verifica
  }

  permiteLogin(){
    let verifica: boolean
    if (environment.token != '') {
      verifica = true
    }else{
      verifica = false
    }
    return verifica
  }

}
