import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LocalStorage } from 'ngx-webstorage';

import { DoorProvider } from '../../providers/door/door';
import { HomePage } from '../home/home';
import { Login, User } from '../../window_pb';
import { RegisterPage } from '../register/register';


@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	user: Login.AsObject;
	@LocalStorage('saveToken')
	saveToken: boolean;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public door: DoorProvider
	) {
		this.user = {phone:'', password: '', usernum: 0};
		this.door.loginObservable.subscribe((user: User.AsObject) => {
			this.navCtrl.setRoot(HomePage);
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	register() {
		this.navCtrl.push(RegisterPage);
	}
}
