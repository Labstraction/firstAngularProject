import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Court } from "../model/Court";
import { Reservation } from "../model/Reservation";
import { Challenge } from "../model/Challenge";
import { ReservationsService } from "../model/reservations.service";
import { CourtsService } from "../model/courts.service";
import { MembersService } from "../model/members.service";
import { Member } from '../model/Member';

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
  sports = ["Tennis", "Paddle", "Soccer"];
  sportIndex = -1;
  date: Date;

  memberSelected: boolean;
  courtSelected: boolean;
  dateSelected: boolean;

  constructor(private fb: FormBuilder, private reservationService: ReservationsService, private courtsService: CourtsService, private membersService: MembersService) { }


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
      date: [null, [Validators.required/*, dateRange(Date.now.toString())*/]]
    });
  }

  save() {
    console.log(this.newReservationForm);
   

    this.reservation.fieldId = this.court.id;
    this.reservation.memberId = this.member.id;
    this.reservation.isDouble = this.newReservationForm.value.checkTennis;
    this.reservation.date = this.date;
    console.log('Salvato: ' + JSON.stringify(this.reservation));

    
    this.reservationService.addReservation(this.reservation).subscribe();
    
  }

  public createModel(newCourts: Court[]) {
    this.courts = newCourts; this.court = this.courts[0];
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

