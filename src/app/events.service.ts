import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  public getAlerts():Observable<any[]>{
    return from([[{title: "Water cons. alert", body: "0.48 gal avg. per day", time: Date.now() - (2 * 3600000) }]]);
  }
}
