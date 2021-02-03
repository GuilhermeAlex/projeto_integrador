import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Cliente } from '../model/Cliente';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  
  cliente: Cliente = new Cliente()
  idUser: number;
  confirmarSenha: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.router.navigate(['/entrar']);
    }

    this.idUser = this.route.snapshot.params['id'];
    this.findById(this.idUser)
  }

  findById(id: number){
    this.authService.getByIdCliente(id).subscribe((resp: Cliente) => {
      this.cliente = resp      
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  atualizar() {
    if (this.cliente.senha != this.confirmarSenha) {
      alert('Senhas não conferem');
    } else {
      this.authService.cadastrar(this.cliente).subscribe((resp: Cliente) => {
        this.cliente = resp;
        this.router.navigate(['/home']);
        alert('Usuário atualizado com sucesso, faça o login novamente.');
        environment.token = '';
        environment.nome = '';
        environment.email = '';

        this.router.navigate(['/entrar']);
      });
    }
  }
}
