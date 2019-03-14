import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Member } from "../model/Member";
import { MembersService } from "../model/members.service";
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-insert-member-reactive',
  templateUrl: './insert-member-reactive.component.html',
  styleUrls: ['./insert-member-reactive.component.css']
})
export class InsertMemberReactiveComponent implements OnInit {

  newMemberForm: FormGroup;
  member = new Member();
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private memberService : MembersService) { }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.id = +param;
      if (this.id != 0) {
        this.memberService.getMembers().subscribe(
          members => {
            this.member = members.find(member => member.id === this.id)
            this.populateTestData();
          },
          error => console.log(error))
      }
    }

    this.newMemberForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      surname:['', [Validators.required, Validators.maxLength(25)]],
      address:['', [Validators.required]],
      dateOfRegistration: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });
  }

  populateTestData(): void {
    console.log(this.member);
    this.newMemberForm.patchValue({
      name: this.member.name,
      surname: this.member.surname,
      address: this.member.address,
      dateOfRegistration: new DatePipe("en-US").transform(this.member.dateOfRegistration, "yyyy-MM-dd"),
      dateOfBirth: new DatePipe("en-US").transform(this.member.dateOfBirth, "yyyy-MM-dd")
    });
  }

  save() {
    console.log(this.newMemberForm);
    console.log('Saved: ' + JSON.stringify(this.newMemberForm.value));

    if (this.id == 0) {
      if (this.newMemberForm.valid) {
        this.member = this.newMemberForm.value;
      }
      this.memberService.addMember(this.member).subscribe();
    }
    else {
      if (this.newMemberForm.valid) {
        this.member.name = this.newMemberForm.value.name;
        this.member.surname = this.newMemberForm.value.surname;
        this.member.address = this.newMemberForm.value.address;
        this.member.dateOfBirth = this.newMemberForm.value.dateOfBirth;
        this.member.dateOfRegistration = this.newMemberForm.value.dateOfRegistration;
      }
      this.memberService.editMember(this.member).subscribe();
    }
  }
}

