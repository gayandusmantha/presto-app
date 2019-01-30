import { Component } from '@angular/core';
import { NavController, Events, AlertController } from 'ionic-angular';
import { PickupPage } from '../../pages/pickup/pickup';
import { PendingPage } from '../../pages/pending/pending';
import { PicklistPage } from '../../pages/picklist/picklist';
import { VanscanPage } from '../../pages/vanscan/vanscan';
import { SaveProvider } from '../../providers/save/save';
import { DeliverylistPage }  from '../../pages/deliverylist/deliverylist';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';
import { ApiProvider } from '../../providers/api/api';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: Promise<{}>;
  id: any;
  constructor(public navCtrl: NavController, public save: SaveProvider, private storage: Storage, public events: Events, public one: OneSignal, public alertCtrl: AlertController, public api: ApiProvider) {
    storage.get('NAME').then((val) => {
      this.save.name = val;
      this.events.publish('setname');
    });
    storage.get('ID').then((val) => {
      this.save.id = val;
      this.events.publish('setid');
      this.one.getIds().then(data => {
        this.id = data.userId;
        this.saveDeviceId();
      });
    });
  }

  pick() {
    this.navCtrl.push(PicklistPage);
  }

  delivery() {
    this.navCtrl.push(DeliverylistPage);
  }
 

  vanscan() {
    this.navCtrl.push(VanscanPage);
  }

  pending() {
    this.navCtrl.push(PendingPage);
  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  saveDeviceId() {
    this.api.adDeviceId(this.save.id, this.id).subscribe(err => {

    });
  }

}
