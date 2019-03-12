import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from "../model/Member";
import { MembersService } from "../model/members.service";

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css']
})
export class InsertMemberComponent implements OnInit {

  memberService : MembersService
  constructor(newMemberService : MembersService) {
    this.memberService = newMemberService
  }

  member = new Member(); 

  ngOnInit() {
  }

  save(newMemberForm: NgForm) {
    console.log(newMemberForm.form);
    console.log('Salvato: ' + JSON.stringify(newMemberForm.value));
    this.memberService.addMember(this.member).subscribe();
  }
}

