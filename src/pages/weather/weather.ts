import { Component } from '@angular/core';

import { NavController, ModalController, NavParams } from 'ionic-angular';

import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  city: string;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParams: NavParams) {
      this.city = this.navParams.get('city');
  }

  presentFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }
}