import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface TeamMember{
  name: string;
  lastCheckedIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  teamMembersURL: string = "https://randomuser.me/api/?results=3";

  constructor(public http: HttpClient) { }

  public getTeamMembers(): Observable<Array<TeamMember>> {
    return this.http.get<Array<TeamMember>>(
    this.teamMembersURL, { observe: 'response' })
    .pipe(
      retry(3),
      catchError(this.handleError),
      map(x => x.body.results.map((tm: any) => {
        return {name: tm.name.first + " " + tm.name.last, lastCheckedIn: Date.now() - Math.ceil(Math.random() * 10) * 60 * 60 * 1000}
      }))
    )
  }

  private handleError(err){
    //some error happenend
  }
}
