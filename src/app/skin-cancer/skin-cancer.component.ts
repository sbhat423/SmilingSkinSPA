import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skin-cancer',
  templateUrl: './skin-cancer.component.html',
  styleUrls: ['./skin-cancer.component.css']
})
export class SkinCancerComponent implements OnInit {
  links: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() {
   }

  ngOnInit() {
  }

  setColor(loc: number) {
    for ( let i = 0; i < 8; i++) {
      this.links[i] = false;
    }
    this.links[loc] = true;
    console.log(this.links[loc]);
  }
}
