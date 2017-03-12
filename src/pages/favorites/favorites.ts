import { Component } from '@angular/core';

import { ViewController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  constructor(
      public viewCtrl: ViewController,
      public platform: Platform) {
    
  }
  dismiss() {
      this.viewCtrl.dismiss();
  }
}