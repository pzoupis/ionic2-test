import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
//import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherApi {
  private apiKey = ''; // add API key here
  private baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?appId=';
  constructor(public http: Http) { }
  
  weatherByName(city: string) {
    let url = this.baseUrl + this.apiKey;
    url += '&q=' + city;
    url += '&units=metric&type=like';
    return this.http.get(url).map(res => res.json());
  }
  
  weatherByCoords(lat: number, lng: number) {
    let url = this.baseUrl + this.apiKey;
    url += '&lat=' + lat + '&lon=' + lng;
    url += '&units=metric';
    return this.http.get(url).map(res => res.json());
  }
}
