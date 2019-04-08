import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {
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
