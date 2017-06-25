import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { DoorProvider } from '../../providers/door/door';
import { User } from '../../window_pb';

@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	user: User.AsObject;
	password2: string;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public door: DoorProvider
	) {
		this.user = {name:'', phone: '', password: ''} as User.AsObject;
		this.password2 = '';
	}
}
