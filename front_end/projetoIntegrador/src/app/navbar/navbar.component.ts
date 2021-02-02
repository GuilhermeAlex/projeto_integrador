import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto

  constructor() { }

  ngOnInit(): void {
  }

  mostraNome(){
    let nome: boolean = false

    if (this.nome != '') {
      nome = true

    }else {
      nome = false
      "https://cdn.pixabay.com/photo/2017/05/13/23/05/img-src-x-2310895_960_720.png"
    }
    return this.nome
  }

  mostraFoto(){
    let foto: boolean = false

    if (this.foto != '') {
      foto = true

    }else{
      foto = false
      "Entre ou cadastre-se"
    }
    return this.nome
  }

}
