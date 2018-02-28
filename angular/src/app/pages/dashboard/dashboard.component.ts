import { Component, OnInit } from '@angular/core';

/**
  Component:
    For the main application
*/
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

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
