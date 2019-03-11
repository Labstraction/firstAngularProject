import { Component, OnInit } from '@angular/core';
import { IChallenge } from '../model/IChallenge';
import { ChallengesService } from '../model/challenges.service';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.css']
})
export class ChallengeListComponent implements OnInit{
  title = "Uber Sport Manager";

  constructor(private challengesService: ChallengesService) {}

  challenges : IChallenge[];
  challenge : IChallenge;
  
  ngOnInit(): void {
    this.challengesService.getChallenges().subscribe(
      newchallenges => this.createModel(newchallenges),
      error => console.log(error));
  }

  public createModel(newchallenges : IChallenge[]){
    this.challenges = newchallenges; this.challenge = this.challenges[0];
  }
}
