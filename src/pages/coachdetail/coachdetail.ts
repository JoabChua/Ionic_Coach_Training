import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoachdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coachdetail',
  templateUrl: 'coachdetail.html',
})
export class CoachdetailPage {
  detail;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detail = this.navParams.get('detail');
    // console.log(this.detail);
  }

  

}
