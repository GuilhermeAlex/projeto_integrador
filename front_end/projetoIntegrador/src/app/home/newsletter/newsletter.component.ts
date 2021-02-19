import { Component, OnInit } from '@angular/core';
import { AlertasService } from 'src/app/service/alertas.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor(
    private alertas: AlertasService
  ) { }

  ngOnInit() {
  }

  inscreva(){
    this.alertas.showAlertSuccess('E-mail cadastrado com sucesso!')
  }

}
