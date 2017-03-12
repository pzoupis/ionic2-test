import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { FavoritesPage } from '../favorites/favorites';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  city: string;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController) { }
  
  presentFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }
  showWeather() {
    this.navCtrl.push(WeatherPage, {city:this.city});
  }
}