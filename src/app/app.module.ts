import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CourtsListComponent } from './courtsList/courtsList.component';
import { MaxPlayerComponent } from './max-player/max-player.component';
import { MasterPageComponent } from './masterPage/masterPage.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { RouterModule } from '@angular/router';
import { CourtDetailsComponent } from './courtDetails/courtDetails.component';
import { MemberDetailsComponent } from "./memberDetails/memberDetails.component";
import { MembersListComponent } from "./membersList/membersList.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { ChallengeListComponent } from "./challenge-list/challenge-list.component";
import { PoliziottoGrassoService } from "./PoliziottoGrasso.service";
import { ReservationDetailComponent } from "./reservation-detail/reservation-detail.component";
import { ReactiveFormsModule } from '@angular/forms';
import { InsertCourtReactiveComponent} from "./insert-court-reactive/insert-court-reactive.component";
import { InsertMemberReactiveComponent } from "./insert-member-reactive/insert-member-reactive.component";
import { InsertReservationReactiveComponent } from "./insert-reservation-reactive/insert-reservation-reactive.component";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
   declarations: [
      MasterPageComponent,
      WelcomePageComponent,
      CourtsListComponent,
      MembersListComponent,
      ReservationComponent,
      CourtDetailsComponent,
      MemberDetailsComponent,
      MaxPlayerComponent,
      ChallengeListComponent,
      ReservationDetailComponent, 
      InsertCourtReactiveComponent, 
      InsertMemberReactiveComponent,
      InsertReservationReactiveComponent,
      ConfirmationDialogComponent 
   ],
   
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: 'welcome', component: WelcomePageComponent},
         { path: 'courts', component: CourtsListComponent },
         { path: 'members', component: MembersListComponent},
         { path: 'reservations', component: ReservationComponent},
         { path: 'challenges', component: ChallengeListComponent},
         { path: 'court-insert-reactive/:id', canActivate: [PoliziottoGrassoService], component: InsertCourtReactiveComponent},
         { path: 'member-insert-reactive/:id', canActivate: [PoliziottoGrassoService], component: InsertMemberReactiveComponent},
         { path: 'reservation-insert-reactive/:id', component: InsertReservationReactiveComponent},
         {
            path: 'courts/:id',
            canActivate: [PoliziottoGrassoService],
            component: CourtDetailsComponent
          },
          {
            path: 'members/:id',
            canActivate: [PoliziottoGrassoService],
            component: MemberDetailsComponent
          },
        
          {
            path: 'reservations/:id',
            canActivate: [PoliziottoGrassoService],
            component: ReservationDetailComponent
          },

         { path: '', redirectTo: 'welcome', pathMatch: 'full' },
         { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
       ]),
      FormsModule,
      NgbModule.forRoot(),
      HttpClientModule
   ],
   providers: [ ConfirmationDialogService ],
   entryComponents: [ ConfirmationDialogComponent ],
   bootstrap: [
      MasterPageComponent
   ]
})
export class AppModule { }