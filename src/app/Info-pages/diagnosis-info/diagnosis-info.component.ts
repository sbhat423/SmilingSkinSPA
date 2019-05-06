import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnosis-info',
  templateUrl: './diagnosis-info.component.html',
  styleUrls: ['./diagnosis-info.component.css']
})
export class DiagnosisInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
  }

}
