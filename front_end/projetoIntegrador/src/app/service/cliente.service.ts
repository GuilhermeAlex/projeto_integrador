import { Observable } from 'rxjs';
import { Cliente } from './../model/Cliente';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdCliente(id: number):Observable<Cliente>{
    return this.http.get<Cliente>(`https://www.sustenart.com.br/cliente/id/${id}`,this.token)
  }

  getByEmailCliente(email: string):Observable<Cliente>{
    return this.http.get<Cliente>(`https://www.sustenart.com.br/cliente/email/${email}`,this.token)
  }

  putCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>('https://www.sustenart.com.br/cliente', this.token)
  }

  deleteIdCliente (id: number){
  return this.http.delete(`https://www.sustenart.com.br/cliente/${id}`,this.token)
  }
}

