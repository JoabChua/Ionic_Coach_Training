import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { AlertController, IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-newcoach',
  templateUrl: 'newcoach.html',
})
export class NewcoachPage {
  detail;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private vc: ViewController, private http: Http,
              private lc: LoadingController, private ac: AlertController) {
  }

  goBack() {
    this.vc.dismiss();
  }

  onCreate(form: NgForm) {
    const load = this.lc.create({
      content: 'Creating New Coach. . .'
    });
    load.present();
    const alert = this.ac.create({
      title: 'System not availble',
      subTitle: 'Please Try Again Later!',
      buttons: ['Try Again!']
    });
    // console.log(form.value);
    const body = {name: form.value.name, picURL: form.value.picURL, description: form.value.desc}
    this.http.post('https://haunted-crypt-78964.herokuapp.com/coaches', body)
    .subscribe(data => {
      load.dismiss();
      this.detail = data.json();
      console.log(this.detail);
      this.vc.dismiss();
 
    },
    err => {
      load.dismiss();
      alert.present();
      this.vc.dismiss();
    });
  }

}
