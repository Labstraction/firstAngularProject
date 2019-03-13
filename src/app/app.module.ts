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
import { ChallengeDetailComponent } from "./challenge-detail/challenge-detail.component";
import { ReservationDetailComponent } from "./reservation-detail/reservation-detail.component";
import { InsertCourtComponent } from "./insert-court/insert-court.component";
import { InsertMemberComponent } from './insert-member/insert-member.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertCourtReactiveComponent} from "./insert-court-reactive/insert-court-reactive.component";
import { InsertMemberReactiveComponent } from "./insert-member-reactive/insert-member-reactive.component";
import { InsertReservationReactiveComponent } from "./insert-reservation-reactive/insert-reservation-reactive.component";

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
      ChallengeDetailComponent,
      ReservationDetailComponent,
      InsertCourtComponent, 
      InsertMemberComponent, 
      InsertCourtReactiveComponent, 
      InsertMemberReactiveComponent,
      InsertReservationReactiveComponent
   ],
   
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
         { path: 'courts', component: CourtsListComponent },
         { path: 'welcome', component: WelcomePageComponent},
         { path: 'members', component: MembersListComponent},
         { path: 'reservations', component: ReservationComponent},
         { path: 'challenges', component: ChallengeListComponent},
         { path: 'court-insert', component: InsertCourtComponent},
         { path: 'court-insert-reactive', component: InsertCourtReactiveComponent},
         { path: 'member-insert', component: InsertMemberComponent},
         { path: 'member-insert-reactive', component: InsertMemberReactiveComponent},
         { path: 'member-reservation-reactive', component: InsertReservationReactiveComponent},
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
            path: 'challenges/:id',
            canActivate: [PoliziottoGrassoService],
            component: ChallengeDetailComponent
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
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      MasterPageComponent
   ]
})
export class AppModule { }