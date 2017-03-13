import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { FavoritesPage } from '../favorites/favorites';
import { WeatherApi } from '../../providers/weather-api';

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
  providers: [WeatherApi]
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
    public weatherApi: WeatherApi,
    public storage: Storage) { }

  ionViewDidLoad() {
    if(this.navParams.get('city')){
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

  showFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }

  favoriteCity() {
    if(this.weather.city.name) {
      this.storage.ready().then(() => {
        this.storage.set(this.weather.city.name, this.weather.city.name);
        console.log('The city ' + this.weather.city.name + ' was added!');
      })
    }
  }

}