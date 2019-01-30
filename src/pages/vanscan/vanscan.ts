import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ApiProvider } from '../../providers/api/api';
/**
 * Generated class for the VanscanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vanscan',
  templateUrl: 'vanscan.html',
})
export class VanscanPage {
  onet: any = undefined;
  option: BarcodeScannerOptions;
  array: string;
  datatset = [];
  number : number = 1;
  count : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private barcodeScanner: BarcodeScanner,public data: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VanscanPage');
  }

  showAlert(topic, msg) {
    let alert = this.alertCtrl.create({
      title: topic,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  scan() {
    this.option = {
      prompt: 'SCAN BARCODE CODE',
      resultDisplayDuration: 0,
      showTorchButton: true,
      orientation: 'portrait'
    };
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      let data = barcodeData.text;
      this.array = data.toString();   
      this.onet = this.array.substring(0, 12);
      this.datatset['name'] =  this.onet;
      var item =  {"name": this.onet};
      this.number = 1;


      for(let data of   this.datatset) {
        console.log(data['name']);
        console.log(this.onet);
        if(data['name'] == this.onet){
         this.number = 2;
         console.log("wrong");
        }     
      }

      if(this.number == 1){
        this.datatset.unshift(item);
        this.count+= 1; 
        }
        this.onet ="";


    }, (err) => {
      console.log('Error: ', err);
    });
  }

  remo(value){
    this.datatset.splice(value,1);
    this.count -= 1; 
  } 

  submit(){
    this.data.addVanScan(this.datatset).subscribe(data => {
      this.showAlert("Scan", "Van Scan Completed");
    },err => {
      this.showAlert("Error", "Not submited");    
    });
  }

}
