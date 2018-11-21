import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CancionPage } from '../cancion/cancion';

/**
 * Generated class for the CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-canciones',
	templateUrl: 'canciones.html',
})
export class CancionesPage {

	listCanciones : Array<any> = [
		{
			title: "Canción 1",
			num: 1
		},
		{
			title: "Canción 2",
			num: 2
		},
		{
			title: "Canción 3",
			num: 3
		},
		{
			title: "Canción 4",
			num: 4
		},
		{
			title: "Canción 5",
			num: 5
		},
		{
			title: "Canción 6",
			num: 6
		},
		{
			title: "Canción 7",
			num: 7
		}
	]

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	cancionSeleccionada(cancion) {
		this.navCtrl.push(CancionPage, { cancion : cancion });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CancionesPage');
	}

}
