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
  members: Member[];
  member: Member;
  sports = ["Tennis", "Paddle", "Soccer"];
  sportIndex = -1;
  date: Date;

  memberSelected: boolean;
  courtSelected: boolean;

  constructor(private fb: FormBuilder, private reservationService: ReservationsService, private courtsService: CourtsService, private membersService: MembersService) { }

  courts: Court[];
  court: Court;


  ngOnInit() {
    this.membersService.getMembers().subscribe(
      members => this.populateMembers(members)
    )
    this.newReservationForm = this.fb.group({
      sportType: ['', [Validators.required]],
      memberName: ['', [Validators.required]],
      courtName: ['', [Validators.required]],
      isDouble: [false],
      date: [null, [Validators.required]]
    });
  }

  save() {
    console.log(this.newReservationForm);
    console.log('Salvato: ' + JSON.stringify(this.newReservationForm.value));
    if (this.newReservationForm.valid) {
      this.reservation = this.newReservationForm.value;
    }
    this.reservationService.addReservation(this.reservation).subscribe();
  }

  public createModel(newCourts: Court[]) {
    this.courts = newCourts; this.court = this.courts[0];
  }

  public populateMembers(members: Member[]) {
    this.members = members;
    this.member = members[0];
  }

  public populateCourts(courts: Court[]) {
    this.courts = courts;
    this.court = courts[0];
  }

  public onMemberSelectedChange(e) {
    if (e.target.value && e.target.value !== "") {
      this.memberSelected = true;
    }
  }

  public onSportSelectedChange(e) {
    if (e.target.value && e.target.value !== "") {
      this.sportIndex = this.sports.findIndex(sport => e.target.value == sport);
      this.courtsService.getCourts().subscribe(
        courts => this.populateCourts(courts.filter(court => court.sport === this.sportIndex)))
    }
  }

  public onCourtSelectedChange(e)
  {
    if (e.target.value && e.target.value !== "")
    {
      this.courtSelected = true;
    }
  }

  public onDateSelectedChange(e)
  {
    if (e.target.value && e.target.value !== "")
    {
      this.date = new Date(e.target.value); 
    }
  }
}

