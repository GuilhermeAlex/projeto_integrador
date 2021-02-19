import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{HashLocationStrategy, LocationStrategy } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';//
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { DestaquesComponent } from './home/destaques/destaques.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    NavbarComponent,
    FooterComponent,
    ProductPageComponent,
    DestaquesComponent,
    NewsletterComponent,
    CarrinhoComponent,
    PerfilComponent,
    SobreComponent,
    ContatoComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
