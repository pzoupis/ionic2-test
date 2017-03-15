import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class AutocompleteService {
  private apiKey = ''; // add API key here
  private baseUrl = '/autocomplete-service/maps/api/place/autocomplete/json?input=';
  
  constructor(public http: Http) { }

  /**
   * This method makes a call to Google's Place Autocomplete API and returns
   * predictions based on user input.
   * @param searchStr User's input.
   */
  searchCities(searchStr: string) {
    let url = this.baseUrl + searchStr + '&types=(cities)&language=en&key=' + this.apiKey;
    return this.http.get(url).map(res => res.json());
  }
}
