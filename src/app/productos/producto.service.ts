import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = "https://api-node-prueba-production.up.railway.app/api/products";

  constructor(private http: HttpClient) { }

  //Obtener los productos
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  //Obtener un  producto GETBYID
  get(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/' + id);
  }

  //Crear un producto
  post(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  //Actualizar un producto
  update(producto: Producto): Observable<Producto> {
    return this.http.patch<Producto>(this.url, producto);
  }

  //Borrar un producto
  delete(id: number): Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/' + id);
  }
}
