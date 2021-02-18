import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contato } from '../model/Contato';
import { ContatoService } from '../service/contato.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato = new Contato()

  constructor(
    private router: Router,
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  postContato() {
    this.contatoService.postContato(this.contato).subscribe(() => {
      alert("Mensagem enviada com sucesso!")
    })
  }

}
