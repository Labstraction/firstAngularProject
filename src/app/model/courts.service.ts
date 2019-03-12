import { Injectable } from '@angular/core';
import { Court } from './Court';
import { ICourt } from './ICourt';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  private productUrl = 'https://localhost:44302/api/fields';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public getCourts(): Observable<ICourt[]> {
    return this.http.get<ICourt[]>(this.productUrl)
    // const courts = [new Court(0,"pippo", "tennis", 9, false, false),
    // new Court(1,"pluto", "soccer", 10, false, false),
    // new Court(2,"paperino", "tennis", 12, true, false),
    // new Court(3,"minnie", "soccer", 12, false, true),
    // new Court(4,"archimede", "tennis", 12, true, false),
    // new Court(5,"paperone", "tennis", 12, true, false),
    // new Court(6,"paperoga", "soccer", 12, false, true)
    // ];
    // return courts;
  }

  public addCourt(court : Court): Observable<Court> {
    return this.http.post<Court>(this.productUrl, court, this.httpOptions)
  }
}
