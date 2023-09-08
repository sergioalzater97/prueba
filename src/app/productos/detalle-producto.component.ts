import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  producto: Producto = new Producto(0,"","",0,"");
  titulo:string="Actualizacion de Datos Producto";

  constructor() { }

  ngOnInit(): void {
  }
}
