import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../service/weather.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';

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
  uv: string;
  dangerlevel: string;
  spf_rec = '';
  defaultFlag = true;

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 11;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

  constructor(private http: HttpClient, private weatherService: WeatherService) { }
  private _tickInterval = 1;
  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
    this.fetchCurrentData();
    setTimeout(() => {
      this.getReportValuePre();
    }, 500);
  }

  fetchCurrentData() {
    console.log('fetch current data');
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.uv = data['currently']['uvIndex'];
    console.log('uv', this.uv);
    this.value = Number(this.uv);
    console.log('value', this.value);
    });
  }

  getReportValuePre() {
    this.disabled = true;
    this.uv = this.value.toString();
    console.log(this.uv, this.spf, this.skinType, this.duration, this.fabric, this.activities);
    this.http.get('https://x6hc4g61ok.execute-api.ap-southeast-2.amazonaws.com/production/activity', {
      params: {
        uv: this.uv,
        duration: this.duration,
        skin_type: this.skinType,
        spf: this.spf,
        cloth_type: this.fabric,
        activities: this.activities
      },
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response);
      const responseBody = response.body;
      this.dangerlevel = responseBody['danger_level'];
      this.spf_rec = responseBody['spf_rec'];
      console.log(this.dangerlevel, this.spf_rec);
      this.disabled = false;
    })
    .catch(console.log);
  }

  getReportValue() {
    this.defaultFlag = false;
    this.disabled = true;
    this.uv = this.value.toString();
    console.log(this.uv, this.spf, this.skinType, this.duration, this.fabric, this.activities);
    this.http.get('https://x6hc4g61ok.execute-api.ap-southeast-2.amazonaws.com/production/activity', {
      params: {
        uv: this.uv,
        duration: this.duration,
        skin_type: this.skinType,
        spf: this.spf,
        cloth_type: this.fabric,
        activities: this.activities
      },
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response);
      const responseBody = response.body;
      this.dangerlevel = responseBody['danger_level'];
      this.spf_rec = responseBody['spf_rec'];
      console.log(this.dangerlevel, this.spf_rec);
      this.disabled = false;
    })
    .catch(console.log);
  }

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
}
