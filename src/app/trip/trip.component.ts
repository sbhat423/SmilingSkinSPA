import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { SkApiService } from '../service/sk-api.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
selectedDate = new Date();
minDate = new Date();
maxDate = new Date();

  constructor(private weatherService: WeatherService, private api: SkApiService) { }

  ngOnInit() {
    this.getTravelData();
    this.maxDate.setDate(this.minDate.getDate() + 7);
    console.log(this.minDate);
    console.log(this.maxDate);
  }

  getTravelData() {
    console.log('travel data called');
    this.api.getPlacesData().subscribe( data => {
      console.log(data);
      for (let i = 0; i < 19; i ++) {
        console.log('latitude', data[i]['Latitude']);
        console.log('location', data[i]['Location']);
        console.log('longitude', data[i]['Longitude']);
        console.log('state', data[i]['State']);
        this.weatherService.getWeatherData().subscribe( weatherData => {
          console.log('uv at ', data[i]['Location'], ' is ', weatherData['currently']['uvIndex']);
        });
      }
    });
  }

  getResult(selectedDate: Date) {
    console.log(selectedDate);
  }
}
