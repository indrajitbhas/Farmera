import { Component, OnInit } from '@angular/core';
import { TeamMemberComponent } from '../team-member/team-member.component';
import { AlertComponent } from '../alert/alert.component';
import { TeamMember } from "../team-members.service";
import { TeamMembersService } from '../team-members.service';
import { EventsService } from '../events.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.page.html',
  styleUrls: ['./card-group.page.scss'],
})
export class CardGroupPage implements OnInit {
  public items: any = [];
  public cardHeight: string = "";
  public members: Observable<Array<TeamMember>>;
  public alerts: Observable<Array<any>>;
  public alertsLength: number;
  public membersLength: number;

  constructor(
              private teamMembersService: TeamMembersService,
              private events: EventsService
             ) {

    this.items = [
      { item: "", expanded: false },
      { item: "", expanded: false }
    ];
  }

  ngOnInit() {
    this.members = this.teamMembersService.getTeamMembers();
    this.alerts = this.events.getAlerts();
    this.alerts.subscribe(x => this.alertsLength = x.length);
    this.members.subscribe(x => this.membersLength = x.length);
  }
}
