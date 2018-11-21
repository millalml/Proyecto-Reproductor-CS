import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';

/**
 * Generated class for the CancionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-cancion',
  	templateUrl: 'cancion.html',
})
export class CancionPage {
	cancion;

  	constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  		this.cancion = navParams.get('cancion');
  	}

  	votoCancion(cancion) {
  		const toast = this.toastCtrl.create({
  			message: 'Votaste por ' + this.cancion.title,
  			duration: 5000
  		})
  		toast.present();
		this.navCtrl.push(CancionesPage);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CancionPage');
  	}

}
