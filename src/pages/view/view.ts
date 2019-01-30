import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PickupPage } from '../../pages/pickup/pickup';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  loader: any;
  id: any;
  item_name: any;
  qty: any;
  order_id: any;
  created_at: any;
  supplier: any;
  supaddress: any;
  supphone: any;
  item_id: any; 
  show: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: ApiProvider, public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.id = this.navParams.get('id');
    this.data.getOnePick(this.id).subscribe(data => {
      this.item_name = data[0].item_name;
      this.qty = data[0].qty;
      this.order_id = data[0].order_id;
      this.created_at = data[0].created_at;
      this.supplier = data[0].supplier;
      this.supaddress = data[0].supaddress;
      this.supphone = data[0].supphone;
      this.item_id = data[0].item_id;
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
      qty: this.qty
    }
    this.navCtrl.push(PickupPage, data);
  }

}
