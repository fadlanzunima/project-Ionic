import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ComparePage } from '../pages/compare/compare';
import { RegisterPage } from '../pages/register/register';
import { InformasiPage } from '../pages/informasi/informasi';
import { TabsPage } from '../pages/tabs/tabs';
import { KalenderPage } from '../pages/kalender/kalender';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SyaratPendaftaranPage } from '../pages/syarat-pendaftaran/syarat-pendaftaran';
import { JadwalSbmptnPage } from '../pages/jadwal-sbmptn/jadwal-sbmptn';
import { JadwalMandiriPage } from '../pages/jadwal-mandiri/jadwal-mandiri';
import { IpbPage } from '../pages/kampus/ipb/ipb';
import { UiPage } from '../pages/kampus/ui/ui';
import { ItbPage } from '../pages/kampus/itb/itb';
import { UnpadPage } from '../pages/kampus/unpad/unpad';
import { UnjPage } from '../pages/kampus/unj/unj';
import { AdminPage } from "../pages/admin/admin";
import { EventPage } from "../pages/event/event"


import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';
import { NgCalendarModule  } from 'ionic2-calendar';

import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//Import AF2
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBCw7fuK5OdHu24nXV6BBJ4WIf8x0EMl8U",
  authDomain: "projek-psbo.firebaseapp.com",
  databaseURL: "https://projek-psbo.firebaseio.com",
  storageBucket: "projek-psbo.appspot.com",
  messagingSenderId: "253696722106"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ComparePage,
    RegisterPage,
    InformasiPage,
    TabsPage,
   KalenderPage,
    ProfilePage,
    EditProfilePage,
    SyaratPendaftaranPage,
    JadwalSbmptnPage,
    JadwalMandiriPage,
    IpbPage,
    UiPage,
    ItbPage,
    UnpadPage,
    UnjPage,
    AdminPage,
    EventPage
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
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
    ProfilePage,
    EditProfilePage,
    SyaratPendaftaranPage,
    JadwalSbmptnPage,
    JadwalMandiriPage,
    IpbPage,
    UiPage,
    ItbPage,
    UnpadPage,
    UnjPage,
    AdminPage,
    EventPage 
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
