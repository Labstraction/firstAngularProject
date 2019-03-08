import { Component, OnInit } from '@angular/core';
import { MembersService } from '../model/members.service';
import { IMember } from '../model/IMember';

@Component({
  selector: 'app-membersList',
  templateUrl: './membersList.component.html',
  styleUrls: ['./membersList.component.css']
})
export class MembersListComponent implements OnInit {
  title = "Uber Sport Manager";

  constructor(private membersService: MembersService) {}

  members : IMember[];
  member : IMember;
  

  ngOnInit(): void {
    this.membersService.getMembers().subscribe(
      newMembers => this.createModel(newMembers),
      error => console.log(error))
  }

  public createModel(newMembers : IMember[]){
    this.members = newMembers; this.member = this.members[0];
  }
}