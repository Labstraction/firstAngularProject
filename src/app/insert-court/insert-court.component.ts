import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ICourt } from "../model/ICourt";
import { Court } from "../model/Court";
import { CourtsService } from "../model/courts.service";

@Component({
  selector: 'app-insert-court',
  templateUrl: './insert-court.component.html',
  styleUrls: ['./insert-court.component.css']
})
export class InsertCourtComponent implements OnInit {

  courtService:CourtsService
  constructor(newCourtService : CourtsService) {
    this.courtService = newCourtService
  }

  court = new Court(); 

  ngOnInit() {
  }

  save(newCourtForm: NgForm) {
    console.log( newCourtForm.form);
    console.log('Saved: ' + JSON.stringify(newCourtForm.value));
    this.courtService.addCourt(this.court).subscribe();
  }
}

