import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/user.service'
import { IGroup, IHttpResult, IUser } from '../shared'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public groups: Array<IGroup>;
  public user: IUser;
  public id: string;

  constructor(
    public userService: UserService,
    public router: Router,
    public route: ActivatedRoute
  ) { 
    this.user = {
      id: null,
      username: null,
      name: null,
      email: null,
      group_id: null
    };

    this.id = this.route.snapshot.params['id'];

  }

  ngOnInit() {

    this.userService.getGroups()
      .then((res: IHttpResult) => {
        if (res.ok) {
          this.groups = <Array<IGroup>>res.rows;
        } else {
          alert(JSON.stringify(res.err));
        }
      }, err => {
        alert('Connection failed!')
      });
    

    if (this.id) {
      this.userService.detail(this.id)
        .then((res: IHttpResult) => {
          if (res.ok) {
            this.user = res.user;
          } else {
            alert(JSON.stringify(res.err));
          }
        }); 
    }// end if

  }

  save() {
    if (this.id) {
      // update
      this.userService.update(this.user)
        .then((res: IHttpResult) => {
          if (res.ok) {
            // success
            this.router.navigateByUrl('/users');
          } else {
            alert(JSON.stringify(res.err));
          }
        }, err => {
          alert('Connection failed!')
        });
    } else {
      // new 
      this.userService.save(this.user)
        .then((res: IHttpResult) => {
          if (res.ok) {
            // success
            this.router.navigateByUrl('/users');
          } else {
            alert(JSON.stringify(res.err));
          }
        }, err => {
          alert('Connection failed!')
        });
    }

  }

}
