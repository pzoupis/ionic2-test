import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { FavoritesPage } from '../favorites/favorites';
import { WeatherPage } from '../weather/weather';
import { AutocompleteService } from '../../providers/autocomplete-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ AutocompleteService ]
})
export class HomePage {
  public lat: number;
  public lng: number;
  public searchStr: string;
  public results;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public autocompleteService: AutocompleteService) { }
  
  /**
   * This method presents the 'side menu' to the user where the cities
   * saved in local storage are presented. It is using a modal and
   * not a side menu to make it as the given UI.
   */
  showFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }

  /**
   * This method checks if the user gave any input in the search box
   * and takes the user to the page where the weather is presented
   * using the city name.
   */
  showWeatherByCity() {
    if(this.searchStr) {
      this.navCtrl.setRoot(WeatherPage, {city: this.searchStr});
    }
  }

  /**
   * This method is using Geolocation to get the users coordinates
   * and takes the user to the page where the weather is presented
   * using the coordinates.
   */
  showWeatherByCoords() {
    Geolocation.getCurrentPosition().then((resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.navCtrl.setRoot(WeatherPage, {lat: this.lat, lng: this.lng});
    }))
  }

  /**
   * This method is called every time the user presses a key in the
   * search box. It uses Google's Place Autocomplete web service to
   * give the user predictions about his search.
   */
  getQuery() {
    this.autocompleteService.searchCities(this.searchStr)
        .subscribe(res => {
          this.results = res.predictions;
      });
  }

  /**
   * This method is called when the user presses one of the given
   * predictions. It is using the city name taken from the prediction
   * and runs the method showWeatherByCity().
   * @param city 
   */
  chooseCity(city) {
    this.results = [];
    this.searchStr = city.structured_formatting.main_text;
    this.showWeatherByCity();
  }

}