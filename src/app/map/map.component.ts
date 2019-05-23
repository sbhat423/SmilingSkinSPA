import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  pageLoaded = true;

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pageLoaded = false;
    }, 1000);
  }

  backToTop() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }
}
