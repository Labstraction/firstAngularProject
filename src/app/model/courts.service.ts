import { Injectable } from '@angular/core';
import { Court } from './Court';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourtsService {

  private courtUrl = 'https://localhost:44302/api/courts';
   
  httpOptions = {
      headers: new HttpHeaders ({
        "Content-Type": "application/json"
      })
  }
   
  constructor(private http: HttpClient) { }

  public getCourts(): Observable<Court[]> {
    return this.http.get<Court[]>(this.courtUrl)
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
    console.log(JSON.stringify(court));
    return this.http.post<Court>(this.courtUrl,JSON.stringify(court), this.httpOptions);
  }

  public editCourt(court : Court): Observable<Court> {
    console.log("putUser " + JSON.stringify(court));
    
    const putOptions = {
      headers: new HttpHeaders ({
        "Content-Type": "application/json"
      }),
      params : new HttpParams().set("id", court.id + "")
    }

    const newUrl = this.courtUrl + "/" + court.id;
    console.log(JSON.stringify(court));
    return this.http.put<Court>(newUrl,JSON.stringify(court), putOptions);
  }

  public deleteCourt(court : Court): Observable<Court> {     
    const newUrl = this.courtUrl + "/" + court.id;    
    return this.http.delete<Court>(newUrl, this.httpOptions);
  }
}
