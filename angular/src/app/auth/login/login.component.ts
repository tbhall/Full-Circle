import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_shared/api_services/authentication.service'
/**
  Component:
    For the main application
*/
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    user: any = {};
  /**
    Initializes new names for the imports
  */
  constructor(protected router: Router,
              protected authenticationService: AuthenticationService) {
  }
  /**
    Tracking page analytics
  */
  ngOnInit(): void {
  }

  login() {
    this.authenticationService.login("tbhall", "1234");
  }
}
