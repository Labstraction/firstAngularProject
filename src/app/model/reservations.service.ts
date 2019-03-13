import { Injectable } from '@angular/core';
import { IReservation} from './IReservation';
import { Reservation} from './Reservation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationUrl = 'https://localhost:44302/api/reservations';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(this.reservationUrl)
  }

  public addReservation(reservation : Reservation): Observable<Reservation> {
    console.log(JSON.stringify(reservation));
    return this.http.post<Reservation>(this.reservationUrl, reservation, this.httpOptions)
  }
}