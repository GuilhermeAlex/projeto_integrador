import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/Contato';
import { AlertasService } from '../service/alertas.service';
import { ContatoService } from '../service/contato.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contato: Contato = new Contato()

  constructor(
    private contatoService: ContatoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  postContato() {
    this.contatoService.postContato(this.contato).subscribe(() => {
      this.alertas.showAlertSuccess("Mensagem enviada com sucesso!")
    })
  }

}
