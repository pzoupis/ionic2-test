import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private apiKey = ''; // add API key here
  private baseUrl = 'weather/data/2.5/forecast/daily?appId=';
  constructor(public http: Http) { }
  
  /**
   * This method makes a call to the Open Weather Map API
   * to get the weather of a city based on the city name
   * given.
   * @param city The name of the city chosen by the user.
   */
  weatherByName(city: string) {
    let url = this.baseUrl + this.apiKey;
    url += '&q=' + city;
    url += '&units=metric&type=like';
    return this.http.get(url).map(res => res.json());
  }
  
  /**
   * This method makes a call to the Open Weather Map API
   * to get the weather of a city based on the coordinates
   * given.
   * @param lat The latitude taken from the users device
   * using Geolocation
   * @param lng The longitude taken from the users device
   * using Geolocation
   */
  weatherByCoords(lat: number, lng: number) {
    let url = this.baseUrl + this.apiKey;
    url += '&lat=' + lat + '&lon=' + lng;
    url += '&units=metric';
    return this.http.get(url).map(res => res.json());
  }
}
