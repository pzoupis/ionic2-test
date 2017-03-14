import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FavoritesPage } from '../favorites/favorites';
import { WeatherService } from '../../providers/weather-service';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage {
  public city: string;
  public lat: number;
  public lng: number;
  public weather: any;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    public weatherApi: WeatherService,
    public storage: Storage) { }

  /**
   * When the page loads this method is being called.
   * It checks whether the user chose to search the
   * weather by city name or coordinates using geolocation
   * in order to run the appropriate method for the weather
   * service.
   */
  ionViewDidLoad() {
    if (this.navParams.get('city')) {
      this.city = this.navParams.get('city');
      this.weatherApi.weatherByName(this.city)
        .subscribe(weather => {
          this.weather = weather;
        });
    } else {
      this.lat = this.navParams.get('lat');
      this.lng = this.navParams.get('lng');
      this.weatherApi.weatherByCoords(this.lat, this.lng)
        .subscribe(weather => {
          this.weather = weather;
        });
    }
  }

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
   * This method saves the city in local storage.
   */
  favoriteCity() {
    if (this.weather.city.name) {
      this.storage.ready().then(() => {
        this.storage.set(this.weather.city.name, this.weather.city.name);
        console.log('The city ' + this.weather.city.name + ' was added!');
      })
    }
  }

}