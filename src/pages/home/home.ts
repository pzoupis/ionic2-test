import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { FavoritesPage } from '../favorites/favorites';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public city: string;
  public lat: number;
  public lng: number;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) { }
  
  showFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }
  showWeatherByCity() {
    if(this.city) {
      this.navCtrl.setRoot(WeatherPage, {city: this.city});
    }
  }
  showWeatherByCoords() {
    Geolocation.getCurrentPosition().then((resp => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.navCtrl.setRoot(WeatherPage, {lat: this.lat, lng: this.lng});
    }))
  }
}