import { Component } from '@angular/core';
import { ProductService, IProduct } from './services/Product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  products: IProduct[];
  constructor(private productService:ProductService) {
    this.productService.getProducts().subscribe((products:IProduct[]) => {
      this.products = products;
    });
  }
  title = 'SportsStore';
}
