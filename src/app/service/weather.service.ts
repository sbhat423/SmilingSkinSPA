import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/da2bc56863c0342b0692741c49d8011b/-37.814639,144.962912');
  }
}
