import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Carrinho } from '../model/Carrinho';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCarrinho(): Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>('http://localhost:8080/carrinho',this.token)
  }

  postCarrinho(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.post<Carrinho>('http://localhost:8080/carrinho', carrinho, this.token)
  }

  deleteIdCarrinho(id: number) {
    return this.http.delete(`http://localhost:8080/carrinho/delete/${id}`, this.token)
  }
  deleteAll() {
    return this.http.delete('http://localhost:8080/carrinho/deleteAll', this.token)
  }
}
