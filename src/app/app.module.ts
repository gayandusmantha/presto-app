import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { PickupPage } from '../pages/pickup/pickup';
import { PicktwoPage } from '../pages/picktwo/picktwo';
import { PendingPage } from '../pages/pending/pending';
import { PicklistPage } from '../pages/picklist/picklist';
import { ViewPage } from '../pages/view/view';
import { PickupsummaryPage } from '../pages/pickupsummary/pickupsummary';
import { VanscanPage } from '../pages/vanscan/vanscan';
import { DeliverylistPage } from '../pages/deliverylist/deliverylist';
import { DeliveryviewPage } from '../pages/deliveryview/deliveryview';
import { DeliverydonePage } from '../pages/deliverydone/deliverydone';
import { DeliveryconfirmPage } from '../pages/deliveryconfirm/deliveryconfirm';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ApiProvider } from '../providers/api/api';
import { IonicStorageModule } from '@ionic/storage';
import { SaveProvider } from '../providers/save/save';
import { OneSignal } from '@ionic-native/onesignal';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    LoginPage,
    PickupPage,
    PicktwoPage,
    PendingPage,
    PicklistPage,
    ViewPage,
    PickupsummaryPage,
    VanscanPage,
    DeliverylistPage,
    DeliveryviewPage,
    DeliverydonePage,
    DeliveryconfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MenuPage,
    LoginPage,
    PickupPage,
    PicktwoPage,
    PendingPage,
    PicklistPage,
    ViewPage,
    PickupsummaryPage,
    VanscanPage,
    DeliverylistPage,
    DeliveryviewPage,
    DeliverydonePage,
    DeliveryconfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    File,
    FilePath,
    FileTransfer,
    FileTransferObject,
    BarcodeScanner,
    ApiProvider,
    SaveProvider,
    OneSignal
  ]
})
export class AppModule { }
