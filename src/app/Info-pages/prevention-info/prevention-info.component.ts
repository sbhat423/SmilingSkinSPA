import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevention-info',
  templateUrl: './prevention-info.component.html',
  styleUrls: ['./prevention-info.component.css']
})
export class PreventionInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

}
