import { Produto } from './../model/Produto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/produto',this.token)
  }

  getByIdProduto(id: number):Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/id/${id}`,this.token)
  }

  getByNomeProduto(nome: string):Observable<Produto[]>{
    return this.http.get<Produto[]>(`http://localhost:8080/produto/nome/${nome}`,this.token)
  }

  getByPrecoProduto(preco: number):Observable<Produto>{
    return this.http.get<Produto>(`http://localhost:8080/produto/preco/${preco}`,this.token)
  }

}
