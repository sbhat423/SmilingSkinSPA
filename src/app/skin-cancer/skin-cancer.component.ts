import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skin-cancer',
  templateUrl: './skin-cancer.component.html',
  styleUrls: ['./skin-cancer.component.css']
})
export class SkinCancerComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

  setColor(loc: number) {
  }
}
