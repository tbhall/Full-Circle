import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Subscription } from "rxjs";
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthenticationService {
//  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  // isAdmin: boolean;
  constructor(private http: Http,
              private _cookieService: CookieService) {}

  // Method for logging in a user by posting the username and password
  // to the rest api
  login(username: string, password: string) {
    return this.http.post('/api/accounts/login', { username: username, password: password}).subscribe(val => {
      const account = val.json()
      if(account) {
        const username = JSON.stringify(account.data.username).replace(/\"+/g, '');
        const token = JSON.stringify(account.data.token).replace(/\"+/g, '');
        this._cookieService.put('user', username);
        this._cookieService.put('user_session',token);
      }
    });
  }
}
