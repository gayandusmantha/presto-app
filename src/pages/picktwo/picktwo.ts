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
  images: Array<{}> = new Array();
  lastImage: string = null;
  loading: any;
  imageUrls = [];
  loader: any;
  tempimages: Array<{}> = new Array();

  //get data
  pickup_id: any;
  fid: any;
  pack: any;
  tracking_id: any;
  description: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private camera: Camera, public platform: Platform, private file: File, private filePath: FilePath,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, private transfer: FileTransfer, public data: ApiProvider) {
    this.pickup_id = this.navParams.get('pickup_id');
    this.fid = this.navParams.get('fid');
    this.pack = this.navParams.get('pack');
    this.tracking_id = this.navParams.get('tracking_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PicktwoPage');
  }

  // Image upload code sector
  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 70,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });
  }

  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {

      if (this.platform.is('ios')) {
        newFileName = newFileName.replace(/^file:\/\//, '');
      }

      this.images.push({ "url": newFileName });
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  public uploadImage(vehicle_id) {
    // Destination URL

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });

    this.loading.present();

    var imageUrls = [];
    for (let i = 0; i < this.images.length; i++) {
      var filename = this.images[i]["url"] + '';
      imageUrls.push(filename);
    }

    this.imageUrls = imageUrls;
    this.runUpload(vehicle_id);
  }

  public async runUpload(vehicle_id) {
    const promisesArray: any[] = [];
    const filesToUpload: any[] = this.imageUrls;
    for (const file of filesToUpload) {
      console.log("Starting upload: %s", file);
      promisesArray.push(this.upload(file, vehicle_id));
    }

    await Promise.all(promisesArray)
      .then((res) => {
        console.log("All uploads done");
        this.loading.dismiss();
        this.showAlert("Added", "Completely add to pending uploads");
        //this.navCtrl.setRoot(TabsPage);
      }, (firstErr) => {
        console.error("Error uploading file.", firstErr);
        this.loading.dismiss();
        this.showAlert("Error", "Error while uploading image");
      });
  }

  private upload(file, vehicle_id) {
    return new Promise((resolve, reject) => {

      var url = "vehicle/upload?vehicle_id=" + vehicle_id;

      var options = {
        fileKey: "file",
        fileName: 'image.jpg',
        chunkedMode: false,
        mimeType: "multipart/form-data",
      };

      const fileTransfer: FileTransferObject = this.transfer.create();
      // File for Upload
      var targetPath = this.pathForImage(file);

      if (this.platform.is('ios')) {
        targetPath = targetPath.replace(/^file:\/\//, '');
      }

      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        if (data) {
          console.log("Upload %s done", file);
          resolve(file);
        }
      }, err => {
        console.error("Upload %s failed", file);
        console.log(err);
        reject(file);
      });

    });
  }

  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }

  showAlert(topic, msg) {
    let alert = this.alertCtrl.create({
      title: topic,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  deleteNew(image) {
    let confirm = this.alertCtrl.create({
      title: 'Delete image?',
      message: 'Are you sure you need to delete this image?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.presentLoading();
            this.tempimages = new Array();
            for (let i = 0; i < this.images.length; i++) {
              if (this.images[i]['url'] !== image) {
                this.tempimages.push(this.images[i]);
              }
            }
            this.loader.dismiss();
            this.images = this.tempimages;
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 10000
    });
    this.loader.present();
  }

  //pickup_id, fid, pack, description, tracking_id
  submit() {
    this.presentLoading();
    this.data.addPickup(this.pickup_id, this.fid, this.pack, this.description, this.tracking_id).subscribe(data => {
      this.showAlert("Added", "Completely add to pending uploads");
      this.loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, err => {
      this.showAlert("Error", "Not submited");
      this.loader.dismiss();
    });
  }


}
