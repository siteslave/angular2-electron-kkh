import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { UserService } from '../services/user.service';
import { IHttpResult, IUser, IGroup } from '../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: Array<IUser>;

  constructor(public userService: UserService, public router: Router) { 
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.getUsers();

    // localStorage.setItem('token', '1234567890');
  }

  getUsers() {
    this.userService.all()
      .then((res: IHttpResult) => {
        if (res.ok) {
          console.log(res.rows);
          this.users = <Array<IUser>>res.rows;
        } else {
          console.log(res.err);
        }
      });
  }

  edit(user: IUser) {
    this.router.navigate(['/', user.id]);
  }

  remove(user: IUser) {
    if (confirm('Are you sure? [' + user.name + ']')) {
      this.userService.remove(user.id)
        .then((res: IHttpResult) => {
          if (res.ok) {
            this.getUsers();
          } else {
            console.log(res.err);
          }
        });
    }
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

}
