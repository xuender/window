import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoorProvider } from './providers/door/door';

import { WaitingPage } from './pages/waiting/waiting';
import { RegisterPage } from './pages/register/register';
import { LoginPage } from './pages/login/login';
import { HomePage } from './pages/home/home';
import { ToPatternPipe } from './pipes/to-pattern/to-pattern';

@NgModule({
	declarations: [
		WaitingPage,
		LoginPage,
		RegisterPage,
		HomePage,
		ToPatternPipe,
	],
	imports: [
		IonicPageModule.forChild(WaitingPage),
		IonicPageModule.forChild(LoginPage),
		IonicPageModule.forChild(RegisterPage),
		IonicPageModule.forChild(HomePage),
		IonicPageModule.forChild(ToPatternPipe),
	],
	providers: [
		DoorProvider
	],
	exports: [
		WaitingPage,
		LoginPage,
		RegisterPage,
		HomePage,
		ToPatternPipe,
	]
})
export class WindowModule {}
