import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Court } from "../model/Court";
import { Reservation } from "../model/Reservation";
import { Challenge } from "../model/Challenge";
import { ReservationsService } from "../model/reservations.service";
import { CourtsService } from "../model/courts.service";
import { MembersService } from "../model/members.service";
import { ChallengesService } from "../model/challenges.service";
import { Member } from '../model/Member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-reservation-reactive',
  templateUrl: './insert-reservation-reactive.component.html',
  styleUrls: ['./insert-reservation-reactive.component.css']
})

export class InsertReservationReactiveComponent implements OnInit {
  newReservationForm: FormGroup;
  reservation = new Reservation();
  id: number;
  courts: Court[];
  court: Court;
  members: Member[];
  member: Member;
  challenge: Challenge;
  sports = ["Tennis", "Paddle", "Calcetto"];
  sportIndex = -1;
  date: Date;

  memberSelected: boolean;
  courtSelected: boolean;
  dateSelected: boolean;


  constructor(public router: Router, private fb: FormBuilder, private reservationService: ReservationsService, private courtsService: CourtsService, private membersService: MembersService, private challengesService: ChallengesService) { }


  ngOnInit() {
    this.membersService.getMembers().subscribe(
      members => this.populateMembers(members)
    );

    this.newReservationForm = this.fb.group({
      sportType: ['', [Validators.required]],
      memberName: ['', [Validators.required]],
      courtName: ['', [Validators.required]],
      checkTennis: [0, [Validators.required]],
      checkSoccer: [0, [Validators.required]],
      //checkChallenge: [0],
      date: [null, [Validators.required/*, dateRange(Date.now.toString())*/]]
    });
  }

  save() {

    console.log(this.newReservationForm);

    this.reservation.courtId = this.court.id;
    this.reservation.memberId = this.member.id;
    this.reservation.isDouble = this.newReservationForm.value.checkTennis;
    this.reservation.date = this.date;
    console.log('Salvato: ' + JSON.stringify(this.reservation));
    let ds = JSON.stringify(this.reservation);
    let d = JSON.parse(ds);
    
    this.reservationService.addReservation(this.reservation).subscribe(
      reservation => { 
        this.confirmAndRedirect();
      },
       error => {
        console.log(error);
        console.log("ERRORE!");
       }
      
    );

    //this.challengesService.addChallenge(this.challenge).subscribe();
    
  }

  public confirmAndRedirect(){
    alert("Operazione effettuata con successo!");
    this.router.navigate(['/reservations']);
  }


  public createModel(newCourts: Court[]) {
    this.courts = newCourts; 
    this.court = this.courts[0];
  }

  public populateMembers(members: Member[]) {
    this.members = members;
    //this.member = members[0];
  }

  public populateCourts(courts: Court[]) {
    let selectedCourts=courts;
    if (this.sportIndex===2)
      selectedCourts = courts.filter(c=>c.isSeven==this.newReservationForm.value.checkSoccer);

    this.courts = selectedCourts;
    //this.court = selectedCourts[0];
  }

  public onCourtSelectedChange(e) {
    if (e.target.value && e.target.value !== "") {
      this.courtSelected = true;
    }
  }

  public onMemberSelectedChange(e) {
    if (e.target.value && e.target.value !== "") {
      this.memberSelected = true;
    }
  }

  public onSportSelectedChange(e) {
    if (e.target.value && e.target.value !== "") {
      this.sportIndex = this.sports.findIndex(sport => e.target.value === sport);
      this.courtsService.getCourts().subscribe(
        courts => this.populateCourts(courts.filter(court => court.sport === this.sportIndex)));
    }
  }

  // public onChallengeSelected(e) {
  //   if (e.target.value && e.target.value !== "") {
  //     this.challengeSelected = true;
  //   }
  // }

  public onDateSelectedChange(e) {
    if (e.target.value && e.target.value !== ""){
      this.dateSelected = true;
      this.date = new Date(e.target.value);
    }
  }

  public onSoccerRadioSelected(e){
    console.log("radioselected");
    this.courtsService.getCourts().subscribe(
      courts => this.populateCourts(courts.filter(court => court.sport === this.sportIndex)));
  }
}

function dateRange(dateRight: string): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== null && (isNaN(c.value) || c.value > dateRight)) {
      return { 'range': true };
    }
    return null;
  };
}

