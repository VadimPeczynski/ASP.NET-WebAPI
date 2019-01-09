import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username:string;
  public password:string;
  public errorMessage:string;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  authenticate(form:NgForm){
    if (form.valid) {
      this.auth.authenticate();
      this.router.navigateByUrl("admin/main");
    } else {
      this.errorMessage = "Nieprawidlowe dane";
    }
  }

}
