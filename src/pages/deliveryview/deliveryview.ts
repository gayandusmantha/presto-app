import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DeliverydonePage } from '../../pages/deliverydone/deliverydone';
/**
 * Generated class for the DeliveryviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliveryview',
  templateUrl: 'deliveryview.html',
})
export class DeliveryviewPage {
  id: any;
  loader: any;
  order_id: Array<{}> = new Array(); 
  tracking: Array<{}> = new Array(); 
  order_date: any;
  payment_method: any; 
  
  constructor(public navCtrl: NavController,public data: ApiProvider, public navParams: NavParams,public loadingCtrl: LoadingController) {
    this.presentLoading();
    this.id = this.navParams.get('id');  
    this.data.getOneDelivery(this.id).subscribe(data => {
      this.order_id = data; 
     //this.loader.dismiss();  
    });

    this.data.trackingDelivery(this.id).subscribe(data => {
      this.tracking = data; 
      this.loader.dismiss();  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveryviewPage');
    
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
      id: this.id
   }
   this.navCtrl.push(DeliverydonePage, data);
 }


}
