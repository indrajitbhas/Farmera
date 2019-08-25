import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { HomePage } from './home.page';
import { CardGroupPageModule } from '../card-group/card-group.module';
import { TeamMembersService } from '../team-members.service';
import { EventsService } from '../events.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardGroupPageModule,
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
  ],
  providers:[
    TeamMembersService,
    EventsService
  ]
})
export class HomePageModule {}
