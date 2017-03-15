import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, ViewController, Platform, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {
  public cities: any[] = [];
  public deletedCity: string[];
  constructor(
    public viewCtrl: ViewController,
    public platform: Platform,
    public storage: Storage,
    public navController: NavController,
    public toastController: ToastController) { }
  
  /**
   * This method closes the side menu.
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }

  /**
   * This method is called when the page loads. It takes
   * every item in local storage and stores the value
   * in an array of city names.
   */
  ionViewDidLoad() {
    this.storage.forEach((value, key, index) => {
      this.cities.push(value);
    });
  }

  /**
   * This method takes the user to Home page where
   * he can search for a new city.
   */
  addCity() {
    this.navController.push(HomePage);
  }
  showWeather(city: string) {
    this.navController.push(WeatherPage, {city: city});
  }

  /**
   * This method removes a city from the local storage
   * and from the cities array array to show the change without
   * a refresh.
   * @param city The name of the city to be removed.
   */
  deleteCity(city: string) {
    this.storage.remove(city);
    this.deletedCity = this.cities.splice(this.cities.indexOf(city),1);
    this.presentToast();
  }

  /**
   * This method presents a toast message. The toast stays visible
   * for 4 seconds and then dismisses. If the user press on 'undo
   * this action' then another method is called to save again the
   * deleted city in local storage.
   */
  presentToast() {
    let toast = this.toastController.create({
      message: 'You deleted a favorite',
      duration: 4000,
      showCloseButton: true,
      closeButtonText: 'you can undo this action',
      dismissOnPageChange: true
    });
    toast.present();
    toast.onDidDismiss((data, role) => {
      if(role == "close") {
        this.undoAction(this.deletedCity[0]);
      }
    });
  }

  /**
   * This method is called if the user press the toast
   * message. It takes the city that the user deleted and
   * saves it again in local storage and in the array of cities.
   * @param city The deleted city to be saved again.
   */
  undoAction(city: string) {
    this.storage.ready().then(() => {
        this.storage.set(city, city);
        this.cities.push(city);
      })
    }
}