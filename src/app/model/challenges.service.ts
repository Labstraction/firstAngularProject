import { Injectable } from '@angular/core';
import { Challenge } from './Challenge';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  private challengeUrl = 'https://localhost:44302/api/challenges';
  httpOptions = {
    headers: new HttpHeaders ({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  public addChallenge(challenge : Challenge): Observable<Challenge> {
    console.log(JSON.stringify(challenge));
    return this.http.post<Challenge>(this.challengeUrl, challenge, this.httpOptions)
  }

  public getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.challengeUrl)

  }

  /*public getChallengeByAvailableMembers(availableMembers: number): Observable<Challenge[]> { 

    const newUrl = this.challengeUrl + '/searchChallengeByAvailableMembers?availableMembers=' + availableMembers;
    return this.http.get<Challenge[]>(newUrl);
  }*/
}
