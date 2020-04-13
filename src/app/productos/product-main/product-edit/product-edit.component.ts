import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: number;
  modoAdd: boolean;
  constructor(private router:Router, private route: ActivatedRoute) { }
  products: Product;
  ngOnInit(): void {
    this.route.params
      .subscribe(
          (params) => {
              if(params['id']){
                this.id = params['id'];
                this.modoAdd = false;
              }else {
                this.modoAdd = true;
              }
          }
      )
  }

}
