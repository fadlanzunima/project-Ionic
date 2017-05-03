import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello UserData Provider');
  }
  login(){
    this.storage.set('login',true);
  }
  logout(){
    this.storage.set('login',false);
  }
  cekLogin(){
    return this.storage.get('login').then((value) => {
      return value === true;
    });
  }

}
