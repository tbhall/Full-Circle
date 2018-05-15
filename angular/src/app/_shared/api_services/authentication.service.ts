import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable, Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { CookieService } from 'ngx-cookie';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationService {
  //  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    allow: Observable<boolean>;
    private _userSub: Subscription;

    constructor(private http: Http,
                private _cookieService: CookieService,
                protected router: Router) {}

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

    checkCookies() {
      const user = this._cookieService.get("user");
      const user_session = this._cookieService.get("user_session");

      if(user && user_session) {
        return true;
      } else {
        return false;
      }

    }

  }

/**
This class restricts the router to only allowing login and registration
 when there is not a valid user logged in
 **/
@Injectable()
export class CanActivateUser implements CanActivate {
  constructor(private authenticationService: AuthenticationService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {
    if(this.authenticationService.checkCookies()) {
      return true
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
