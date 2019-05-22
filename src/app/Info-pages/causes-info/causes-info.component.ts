import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-causes-info',
  templateUrl: './causes-info.component.html',
  styleUrls: ['./causes-info.component.css']
})
export class CausesInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
  
  backToTop(){
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
}
