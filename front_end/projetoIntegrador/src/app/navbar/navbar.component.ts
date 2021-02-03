import { environment } from 'src/environments/environment.prod';
import { AuthService } from './../service/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  nome: string
  id: number

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit() {}

  mostraNome() {
    let ok: boolean = false;

    if (environment.token != '') {
      ok = true;
      this.nome = environment.nome;
      this.id = environment.id;
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
