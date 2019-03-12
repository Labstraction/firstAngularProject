import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../model/reservations.service';
import { IMember} from '../model/IMember';
import { IReservation } from '../model/IReservation';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {
  pageTitle = 'Dettagli della prenotazione';
  errorMessage = '';
  reservation: IReservation | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.reservationsService.getReservations().subscribe(
        reservations => this.reservation = reservations.find(reservations => reservations.id === id),
        error => console.log(error))}
  }

  onBack(): void {
    this.router.navigate(['/Reservations']);
  }

}