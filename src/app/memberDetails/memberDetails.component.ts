import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from '../model/Members.service';
import { IMember} from '../model/IMember';
import { IReservation } from '../model/IReservation';

@Component({
  selector: 'app-member-details',
  templateUrl: './memberDetails.component.html',
  styleUrls: ['./memberDetails.component.css']
})
export class MemberDetailsComponent implements OnInit {
  pageTitle = 'Member Detail';
  errorMessage = '';
  member: IMember | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private membersService: MembersService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.membersService.getMembers().subscribe(
        members => this.member = members.find(member => member.id === id),
        error => console.log(error))}
  }

  onBack(): void {
    this.router.navigate(['/Members']);
  }

}