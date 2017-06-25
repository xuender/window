import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DoorProvider } from '../window/providers/door/door';

import { HomePage } from '../window/pages/home/home';
import { LoginPage } from '../window/pages/login/login';
import { ListPage } from '../pages/list/list';
import { WaitingPage } from '../window/pages/waiting/waiting';
import { Page } from '../window/window_pb';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;
	rootPage: any = WaitingPage;
	pages: Array<{title: string, component: any}>;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public door: DoorProvider
	) {
		this.initializeApp();
		this.pages = [
			{ title: '主页', component: HomePage },
			{ title: 'List', component: ListPage }
		];
		// 登出
		this.door.pageObservable.subscribe((page: Page.AsObject) => {
			this.door.message(page.msg);
			this.nav.setRoot(LoginPage);
		});
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		this.nav.setRoot(page.component);
	}
}
