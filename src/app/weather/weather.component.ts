import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { interval } from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  summary: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  cloudCover: number;
  uvIndex: number;
  ozone: number;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    setInterval(() => {
      this.weatherService.getWeatherData().subscribe(
        data => {
          this.summary = data['currently']['summary'];
          this.temperature = data['currently']['temperature'];
          this.apparentTemperature = data['currently']['apparentTemperature'];
          this.humidity = data['currently']['humidity'];
          this.cloudCover = data['currently']['cloudCover'];
          this.uvIndex = data['currently']['uvIndex'];
          this.ozone = data['currently']['ozone'];
        });
    }, 1000);
  }
}
