import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }
  presentFavoritesModal() {
    let favoritesModal = this.modalCtrl.create(FavoritesPage);
    favoritesModal.present();
  }
}