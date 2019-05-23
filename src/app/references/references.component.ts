import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

  backToTop(){
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
}
