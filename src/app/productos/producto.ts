export class Producto {
  id: number;
  name: string;
  description: string;
  valor: number;
  imageURL: string;

  constructor(id: number, name: string, description: string, valor: number, imageURL: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.valor = valor;
    this.imageURL= imageURL;
  }
}
