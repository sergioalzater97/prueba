import { Component } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  producto: Producto = new Producto(0,"","",0,"");
  titulo:string="Actualizacion de Datos Producto";

  constructor(private productoService:ProductoService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id) {
          this.productoService.get(id).subscribe(
            pr=>this.producto=pr
          );
        }
      }
    );
  }

  update():void{
    this.productoService.update(this.producto).subscribe(
      res=>this.router.navigate(['/productos'])
    );
  }
}
