import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productos: Product[];
  
  constructor(private ProdServ: ProductsService) { 
    this.productos = ProdServ.getProducts();
  }

  ngOnInit(): void {
  }

}
