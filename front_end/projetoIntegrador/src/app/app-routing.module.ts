import { ContatoComponent } from './contato/contato.component';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'home', component: DestaquesComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'perfil', component: PerfilComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProductPageComponent },
  { path: 'carrinho', component: CarrinhoComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path: 'produtos/:tipo', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
