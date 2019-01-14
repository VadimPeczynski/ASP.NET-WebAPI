import { Component, OnInit } from '@angular/core';
import { ProductService, IProduct } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  products:IProduct[];
  constructor(private productService:ProductService) {
   }

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>
      this.products = products
    );
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id);
  }

}
