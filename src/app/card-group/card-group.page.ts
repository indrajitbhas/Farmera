import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.page.html',
  styleUrls: ['./card-group.page.scss'],
})
export class CardGroupPage implements OnInit {
  public items: any = [];
  public cardHeight: string = "";

  constructor() {
    this.items = [
      { item: "", expanded: false },
      { item: "", expanded: false }
    ];
  }

  ngOnInit() {
  }
}
