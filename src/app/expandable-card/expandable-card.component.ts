import { Component, Input, ViewChild,  ElementRef, Renderer2, AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-expandable-card',
  templateUrl: './expandable-card.component.html',
  styleUrls: ['./expandable-card.component.scss'],
})
export class ExpandableCardComponent implements AfterViewInit {
  @ViewChild("expandWrapper", {static: false }) expandWrapper: ElementRef;
  @Input() card: any;
  @Input() item: any;
  @Input() items: Array<any>;

  expanded: boolean = false;

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit(){
      // this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", "200px");
      //this.expanded = this.item.expanded;
  }

  ngDoCheck() {
    if(this.card.el.offsetHeight){
      this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.card.el.offsetHeight + "px");
    }
  }

  expandItem(): void {
    if (this.item.expanded) {
      this.item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (this.item == listItem) {
          console.log(this.card.el.offsetHeight)
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
