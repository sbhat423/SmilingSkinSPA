import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Weather } from '../model/weather';
import { interval } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { SkApiService } from '../service/sk-api.service';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

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
  hourlyData: string[] = [];

  constructor(private weatherService: WeatherService,
              private api: SkApiService) { }

  ngOnInit() {
    this.storeWeatherData();
    setInterval(() => {
      this.fetchCurrentData();
     }, 60000);
     setInterval(() => {
      this.storeWeatherData();
     }, 600000);
  }

  storeWeatherData() {
    console.log('store hourly data');
    this.weatherService.getWeatherData().subscribe(
      data => {
        this.summary = data['currently']['summary'];
        this.temperature = data['currently']['temperature'];
        this.apparentTemperature = data['currently']['apparentTemperature'];
        this.humidity = data['currently']['humidity'];
        this.cloudCover = data['currently']['cloudCover'];
        this.uvIndex = data['currently']['uvIndex'];
        this.ozone = data['currently']['ozone'];
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
