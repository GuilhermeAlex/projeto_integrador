import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { ClienteService } from './../service/cliente.service';
import { Cliente } from './../model/Cliente';

import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nome: string;

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit() {}

  mostraNome() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
      this.nome = environment.nome;
      console.log(this.nome);
    }

    return ok;
  }

  escondeNome() {
    let ok: boolean = false;
    if (environment.token == '') {
      ok = true;
    }

    return ok;
  }
}
