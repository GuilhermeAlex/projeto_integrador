import { ContatoComponent } from './contato/contato.component';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  {path: 'home', component: DestaquesComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
