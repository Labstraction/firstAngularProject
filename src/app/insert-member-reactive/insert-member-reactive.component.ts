import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Member } from "../model/Member";
import { MembersService } from "../model/members.service";

@Component({
  selector: 'app-insert-member-reactive',
  templateUrl: './insert-member-reactive.component.html',
  styleUrls: ['./insert-member-reactive.component.css']
})
export class InsertMemberReactiveComponent implements OnInit {

  newMemberForm: FormGroup;
  member = new Member();

  constructor(private fb: FormBuilder, private memberService : MembersService) { }


  ngOnInit() {
    this.newMemberForm = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      surname:['', [Validators.required, Validators.maxLength(30)]],
      dateOfRegistration: ['', [Validators.required]],
      dateOfBirthday: ['', [Validators.required]]
    });
  }

  

  save() {
    console.log(this.newMemberForm);
    console.log('Saved: ' + JSON.stringify(this.newMemberForm.value));
    if (this.newMemberForm.valid) {
      this.member= this.newMemberForm.value;
    }
    this.memberService.addMember(this.member).subscribe();
  }

 


}

