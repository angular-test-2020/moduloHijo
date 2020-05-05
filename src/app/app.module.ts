import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyLibModule } from 'prueba-concepto-libreria';
import { ListRoutesComponent } from './list-routes/list-routes.component';
import { AppRoutingModule } from 'prueba-concepto-libreria';

@NgModule({
  declarations: [
    AppComponent,
    ListRoutesComponent,
  ],
  imports: [
    BrowserModule,
    MyLibModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
