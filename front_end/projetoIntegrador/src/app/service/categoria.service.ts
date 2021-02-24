import { Categoria } from './../model/Categoria';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('http://localhost:8080/categoria',this.token)
  }

  getByIdCategoria(id: number):Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categoria/id/${id}`,this.token)
  }

  getByTipoCategoria(tipo: string):Observable<Categoria>{
    return this.http.get<Categoria>(`http://localhost:8080/categoria/tipo/${tipo}`,this.token)
  }

}
