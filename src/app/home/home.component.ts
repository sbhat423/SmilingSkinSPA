import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
  }

  ngOnInit() {
    setTimeout (() => {
      this.isLoading = false;
    }, 7000);
   }
}
