import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{HashLocationStrategy, LocationStrategy } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './loja/product-page/product-page.component';
import { ProductsComponent } from './loja/products/products.component';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { CategoriasComponent } from './home/categorias/categorias.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    NavbarComponent,
    FooterComponent,
    ProductPageComponent,
    ProductsComponent,
    DestaquesComponent,
    CategoriasComponent,
    NewsletterComponent,
    CarrinhoComponent,
    PerfilComponent,
    SobreComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
