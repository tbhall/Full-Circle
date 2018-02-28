import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  /**
    Initializes new names for the imports
  */
  constructor(protected router: Router) {
  }
  /**
    Tracking page analytics
  */
  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['pages/dashboard']);
  }
}
