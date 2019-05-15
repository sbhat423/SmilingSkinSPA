import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Weather } from '../model/weather';
import { SkApiService } from '../service/sk-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icon: string;
  temperature: number;
  apparentTemperature: number;
  humidity: string;
  cloudCover: string;
  uvIndex: number;
  ozone: number;
  degreeTemperature: String;
  currentTime: number;
  currentHour: number;
  hourlyData: string[] = [];

  constructor(private weatherService: WeatherService, private api: SkApiService) { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
    this.fetchCurrentData();
    // this.storeWeatherData();
    setInterval(() => {
      this.fetchCurrentData();
     }, 90000);
    //  setInterval(() => {
    //   this.storeWeatherData();
    //  }, 600000);
  }

  fetchCurrentData() {
    console.log('fetch current data');
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.icon = data['currently']['icon'];
        this.temperature = data['currently']['temperature'];
        this.degreeTemperature = ((this.temperature - 32) * (5 / 9)).toFixed(1);
        this.apparentTemperature = data['currently']['apparentTemperature'];
        this.humidity = (data['currently']['humidity'] * 100).toFixed(0);
        this.cloudCover = (data['currently']['cloudCover'] * 100).toFixed(0);
        this.uvIndex = data['currently']['uvIndex'];
        this.ozone = data['currently']['ozone'];
    });
  }

  storeWeatherData() {
    console.log('store data');
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.hourlyData = data['hourly']['data'];
        for (let i = 0; i < 5; i++) {
          const weather: Weather = {
          latitude: data['latitude'],
          longitude: data['longitude'],
          time: this.hourlyData[i]['time'],
          summary: this.hourlyData[i]['summary'],
          icon: this.hourlyData[i]['icon'],
          precipIntensity: this.hourlyData[i]['precipIntensity'],
          precipProbability: this.hourlyData[i]['precipProbability'],
          temperature: this.hourlyData[i]['temperature'],
          apparentTemperature: this.hourlyData[i]['apparentTemperature'],
          dewPoint: this.hourlyData[i]['dewPoint'],
          humidity: this.hourlyData[i]['humidity'],
          pressure: this.hourlyData[i]['pressure'],
          windSpeed: this.hourlyData[i]['windSpeed'],
          windGust: this.hourlyData[i]['windGust'],
          windBearing: this.hourlyData[i]['windBearing'],
          cloudCover: this.hourlyData[i]['cloudCover'],
          uvIndex: this.hourlyData[i]['uvIndex'],
          visibility: this.hourlyData[i]['visibility'],
          ozone: this.hourlyData[i]['ozone']
        };
          this.api.postWeatherData(weather).subscribe(res => {
            console.log(res);
          });
        }
    });
  }
}
