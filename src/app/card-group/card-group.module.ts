import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpandableCardComponent } from '../expandable-card/expandable-card.component';
import { AlertComponent } from '../alert/alert.component';
import { TeamMemberComponent } from '../team-member/team-member.component';
import { CardGroupPage } from './card-group.page';
import { TimeAgoPipe } from 'time-ago-pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    ExpandableCardComponent,
    AlertComponent,
    TeamMemberComponent,
    TimeAgoPipe,
    CardGroupPage
  ],
  exports: [CardGroupPage]
})
export class CardGroupPageModule {}
