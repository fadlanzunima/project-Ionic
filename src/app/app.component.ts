import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HalamanAwalPage } from '../pages/halaman-awal/halaman-awal';
import { TabsPage } from '../pages/tabs/tabs';
import { UserData } from '../providers/user-data';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public rootPage:any;//HalamanAwalPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public userData: UserData) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.userData.cekLogin().then((isLogin) => {
      if(isLogin){
        this.rootPage=TabsPage;
      }
      else
        this.rootPage=LoginPage;
    });
  }
}

