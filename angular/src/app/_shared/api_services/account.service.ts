

/*
 * user.service.ts
 * The user service contains a standard set of CRUD methods for managing users via the api.
*/
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { Account } from '../models/account';

/**
  Service that makes calls to the api user service
*/
@Injectable()
export class UserService {
  headerDict = null;
  requestOptions = null;

  constructor(private http: Http, private _cookieService: CookieService,) {}
    /**
    Calls api users service to get all users

    @return {json}
    */
    getAll() {
    this.checkUser();
    return this.http.get('/api/accounts', this.requestOptions)
      .map((response: Response) => response.json());
    }

    /**
      Checks to see if there is a current user and sets the headers
      @param {none}
      @return {none}
    */
    checkUser() {
      const user = this._cookieService.get("user");
      var user_session = this._cookieService.get("user_session");

      if (user !== null && user_session !== null ) {
          this.headerDict = {
            'Authorization': `Bearer ` + this._cookieService.get("user_session"),
            'Issuer': this._cookieService.get("user"),
          };

          this.requestOptions = {
            headers: new Headers(this.headerDict),
          };
      }
    }
}
