import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
      this.fetchCurrentData();
     }, 1000);
  }

  fetchCurrentData() {
    console.log('fetch current data');
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
  }
}
