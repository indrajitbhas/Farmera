import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface TeamMember{
  name: string;
  lastCheckedIn: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class TeamMembersService {
  teamMembersURL: string = "https://randomuser.me/api/?results=3";

  constructor(public http: HttpClient) { }

  public getTeamMembers(): Observable<Array<TeamMember>> {
    return this.http.get(
    this.teamMembersURL, { observe: 'response' })
    .pipe(
      retry(3),
      catchError(this.handleError),
      map(x => x['body']['results'].map((tm: any) => {
        return {
                name: tm.name.first + " " + tm.name.last,
                lastCheckedIn: Date.now() - Math.ceil(Math.random() * 10) * 3600000,
                picture: tm['picture']['thumbnail']
               }
      }))
    )
  }

  private handleError(err: HttpErrorResponse): any{
    //some error happenend
  }
}
