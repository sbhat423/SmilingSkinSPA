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
  icon: string;
  temperature: number;
  apparentTemperature: number;
  humidity: number;
  cloudCover: number;
  uvIndex: number;
  ozone: number;
  currentTime: number;
  currentHour: number;
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
        this.currentTime = data['currently']['time'];
        this.icon = data['currently']['icon'];
        this.temperature = data['currently']['temperature'];
        this.apparentTemperature = data['currently']['apparentTemperature'];
        this.humidity = data['currently']['humidity'];
        this.cloudCover = data['currently']['cloudCover'];
        this.uvIndex = data['currently']['uvIndex'];
        this.ozone = data['currently']['ozone'];
        this.hourlyData = data['hourly']['data'];
        let currentTimeFlag = false;
        for (let i = 1; i < 6; i++) {
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
        if (this.currentTime <= this.hourlyData[i]['time'] || currentTimeFlag) {
          console.log(i);
          this.api.postWeatherData(weather).subscribe(res => {
            console.log(res);
          });
          if (!currentTimeFlag) {
            currentTimeFlag = true;
            this.currentHour = i;
          }
        }
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
