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

import { UserData } from '../providers/user-data';
import { Storage } from '@ionic/storage';

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
    EditProfilePage
  ],
  imports: [
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
    EditProfilePage
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
