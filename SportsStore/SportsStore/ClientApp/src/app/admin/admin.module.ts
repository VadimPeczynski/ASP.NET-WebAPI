import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { AdminComponent } from './components/admin/admin.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule} from '@angular/common/http'
import { AuthGuard } from './guards/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:"auth", component:AuthComponent},
      {path:"main", component:AdminComponent, canActivate:[AuthGuard]},
      {path:"**", redirectTo:"auth"}
    ])
  ],
  declarations: [AuthComponent, AdminComponent],
  providers: [AuthService, AuthGuard]
})
export class AdminModule { }
