import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, LoadingController } from 'ionic-angular';
import { PicktwoPage } from '../../pages/picktwo/picktwo';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { ApiProvider } from '../../providers/api/api';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the PickupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  ref: any;

  exceptions: Array<{}> = new Array();
  picks: Array<{}> = new Array();
  option: BarcodeScannerOptions;
  expshow: boolean = false;
  //one
  onet: any = undefined;
  onei: any = undefined;
  one: boolean = true;

  //two
  twot: any = undefined;
  twoi: any = undefined;
  two: boolean = false;

  //three
  threet: any = undefined;
  threei: any = undefined;
  three: boolean = false;

  //one
  fourt: any = undefined;
  fouri: any = undefined;
  four: boolean = false;

  //one
  fivet: any = undefined;
  fivei: any = undefined;
  five: boolean = false;

  index: number = 1;
  array: string;

  pickid: string = "";
  fid: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public data: ApiProvider, public loadingCtrl: LoadingController) {
    this.pid = this.navParams.get('id');
    this.ref = this.navParams.get('ref');
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PickupPage');
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
      orientation: 'landscape'
    };
    this.barcodeScanner.scan(this.option).then(barcodeData => {
      let data = barcodeData.text;
      this.array = data.toString();
      if (this.array.length == 13) {
        if (num == 1) {
          this.onet = this.array.substring(2, 10);
          this.onei = '';
        } else if (num == 2) {
          this.twot = this.array.substring(2, 10);
          this.twoi = '';
        } else if (num == 3) {
          this.threet = this.array.substring(2, 10);
          this.threei = '';
        } else if (num == 4) {
          this.fourt = this.array.substring(2, 10);
          this.fouri = '';
        } else if (num == 5) {
          this.fivet = this.array.substring(2, 10);
          this.fivei = '';
        }

      } else if (this.array.length == 16) {
        if (num == 1) {
          this.onet = this.array.substring(0, 12);
          this.onei = this.array.substring(12, 16);
        } else if (num == 2) {
          this.twot = this.array.substring(0, 12);
          this.twoi = this.array.substring(12, 16);
        } else if (num == 3) {
          this.threet = this.array.substring(0, 12);
          this.threei = this.array.substring(12, 16);
        } else if (num == 4) {
          this.fourt = this.array.substring(0, 12);
          this.fouri = this.array.substring(12, 16);
        } else if (num == 5) {
          this.fivet = this.array.substring(0, 12);
          this.fivei = this.array.substring(12, 16);
        }
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

  add() {
    if (this.index < 5) {
      this.index += 1;
      if (this.index == 2) {
        this.two = true;
      } else if (this.index == 3) {
        this.three = true;
      } else if (this.index == 4) {
        this.four = true;
      } else if (this.index == 5) {
        this.five = true;
      }
    }

  }
  //pickup_id, fid, pack, description, tracking_id
  next() {
    if (this.onet != undefined) {
      this.pickid += this.onet + ",";
    }
    if (this.twot != undefined) {
      this.pickid += this.twot + ",";
    }
    if (this.threet != undefined) {
      this.pickid += this.threet + ",";
    }
    if (this.fourt != undefined) {
      this.pickid += this.fourt + ",";
    }
    if (this.fivet != undefined) {
      this.pickid += this.fivet + ",";
    }

    if (this.onei != undefined) {
      this.fid += this.onei + ",";
    }
    if (this.twoi != undefined) {
      this.fid += this.twoi + ",";
    }
    if (this.threei != undefined) {
      this.fid += this.threei + ",";
    }
    if (this.fouri != undefined) {
      this.fid += this.fouri + ",";
    }
    if (this.fivei != undefined) {
      this.fid += this.fivei + ",";
    }

    let data = {
      pickup_id: this.pid,
      fid: this.fid,
      pack: this.index,
      tracking_id: this.pickid
    }
    this.navCtrl.push(PicktwoPage, data);
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
  }

  itemSelected(item) {
    this.exp = item;
  }

  submit() {
    this.presentLoading();
    this.data.addError(this.pid, this.exp).subscribe(data => {
      this.showAlert("Added", "Completely add to pending uploads");
      this.loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.showAlert("Error", "Not submited");
      this.loader.dismiss();
    });
  }


}
