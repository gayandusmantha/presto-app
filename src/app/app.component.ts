import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { PickupPage } from '../pages/pickup/pickup';
import { PicktwoPage } from '../pages/picktwo/picktwo';
import { PicklistPage } from '../pages/picklist/picklist';
import { PickupsummaryPage } from '../pages/pickupsummary/pickupsummary';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  name: any;
  id: any;

  rootPage: any;

  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events, private storage: Storage) {
    this.initializeApp();

    //user name and id 
    events.subscribe('setname', () => {
      storage.get('NAME').then((val) => {
        this.name = val;
      });
    });

    events.subscribe('setid', () => {
      storage.get('ID').then((val) => {
        this.id = val;
      });
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon: 'md-home' },
      { title: 'PICKUP SUMMARY', component: PickupsummaryPage, icon: 'ios-person' },
      { title: 'LIVE CHAT', component: ListPage, icon: 'md-send' },    
      { title: 'SIGN OUT', component: LoginPage, icon: 'log-out' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.storage.get('NAME').then((val) => {
        if (val) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = LoginPage;
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var notificationOpenedCallback = function (jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window["plugins"].OneSignal
        .startInit("bd6adb16-be61-4dea-93b4-727e69944c3a", "320924028204")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
