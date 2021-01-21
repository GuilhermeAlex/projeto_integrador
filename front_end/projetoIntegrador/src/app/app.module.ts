import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './loja/product-page/product-page.component';
import { ProductsComponent } from './loja/products/products.component';
import { FiltersComponent } from './loja/filters/filters.component';
import { MenuComponent } from './home/menu/menu.component';
import { DestaquesComponent } from './home/destaques/destaques.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    NavbarComponent,
    FooterComponent,
    ProductPageComponent,
    ProductsComponent,
    FiltersComponent,
    MenuComponent,
    DestaquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
