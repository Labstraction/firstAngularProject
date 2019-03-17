import { Component, OnInit } from '@angular/core';
import { MembersService } from '../model/members.service';
import { Member } from '../model/Member';

@Component({
  selector: 'app-membersList',
  templateUrl: './membersList.component.html',
  styleUrls: ['./membersList.component.css']
})
export class MembersListComponent implements OnInit {
  title = "Uber Sport Manager";

  constructor(private membersService: MembersService) {}

  members : Member[];
  member : Member;
  

  ngOnInit(): void {
    this.membersService.getMembers().subscribe(
      newMembers => this.createModel(newMembers),
      error => console.log(error))
  }

  public createModel(newMembers : Member[]){
    this.members = newMembers; 
    this.member = this.members[0];
  }
}