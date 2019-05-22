import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms-info',
  templateUrl: './symptoms-info.component.html',
  styleUrls: ['./symptoms-info.component.css']
})
export class SymptomsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

  backToTop(){
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
}
