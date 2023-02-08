import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BarraPesquisaComponent } from './barra-pesquisa/barra-pesquisa.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
    BarraPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
