import { Component } from '@angular/core';
import {  IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { SaveProvider } from '../../providers/save/save';
/**
 * Generated class for the PickupsummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pickupsummary',
  templateUrl: 'pickupsummary.html',
})
export class PickupsummaryPage {
  id: any;
  loader: any;
  picks: Array<{}> = new Array();
 


  constructor(public navCtrl: NavController, public navParams: NavParams,public data: ApiProvider,private storage: Storage, public alertCtrl: AlertController,public loadingCtrl: LoadingController, public save: SaveProvider) {
  }

  ionViewDidLoad() {
    this.presentLoading();
    console.log(this.save.id);
    
    this.data.completePickUp(this.save.id).subscribe(data => {      
      this.picks = data;
      this.loader.dismiss();
    });

  }
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    this.loader.present();
  }


}
