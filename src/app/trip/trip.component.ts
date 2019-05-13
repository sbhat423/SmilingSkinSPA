import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { SkApiService } from '../service/sk-api.service';
import { TravelLocation } from '../model/travelLocation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
selectedDate = new Date();
minDate = new Date();
maxDate = new Date();
location: string;
destination: TravelLocation[];

  constructor(private weatherService: WeatherService, private api: SkApiService, private datePipe: DatePipe) { }

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
        const travelDestination: TravelLocation = {
          latitue: data[i]['Latitude'],
          longitude: data[i]['Longitude'],
          location: data[i]['Location'],
          state: data[i]['State']
        };
        this.destination.push(travelDestination);
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

  getResult() {
    console.log(this.datePipe.transform(this.selectedDate , 'yyyy-MM-dd' ));
  }
}
