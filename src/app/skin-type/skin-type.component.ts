import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-skin-type',
  templateUrl: './skin-type.component.html',
  styleUrls: ['./skin-type.component.css']
})
export class SkinTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

  backToTop(){
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
}
