import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { HomePage } from './home.page';
import { ExpandableCardComponent } from '../expandable-card/expandable-card.component';
import { CardGroupPage } from '../card-group/card-group.page';
import { TeamMembersService } from '../team-members.service';
import { EventsService } from '../events.service'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HttpClientModule
  ],
  declarations: [
    HomePage,
    ExpandableCardComponent,
    CardGroupPage
  ],
  providers:[
    TeamMembersService,
    EventsService
  ]
})
export class HomePageModule {}
