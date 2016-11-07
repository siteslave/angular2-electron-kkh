import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: boolean = false;

  constructor(public router: Router) {
    let token = localStorage.getItem('token');
    if (token) {
      this.router.navigateByUrl('/users');
      // location.href = './users';
    }
   }

  ngOnInit() {
  }

  login() {
    if (this.username == 'admin' && this.password == 'admin') {
      this.error = false;
      localStorage.setItem('token', '1234567890');
      this.router.navigateByUrl('/users');
      // location.href = './users';
    } else {
      this.error = true;
    }
  }

}
