import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { SkApiService } from '../service/sk-api.service';
import { TravelLocation } from '../model/travelLocation';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
selectedDate = new Date();
minDate = new Date();
maxDate = new Date();
location = 'Alpine National Park';
destination: TravelLocation[];
spf_rec: number;
disabled = false;
formattedDate: string;
readableDate: string;

  constructor(private weatherService: WeatherService,
    private api: SkApiService,
    private datePipe: DatePipe,
    private http: HttpClient) { }

  ngOnInit() {
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
    this.getTravelData();
    this.maxDate.setDate(this.minDate.getDate() + 6);
    this.getResult();
  }

  backToTop(){
    document.getElementsByTagName('mat-sidenav-content')[0].scrollTo(0, 0);
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
    this.formattedDate = this.datePipe.transform(this.selectedDate , 'yyyy-MM-dd' );
    this.readableDate = this.datePipe.transform(this.selectedDate , 'dd-MM-yyyy' );
    console.log(this.formattedDate);
    this.http.get('https://x6hc4g61ok.execute-api.ap-southeast-2.amazonaws.com/production/attraction', {
      params: {
        date1: this.formattedDate,
        attraction: this.location
      },
      observe: 'response'
    })
    .toPromise()
    .then(response => {
      console.log(response);
      const responseBody = response.body;
      this.spf_rec = responseBody['spf_rec_attraction'];
      console.log(this.spf_rec);
      this.disabled = false;
    })
    .catch(console.log);
  }
}
