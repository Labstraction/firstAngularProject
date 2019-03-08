import { Injectable } from '@angular/core';
import { IReservation} from './IReservation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationUrl = 'https://localhost:44302/api/reservations';

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<IReservation[]> {
    return this.http.get<IReservation[]>(this.reservationUrl)
  }
}