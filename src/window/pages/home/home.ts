import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoorProvider } from '../../providers/door/door';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		public door: DoorProvider
	) {

	}

}
