import { Component, OnInit } from '@angular/core';
import { CourtsService } from '../model/courts.service';
import { Court} from '../model/Court'

@Component({
  selector: 'app-courtsList',
  templateUrl: './courtsList.component.html',
  styleUrls: ['./courtsList.component.css']
})
export class CourtsListComponent implements OnInit{
  title = "Uber Sport Manager";

  constructor(private courtsService: CourtsService) {}

  courts : Court[];
  court : Court;
  

  ngOnInit(): void {
    this.courtsService.getCourts().subscribe(
      newCourts => this.createModel(newCourts),
      error => console.log(error))
  }

  public createModel(newCourts : Court[]){
    this.courts = newCourts; this.court = this.courts[0];
  }
}
