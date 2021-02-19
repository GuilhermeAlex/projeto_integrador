import { Cliente } from './../model/Cliente';
import { AuthService } from './../service/auth.service';
import { environment } from './../../environments/environment.prod';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.email = this.userLogin.email
      environment.id = this.userLogin.id


      this.router.navigate(['/home'])
    }, erro =>{
      if (erro.status == 500){
        this.alertas.showAlertDanger("Usuário ou senha incorretos")
      }
    })
  }

}
