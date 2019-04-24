import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icon: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  cloudCover: number;
  uvIndex: number;
  ozone: number;
  degreeTemperature: String;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchCurrentData();
    setInterval(() => {
      this.fetchCurrentData();
     }, 90000);
  }

  fetchCurrentData() {
    console.log('fetch current data');
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.icon = data['currently']['icon'];
        this.temperature = data['currently']['temperature'];
        this.degreeTemperature = ((this.temperature - 32) * (5 / 9)).toFixed(2);
        this.apparentTemperature = data['currently']['apparentTemperature'];
        this.humidity = data['currently']['humidity'];
        this.cloudCover = data['currently']['cloudCover'];
        this.uvIndex = data['currently']['uvIndex'];
        this.ozone = data['currently']['ozone'];
    });
  }
}
