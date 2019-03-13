import { Injectable } from '@angular/core';
import { IMember} from './IMember';
import { Member} from './Member';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private memberUrl = 'https://localhost:44302/api/members';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.memberUrl)
  }

  public addMember(member : Member): Observable<Member> {
    console.log(JSON.stringify(member));
    return this.http.post<Member>(this.memberUrl, member, this.httpOptions)
  }
}