import { Component, OnInit } from '@angular/core';


declare var require: any;

@Component({
  selector: 'app-welcomePage',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.css']
})
export class WelcomePageComponent implements OnInit {

  public logoImage = require("./images/logo1.png");

  constructor() { }

  ngOnInit() {
  }

}
