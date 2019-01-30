import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../../pages/home/home';
declare var cordova: any;
@IonicPage()
@Component({
  selector: 'page-picktwo',
  templateUrl: 'picktwo.html',
})
export class PicktwoPage { 
  loading: any; 
  loader: any;
  pickup_id: any; 
  qty: any;
  tracking_id =  [];
  description: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera, public platform: Platform, private file: File, private filePath: FilePath,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private transfer: FileTransfer, public data: ApiProvider) {
    this.pickup_id = this.navParams.get('pickup_id');   
    this.qty = this.navParams.get('qty');
    this.tracking_id = this.navParams.get('tracking_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicktwoPage');
  } 

  showAlert(topic, msg) {
    let alert = this.alertCtrl.create({
      title: topic,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
 
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    this.loader.present();
  }


  submit() {
    this.presentLoading();
    this.data.addPickup(this.pickup_id, this.qty, this.description, this.tracking_id).subscribe(data => {
      this.showAlert("Completed", "Pickup Compelted Successfully.");
      this.loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.showAlert("Error", "Not submited");
      this.loader.dismiss();
    });
  }


}
