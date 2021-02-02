import { environment } from '../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nome = environment.nome;
  nomeMostra: string
  linkUsuario: string
  constructor() {}

  ngOnInit() {
    if (this.nome == '') {
      this.nomeMostra = 'Entre ou cadastre-se'
      this.linkUsuario = 'entrar'
    }else{
      this.nomeMostra = this.nome
    }
  }


}
