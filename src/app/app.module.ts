import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyLibModule } from 'prueba-concepto-libreria';
import { PruebaConceptoLibreriaDosModule } from 'prueba-concepto-libreria-dos';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { AppRoutingModule } from 'prueba-concepto-libreria';
import { AppRoutingModule as AppRoutingModule2 } from 'prueba-concepto-libreria-dos';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListRoutesComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MyLibModule,
    PruebaConceptoLibreriaDosModule,
    AppRoutingModule,
    AppRoutingModule2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
