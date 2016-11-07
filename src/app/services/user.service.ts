import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

import { IUser } from '../shared'

@Injectable()
export class UserService {

  constructor( @Inject('API_URL') public url, public http: Http) {
    console.log(this.url);
  }
  
  all() {
    let url = `${this.url}/users`; // http://localhost:3000/users

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  
  detail(id: string) {
    let url = `${this.url}/users/${id}`; // http://localhost:3000/users/xxx

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  
  remove(id: string) {
    let url = `${this.url}/users/${id}`; // http://localhost:3000/users/xxx

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.delete(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  getGroups() {
    let url = `${this.url}/groups`; // http://localhost:3000/groups

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  save(user: IUser) {
    let url = `${this.url}/users`; // http://localhost:3000/users

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
      let body = {
        username: user.username,
        name: user.name,
        email: user.email,
        group_id: user.group_id
      };

      this.http.post(url, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

  update(user: IUser) {
    let url = `${this.url}/users`; // http://localhost:3000/users

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });
      // id, name, email, group_id
      let body = {
        id: user.id,
        name: user.name,
        email: user.email,
        group_id: user.group_id
      };

      this.http.put(url, body, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

}
