import { Injectable } from '@angular/core';
import { IMember} from './IMember';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private memberUrl = 'https://localhost:44302/api/members';

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<IMember[]> {
    return this.http.get<IMember[]>(this.memberUrl)
  }
}