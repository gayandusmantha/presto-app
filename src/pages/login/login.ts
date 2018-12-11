import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ApiProvider } from '../../providers/api/api';
import { SaveProvider } from '../../providers/save/save';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: boolean = true;
  id: any;
  password: any;
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ApiProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private storage: Storage, public events: Events, public save: SaveProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  create() {
    this.login = false;
  }

  log() {
    this.presentLoading();
    this.data.login(this.id).subscribe(data => {
      if (data.password == this.password) {
        this.storage.set('NAME', data.first_name + " " + data.last_name);
        this.storage.set('ID', data.fedexid);
        this.save.name = data.first_name + " " + data.last_name;
        this.save.id = data.id;
        this.events.publish('setname');
        this.events.publish('setid');
        this.navCtrl.setRoot(HomePage);
        this.loader.dismiss();
      } else {
        this.loader.dismiss();
        this.showAlert('Error', 'Invalid login details');
      }
    }, err => {
      this.loader.dismiss();
      this.showAlert('Error', 'Invalid login details');
    });
  }

  register() {
    this.navCtrl.setRoot(HomePage);
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



}
