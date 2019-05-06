import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-info',
  templateUrl: './statistics-info.component.html',
  styleUrls: ['./statistics-info.component.css']
})
export class StatisticsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

}
