import { Injectable } from '@angular/core';
import { IChallenge } from './IChallenge';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private challengeUrl = 'https://localhost:44302/api/challenges';

  constructor(private http: HttpClient) { }

  public getChallenges(): Observable<IChallenge[]> {
    return this.http.get<IChallenge[]>(this.challengeUrl)

  }

  public getChallengeByAvailableMembers(availableMembers: number): Observable<IChallenge[]> { 

    const newUrl = this.challengeUrl + '/searchChallengeByAvailableMembers?availableMembers=' + availableMembers;
    return this.http.get<IChallenge[]>(newUrl);
    }
}
