import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductEditorComponent } from './components/product-editor/product-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"auth", component:AuthComponent},
      {path:"main", component:AdminComponent, canActivate:[AuthGuard],
        children:[
          {path:"products/:mode/:id", component:ProductEditorComponent},
          {path:"products/:mode", component:ProductEditorComponent},
          {path:"products", component:ProductTableComponent},
          {path:"**", redirectTo:"products"}
        ]
      },
      {path:"**", redirectTo:"auth"}
    ])
  ],
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule { }
