import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembersService } from '../model/members.service';
import { IMember} from '../model/IMember';
import { ConfirmationDialogService } from "../confirmation-dialog/confirmation-dialog.service";


@Component({
  selector: 'app-member-details',
  templateUrl: './memberDetails.component.html',
  styleUrls: ['./memberDetails.component.css']
})
export class MemberDetailsComponent implements OnInit {
  pageTitle = 'Dettagli utente';
  errorMessage = '';
  member: IMember | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private membersService: MembersService,
              private confirmationDialogService: ConfirmationDialogService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.membersService.getMembers().subscribe(
        members => this.member = members.find(member => member.id === id),
        error => console.log(error))}
  }


  public confirmDeleteMember(event, member): void {
  
    this.confirmationDialogService.confirm('Conferma', "Cancellare il membro " + member.name + " " + member.surname + "?")
    .then((confirmed) => (this.membersService.deleteMember(member), confirmed))
    .catch(() => console.log('Cancellazione annullata'))
  }

  onBack(): void {
    this.router.navigate(['/Members']);
  }

}