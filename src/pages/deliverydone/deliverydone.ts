import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController,LoadingController  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the DeliverydonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deliverydone',
  templateUrl: 'deliverydone.html',
})
export class DeliverydonePage {
  exceptions: Array<{}> = new Array();
  id: any;
  loader: any;
  expshow: boolean = false;
  tracking: Array<{}> = new Array(); 
  number: number = 1;
  exp: any;
  collected : string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data: ApiProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.id = this.navParams.get('id');
    this.data.trackingDelivery(this.id).subscribe(data => {
      this.tracking = data;       
    });

    this.data.getExceptions('2').subscribe(data => {
      this.exceptions = data; 
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliverydonePage');
    this.number = 5;
  }

  itemSelected(item) {
    this.exp = item;
  }

  no() {
    this.expshow = true;
  }

  yes() {
    this.expshow = false;     
  }

  submitcomplte(){
    this.presentLoading();
    this.data.completeDelivery(this.id, this.collected ).subscribe(data => {
        this.showAlert("Completed", "Delivery Complete Success");
        this.loader.dismiss();
        this.navCtrl.setRoot(HomePage);
    }, err => {
        this.showAlert("Error", "Not submited");
        this.loader.dismiss();
    });
  }

  submit(){
    this.presentLoading();
    this.data.deliveryError(this.id, this.exp ).subscribe(data => {
        this.showAlert("Added", "Delivery Exception Added");
        this.loader.dismiss();
        this.navCtrl.setRoot(HomePage);
    }, err => {
       this.showAlert("Error", "Not submited");
       this.loader.dismiss();
    });

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    this.loader.present();
  }

  showAlert(topic, msg) {
    let alert = this.alertCtrl.create({
      title: topic,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
