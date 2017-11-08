import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { CoachesPage } from '../coaches/coaches';
import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: string = '';
  constructor(public navCtrl: NavController, private http: Http,
              private lc: LoadingController, private ac: AlertController) {

  }
  onSubmit(form: NgForm) {
    const load = this.lc.create({
      content: 'Authenticating in progress. . .'
    });
    load.present();
    const alert = this.ac.create({
      title: 'Log In Failed',
      subTitle: 'Invalid Password or Email',
      buttons: ['Try Again!']
    });
    const email = form.value.username;
    const pw = form.value.password
    const body = {email: email, password: pw}
    // console.log(body);
    this.http.post('https://haunted-crypt-78964.herokuapp.com/login', body)
    .subscribe(data => {
      load.dismiss();
      this.token = data.json().token;
      // console.log(this.token);
      this.navCtrl.setRoot(CoachesPage, {token: this.token});
    },
    err => {
      load.dismiss();
      alert.present();
    });
  }
}
