import { Component, OnInit } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-masterPage',
  templateUrl: './masterPage.component.html',
  styleUrls: ['./masterPage.component.css'],
})
export class MasterPageComponent implements OnInit {

  pageTitle = "UberSportManager";
  public logoImage = require("./images/UBSHeader.jpg")
  constructor() { }

  ngOnInit() {
  }

}
