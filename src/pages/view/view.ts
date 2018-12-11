import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PickupPage } from '../../pages/pickup/pickup';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  loader: any;
  id: any;
  fid: any;
  ref: any;
  pickup_date: any;
  redy_time: any;
  close_time: any;
  rekarks: any;
  address: any;
  name: any;
  city: any;
  phone: any;
  customer: any;
  show: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.id = this.navParams.get('id');
    this.data.getOnePick(this.id).subscribe(data => {
      this.fid = data[0].id;
      this.ref = data[0].ref;
      this.pickup_date = data[0].pickup_date;
      this.redy_time = data[0].redy_time;
      this.close_time = data[0].close_time;
      this.rekarks = data[0].rekarks;
      this.address = data[0].address;
      this.name = data[0].name;
      this.city = data[0].city;
      this.phone = data[0].phone;
      this.customer = data[0].customer;
      this.show = true;
      this.loader.dismiss();
    });
  }

  ionViewDidLoad() {

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    this.loader.present();
  }

  next() {
    let data = {
      id: this.id,
      ref: this.ref
    }
    this.navCtrl.push(PickupPage, data);
  }

}
