import { Component, OnInit } from '@angular/core';

/**
  Component:
    For the main application
*/
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  /**
    Initializes new names for the imports
  */
  constructor() {
  }
  /**
    Tracking page analytics
  */
  ngOnInit(): void {
  }
}
