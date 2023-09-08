import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { FormProductoComponent } from './productos/form-producto.component';
import { DetalleProductoComponent } from './productos/detalle-producto.component';

const routes:Routes=[
  { path:'', redirectTo:'/productos', pathMatch:'full' },
  { path:'productos', component:ProductosComponent },
  { path:'productos/form/:id', component:FormProductoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FormProductoComponent,
    DetalleProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
