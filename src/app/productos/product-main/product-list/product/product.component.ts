import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/productos/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() producto: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
