import { Component, OnInit } from '@angular/core';
import { IProduct, ProductService } from 'src/app/services/Product/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  products: IProduct[];
  filteredProducts: IProduct[];
  categories: string[];
  selectedCategory:string;
  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products:IProduct[]) => {
      this.products = products;
      this.filteredProducts = products;
    });
    this.productService.getCategories().subscribe((categories:string[]) => {
      this.categories = categories;
    });
  }

  changeCategory(newCategory?:string){
    this.selectedCategory = newCategory;
    this.filteredProducts = this.selectedCategory?this.performFilter(this.selectedCategory):this.products;
  }

  private performFilter(filterBy:string):IProduct[]{
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=> product.category.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

}
