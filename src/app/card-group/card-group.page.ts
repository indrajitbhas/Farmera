import { Component, OnInit } from '@angular/core';
import { TeamMember } from "../team-members.service";
import { TeamMembersService } from '../team-members.service';
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

  constructor(private teamMembersService: TeamMembersService) {

    this.items = [
      { item: "", expanded: false },
      { item: "", expanded: false }
    ];
  }

  ngOnInit() {
    this.members = this.teamMembersService.getTeamMembers()
  }
}
