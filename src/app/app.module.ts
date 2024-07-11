import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { HttpClientModule } from "@angular/common/http"
import { ProductoService } from './servicios/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
