import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"store",component:StoreComponent},
      {
        path:"admin",
        loadChildren:"./admin/admin.module#AdminModule"
      },
      {path:"**",redirectTo:"store"},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
