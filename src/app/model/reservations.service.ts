import { Injectable } from '@angular/core';
import { Reservation} from './Reservation';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  public getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationUrl)
  }

  public addReservation(reservation : Reservation): Observable<Reservation> {
    console.log(JSON.stringify(reservation));
    return this.http.post<Reservation>(this.reservationUrl, reservation, this.httpOptions)
  }

  public editReservation(reservation : Reservation): Observable<Reservation> {
    console.log("putReservation " + JSON.stringify(reservation));
    const putOptions = {
      headers: new HttpHeaders ({
        "Content-Type": "application/json"
      }),
      params : new HttpParams().set("id", reservation.id + "")
    }
    const newUrl = this.reservationUrl + "/" + reservation.id;
    console.log(JSON.stringify(reservation));
    return this.http.put<Reservation>(newUrl,JSON.stringify(reservation), putOptions);
  }

  public deleteReservation(reservation : Reservation): Observable<Reservation> {
     
    const newUrl = this.reservationUrl + "/" + reservation.id;
    console.log("deletedReservation " + JSON.stringify(reservation));
    console.log("Url voluto:" + newUrl);
    return this.http.delete<Reservation>(newUrl, this.httpOptions);
  }
}