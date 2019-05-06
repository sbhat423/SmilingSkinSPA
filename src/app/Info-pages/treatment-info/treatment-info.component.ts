import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment-info',
  templateUrl: './treatment-info.component.html',
  styleUrls: ['./treatment-info.component.css']
})
export class TreatmentInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

}
