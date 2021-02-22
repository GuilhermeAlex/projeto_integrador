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
    return this.http.get<Carrinho[]>('https://www.sustenart.com.br/carrinho',this.token)
  }

  postCarrinho(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.post<Carrinho>('https://www.sustenart.com.br/carrinho', carrinho, this.token)
  }

  deleteIdCarrinho(id: number) {
    return this.http.delete(`https://www.sustenart.com.br/carrinho/delete/${id}`, this.token)
  }
  deleteAll() {
    return this.http.delete('https://www.sustenart.com.br/carrinho/deleteAll', this.token)
  }
}
