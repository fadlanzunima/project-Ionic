import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
//import { HalamanAwalPage } from '../pages/halaman-awal/halaman-awal';
import { ComparePage } from '../pages/compare/compare';
import { RegisterPage } from '../pages/register/register';
import { InformasiPage } from '../pages/informasi/informasi';
import { TabsPage } from '../pages/tabs/tabs';
import { KalenderPage } from '../pages/kalender/kalender';
import { ProfilePage } from '../pages/profile/profile';

import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ComparePage,
    RegisterPage,
    InformasiPage,
    TabsPage,
    KalenderPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ComparePage,
    RegisterPage,
    InformasiPage,
    TabsPage,
    KalenderPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserData,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
