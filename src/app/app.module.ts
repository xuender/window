import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Ng2Webstorage } from 'ngx-webstorage';

import { WindowModule } from '../window/window.module';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';


@NgModule({
	declarations: [
		MyApp,
		ListPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		Ng2Webstorage.forRoot({ prefix: 'win', separator: '.', caseSensitive:true }),
		WindowModule,
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		ListPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
	]
})
export class AppModule {}
