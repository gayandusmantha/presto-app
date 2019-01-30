import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SaveProvider } from '../../providers/save/save';
import { DeliveryviewPage } from '../../pages/deliveryview/deliveryview';
/**
 * Generated class for the DeliverylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliverylist',
  templateUrl: 'deliverylist.html',
})
export class DeliverylistPage {
  id: any;
  loader: any;
  deliver: Array<{}> = new Array();
  show: boolean = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data: ApiProvider, public save: SaveProvider,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.presentLoading();
    console.log('ionViewDidLoad DeliverylistPage');
    this.data.pendingDelivery(this.save.id).subscribe(data => {      
      this.deliver = data;
      this.loader.dismiss();
    });
  }

  open(id) {  
    let data = {
      id: id
    }
    this.navCtrl.push(DeliveryviewPage, data);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 5000
    });
    this.loader.present();
  }

}
