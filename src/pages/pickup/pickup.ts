import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, LoadingController } from 'ionic-angular';
import { PicktwoPage } from '../../pages/picktwo/picktwo';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html',
})
export class PickupPage {
  loader: any;
  //data send 
  pid: any;
  exp: any;
  datatset = []
  exceptions: Array<{}> = new Array();
  picks: Array<{}> = new Array();
  option: BarcodeScannerOptions;
  expshow: boolean = false;
  qty : number  ;
  qty2 : number = 0 ;
  number : number ;
  onet : boolean = false;
  userval: any = undefined;
  array: string;
  pickup: boolean = false;
  pickid: string = "";
  fid: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public data: ApiProvider, public loadingCtrl: LoadingController) {
    this.pid = this.navParams.get('id');
    this.qty = this.navParams.get('qty');
  }

  ionViewDidLoad() {   
    for(let i = 1; i <= this.qty; i++) {
      var item =  {"name": ""};    
      this.datatset.unshift(item);
    }   

   this.presentLoading();
    this.data.getExceptions('1').subscribe(data => {
      this.exceptions = data;
      this.loader.dismiss();
    });
  }

  scan(num) {
    this.option = {
      prompt: 'SCAN BARCODE CODE',
      resultDisplayDuration: 0,
      showTorchButton: true,
      orientation: 'portrait'
    };

      this.barcodeScanner.scan(this.option).then(barcodeData => {
      let data = barcodeData.text;
      this.array = data.toString();
      this.number = 1;
      this.userval = this.array.substring(0, 12);

      for(let data of   this.datatset) {
        console.log(data['name']);      
        if(data['name'] == this.userval){
         this.number = 2;
         console.log("wrong");
        }     
      }

      if(this.number == 1){   
        this.qty2 += 1;    
        var item =  {"name":  this.userval};   
        this.datatset[num] = item ;
        }

        if(this.qty == this.qty2){
          this.onet = true;
        }
   
    }, (err) => {
      console.log('Error: ', err);
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

  no() {
    this.expshow = true;
  }

  yes() {
    this.expshow = false;
    this.pickup = true;
  }

  itemSelected(item) {
    this.exp = item;
  }

  submit() {
    this.presentLoading();
    this.data.addError(this.pid, this.exp).subscribe(data => {
      this.showAlert("Completed", "Exception Completed Successfully.");
      this.loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.showAlert("Error", "Not submited");
      this.loader.dismiss();
    });
  }

  next() {   
    let data = {
     pickup_id: this.pid,    
     pack: this.qty,
     tracking_id: this.datatset
   }
   this.navCtrl.push(PicktwoPage, data);
 }


}
