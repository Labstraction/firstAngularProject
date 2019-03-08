import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaxPlayerComponent } from './max-player/max-player.component';
import { MasterPageComponent } from './masterPage/masterPage.component';
import { WelcomePageComponent } from './welcomePage/welcomePage.component';
import { RouterModule } from '@angular/router';
import { CourtDetailComponent } from './CourtDetail/CourtDetail.component';
import { PoliziottoGrassoService } from "./PoliziottoGrasso.service";
import { MembersListComponent } from "./membersList/membersList.component";
import { ReservationComponent } from "./reservation/reservation.component";
import { MemberDetailsComponent } from "./memberDetails/memberDetails.component";

@NgModule({
   declarations: [
      AppComponent,
      MaxPlayerComponent,
      MasterPageComponent,
      WelcomePageComponent,
      CourtDetailComponent,
      MembersListComponent,
      ReservationComponent,
      MemberDetailsComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot([
         { path: 'courts', component: AppComponent },
         { path: 'welcome', component: WelcomePageComponent},
         { path: 'members', component: MembersListComponent},
         { path: 'reservations', component: ReservationComponent},
         {
            path: 'courts/:id',
            canActivate: [PoliziottoGrassoService],
            component: CourtDetailComponent
          },
          {
            path: 'members/:id',
            canActivate: [PoliziottoGrassoService],
            component: MemberDetailsComponent
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
