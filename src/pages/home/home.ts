import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('password') password;

	constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
	  this.loadingCtrl.create({
			content: 'Please wait...',
			duration: 3000,
			dismissOnPageChange: true
		}).present();
  	}

  	accederBar() {
  		console.log(this.password.value);
  		if(this.password.value == 'Hola') {
  			this.navCtrl.push(CancionesPage);
  		}
  	}

  	ionViewDidLoad() {
  		console.log('ionViewDidLoad HomePage');
  	}
}
