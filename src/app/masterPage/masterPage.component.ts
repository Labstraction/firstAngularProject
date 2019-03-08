import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-masterPage',
  templateUrl: './masterPage.component.html',
  styleUrls: ['./masterPage.component.css']
})
export class MasterPageComponent implements OnInit {

  pageTitle = "UberSportManager";
  constructor() { }

  ngOnInit() {
  }

}
