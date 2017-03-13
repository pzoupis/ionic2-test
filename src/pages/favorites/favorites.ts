import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ViewController, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  public cities: any[] = [];
  constructor(
    public viewCtrl: ViewController,
    public platform: Platform,
    public storage: Storage,
    public navController: NavController) { }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    this.storage.forEach((value, key, index) => {
      this.cities.push(value);
      console.log("This is the value", value);
    });
  }
  addCity() {
    this.navController.push(HomePage);
  }
}