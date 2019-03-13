import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ICourt } from "../model/ICourt";
import { Reservation } from "../model/Reservation";
import { ReservationsService } from "../model/reservations.service";
import { CourtsService } from "../model/courts.service";

@Component({
  selector: 'app-insert-reservation-reactive',
  templateUrl: './insert-reservation-reactive.component.html',
  styleUrls: ['./insert-reservation-reactive.component.css']
})

export class InsertReservationReactiveComponent implements OnInit {
  newReservationForm: FormGroup;
  reservation = new Reservation();

  constructor(private fb: FormBuilder, private reservationService : ReservationsService, private courtsService: CourtsService) { }

  courts : ICourt[];
  court : ICourt;


  ngOnInit() {
    this.newReservationForm = this.fb.group({
      nameCourt:['', [Validators.required]],
      nameMember: ['', [Validators.required]],
      isDouble: [false],
      date: [null, [Validators.required]]
    });

    this.courtsService.getCourts().subscribe(
      newCourts => this.createModel(newCourts),
      error => console.log(error))
  }

  
  save() {
    console.log(this.newReservationForm);
    console.log('Salvato: ' + JSON.stringify(this.newReservationForm.value));
    if (this.newReservationForm.valid) {
      this.reservation= this.newReservationForm.value;
    }
    this.reservationService.addReservation(this.reservation).subscribe();
  }

  public createModel(newCourts : ICourt[]){
    this.courts = newCourts; this.court = this.courts[0];
  }

}

