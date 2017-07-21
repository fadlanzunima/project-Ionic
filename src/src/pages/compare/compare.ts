import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Compare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html'
})
export class ComparePage {
  public ipbList : FirebaseListObservable<any>;
  public originalData=[];
  public filterData=[];
  public data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public af: AngularFireDatabase) {
     setTimeout(() => console.log(this.originalData), 1000);
  }
ionViewWillEnter(){
  this.ipbList = this.af.list('/Daftar Prodi/IPB');
    this.ipbList.forEach((value)=> {
     this.data = value;
     this.initializeData();
    });
    setTimeout(() => this.showData(), 2000);
}
showData(){
  for(let a of this.originalData){
    console.log(a);
  }
}
initializeData() {
  this.originalData = [];
   for(let a of this.data){
      this.originalData.push(a);
  }
}
 getItems(ev) {
    // Reset items back to all of the items
    this.initializeData();

    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.originalData = this.originalData.filter((item) => {
        return (item.nama_prodi.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
