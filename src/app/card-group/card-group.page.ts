import { Component, OnInit } from '@angular/core';
import { TeamMembersService } from '../team-members.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.page.html',
  styleUrls: ['./card-group.page.scss'],
})
export class CardGroupPage implements OnInit {
  public items: any = [];
  public cardHeight: string = "";
  public teamMemberList: Observable<HttpResponse<Array<any>>>;

  constructor(private teamMembersService: TeamMembersService) {

    this.items = [
      { item: "", expanded: false },
      { item: "", expanded: false }
    ];
  }

  ngOnInit() {
    this.teamMembersService.getTeamMembers().subscribe(x => console.log(x))

  }
}
