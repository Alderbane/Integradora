import { Injectable } from '@angular/core';
import { Product, Especificacion } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[];
  monitoreo: Product[]
  constructor() { 
    this.products = [
      new Product(12,"Smartphone","LG","Quadcore 3GHZ", 12018.5,5, []),
      new Product(123,"Smartwatch", "Sony", "3GB Ram", 4999.9,0,  []),
      new Product(34,"SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9,3 , [])]
    this.monitoreo = [];
  }
  getProducts(): Product[]{
    return this.products.slice();
  }
  findProducts(str: string): Product[]{
    return this.products.filter(e => {
      e.descripcion.includes(str) || e.nombre.includes(str) || e.marca.includes(str)
    })
  }

  addSpec(pos:number, spec:Especificacion):void{
    this.products[pos].especificacion.push(spec);
  }
  deleteSpec(posProd:number, posSpec:number):void{
    this.products[posProd].especificacion.splice(posSpec,1);
  }
  deleteProduct(posProd:number):void{
    this.products.splice(posProd,1);
  }

}
