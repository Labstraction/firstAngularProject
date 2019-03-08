import { Component, OnInit } from '@angular/core';
import { Court } from "./model/Court";
import { ICourt } from "./model/ICourt";
import { CourtsService } from './model/courts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Uber Sport Manager";

  constructor(private courtsService: CourtsService) {}

  courts : ICourt[];
  court : ICourt;
  

  public displayName(event, court): void {
    alert(court.name);
  }

  public onMaxPlayerClicked(string:string):void{
    alert(string);
  } 
  
  ngOnInit(): void {
    this.courtsService.getCourts().subscribe(
      newCourts => this.createModel(newCourts),
      error => console.log(error))
  }

  public createModel(newCourts : ICourt[]){
    this.courts = newCourts; this.court = this.courts[0];
  }
}
