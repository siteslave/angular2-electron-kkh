import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public logged: boolean = false;

  constructor() {
    let token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
