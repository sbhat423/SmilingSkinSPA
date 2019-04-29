import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../model/weather';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SkApiService {

  constructor(private http: HttpClient) { }

  postWeatherData(weather: Weather) {
     return this.http.post<Weather>('https://13.250.145.208:81/api/weathers', weather, httpOptions);
  }
}
