import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  titulo: string = "Lista de Estudiantes";
  prueba: string = 'Una prueba';

  productos!: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e => this.productos = e
    );
  }

  delete(producto: Producto):void {
    this.productoService.delete(producto.id).subscribe(
      res=>this.productoService.getAll().subscribe(
        response=>this.productos=response
      )
    );
  }
}
