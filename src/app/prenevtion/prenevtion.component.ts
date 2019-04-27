import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ReportParam } from '../model/reportParam';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prenevtion',
  templateUrl: './prenevtion.component.html',
  styleUrls: ['./prenevtion.component.css']
})
export class PrenevtionComponent implements OnInit {
  spf = '0';
  skinType = '1';
  duration = '60';
  fabric = 'Cotton';
  activities = 'Picnic,Barbecue';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getReportValue();
  }

  getReportValue() {
    console.log(this.spf, this.skinType, this.duration, this.fabric, this.activities);
    const param: ReportParam = {
      uv: 1,
      time: 12345678,
      skin_type: this.skinType,
      spf: Number(this.spf),
      fabric: this.fabric,
      activities: this.activities,
      duration: Number(this.duration)
    };

    // return this.http.post<ReportParam>('http://13.250.145.208:81/py/readyforweb.py', param, httpOptions);
  }
}
