import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { SaveProvider } from '../../providers/save/save';
import { ViewPage } from '../../pages/view/view';
import { ViewChild } from '@angular/core/src/metadata/di';

@IonicPage()
@Component({
  selector: 'page-picklist',
  templateUrl: 'picklist.html',
})
export class PicklistPage {
  id: any;
  loader: any;
  picks: Array<{}> = new Array();
  show: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ApiProvider, private storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public save: SaveProvider) {

  }

  ionViewDidLoad() {
    this.presentLoading();
    console.log(this.save.id);
    
    this.data.pendingPickUp(this.save.id).subscribe(data => {      
      this.picks = data;
      this.loader.dismiss();
    });

  }

  showAlert(title, msg) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    this.loader.present();
  }

  open(id) {
    let data = {
      id: id
    }
    this.navCtrl.push(ViewPage, data);
  }

}