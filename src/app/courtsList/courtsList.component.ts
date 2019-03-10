import { Component, OnInit } from '@angular/core';
import { ICourt } from '../model/ICourt';
import { CourtsService } from '../model/courts.service';

@Component({
  selector: 'app-courtsList',
  templateUrl: './courtsList.component.html',
  styleUrls: ['./courtsList.component.css']
})
export class CourtsListComponent implements OnInit{
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
