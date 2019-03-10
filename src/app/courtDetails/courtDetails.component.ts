
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Court } from '../model/Court';
import { CourtsService } from '../model/courts.service';
import { count } from 'rxjs/operators';
import {ICourt} from '../model/ICourt';

@Component({
  selector: 'app-court-details',
  templateUrl: './courtDetails.component.html',
  styleUrls: ['./courtDetails.component.css']
})

export class CourtDetailsComponent implements OnInit {
  pageTitle = 'Court Detail';
  errorMessage = '';
  court: ICourt | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private courtsService: CourtsService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.courtsService.getCourts().subscribe(
        courts => this.court = courts.find(court => court.id === id),
        error => console.log(error))}
  }

  getCourtImage(){
    if (this.court.sportString.toLowerCase()==="tennis") {
      return "https://www.fitalia-wellness-hotel.it/upload/cache/immagini/pagine/tennis/fi_3696-1200x900.jpg";
    }else{
      return "https://www.gazzettinonline.it/wp-content/uploads/2015/10/campo-da-calcetto.jpg";
    }
  }

  onBack(): void {
    this.router.navigate(['/courts']);
  }

}

