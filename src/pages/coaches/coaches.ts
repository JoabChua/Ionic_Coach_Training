import { NewcoachPage } from '../newcoach/newcoach';
import { CoachdetailPage } from '../coachdetail/coachdetail';
import { HomePage } from '../home/home';
import { Http, Headers } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { IonicPage, LoadingController, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-coaches',
  templateUrl: 'coaches.html',
})

export class CoachesPage {
  token: string;
  api;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private http: Http, private lc: LoadingController,
              private mc: ModalController) {
  //  console.log(this.token);
  this.token = this.navParams.get('token');
  const load = this.lc.create({
    content: 'Loading . . .'
  });
  // console.log(this.token);
  load.present();
  load.dismiss();
  
  }
  
  ionViewDidEnter() {
    this.getApi();    
  }
  
  AuthHead(headers: Headers) {
    headers.append('Authorization', 'Bearer ' +
      this.token); 
  }
  getApi() {
    let headers = new Headers();
    this.AuthHead(headers);
    // console.log(headers);
    return this.http.get('https://haunted-crypt-78964.herokuapp.com/loggedInCoach', {
      headers: headers
    })
    .subscribe(
      (data) => {
        this.api = data.json();
        // console.log(this.api);
      }
    );
  }

  onLogout() {
    this.navCtrl.setRoot(HomePage);
  }

  selectedItem(info) {
    this.navCtrl.push(CoachdetailPage, {detail: info})
  }

  onAdd(){
    const modal = this.mc.create(NewcoachPage);
    modal.present();
    modal.onDidDismiss(() => {
      this.ionViewDidEnter();
    })
  }
}
