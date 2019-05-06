import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types-info',
  templateUrl: './types-info.component.html',
  styleUrls: ['./types-info.component.css']
})
export class TypesInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

}
