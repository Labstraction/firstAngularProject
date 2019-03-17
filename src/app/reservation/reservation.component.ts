import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../model/reservations.service';
import { Reservation } from '../model/Reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

title = "Uber Sport Manager";

  constructor(private reservationsService: ReservationsService) {}

  reservations : Reservation[];
  reservation : Reservation;
  
  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe(
      newReservations => this.createModel(newReservations),
      error => console.log(error))
  }

  public createModel(newReservations : Reservation[]){
    this.reservations = newReservations; this.reservation = this.reservations[0];
  }
}