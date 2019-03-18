import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../model/reservations.service';
import { Reservation } from '../model/Reservation';
import { ConfirmationDialogService } from "../confirmation-dialog/confirmation-dialog.service";

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {
  pageTitle = 'Dettagli della prenotazione';
  errorMessage = '';
  reservation: Reservation | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private reservationsService: ReservationsService,
              private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.reservationsService.getReservations().subscribe(
        reservations => this.reservation = reservations.find(reservations => reservations.id === id),
        error => console.log(error))}
  }

  public confirmAndRedirect(){
    alert("Operazione effettuata con successo!");
    this.router.navigate(['/reservations']);
  }
  public confirmDeleteReservation(event, reservation): void {
  
    this.confirmationDialogService.confirm('Conferma', "Cancellare la prenotazione di " + reservation.memberName + " " + reservation.memberSurname + "?")
    .then((confirmed) => (this.reservationsService.deleteReservation(reservation).subscribe(
      () => this.confirmAndRedirect(),
      error=> console.log(error)
    ), 
       confirmed))
    .catch(() => console.log('Cancellazione annullata'))
  }

}