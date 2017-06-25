import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DoorProvider } from '../../providers/door/door';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { User, SysInfo, Page } from '../../window_pb';

@Component({
	selector: 'page-waiting',
	templateUrl: 'waiting.html',
})
export class WaitingPage {

	constructor(
		public navCtrl: NavController,
		public door: DoorProvider
	) {
		// 连接
		this.door.openObservable.subscribe((sysInfo: SysInfo.AsObject) => {
			if (!this.door.loginForUserNum()) {
				this.navCtrl.setRoot(LoginPage);
			}
		});
		// 登录成功
		this.door.loginObservable.subscribe((user: User.AsObject) => {
			this.navCtrl.setRoot(HomePage);
		});
		// 登录失败
		this.door.pageObservable.subscribe((page: Page.AsObject) => {
			this.door.message(page.msg);
			this.navCtrl.setRoot(LoginPage);
		});
	}
}
