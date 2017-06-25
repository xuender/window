import { Injectable } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket'
import { LocalStorageService } from 'ngx-webstorage';
import { Door, Context } from 'ws-door';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import Base64 from 'crypto-js/enc-base64';
import md5 from 'crypto-js/md5';

import { SysInfo, Login, Msg, User, Page } from '../../window_pb';
import { AlertController } from 'ionic-angular';
import { assign } from '../../utils/pb';

@Injectable()
export class DoorProvider {
	private ws: $WebSocket;
	private door: Door;
	private openSubject = new Subject<SysInfo.AsObject>()
	private pageSubject = new Subject<Page.AsObject>()
	private loginSubject = new Subject<User.AsObject>()

	openObservable = this.openSubject.asObservable();
	pageObservable = this.pageSubject.asObservable();
	loginObservable = this.loginSubject.asObservable();
	sysInfo: SysInfo.AsObject;
	user: User.AsObject;
	constructor(
		private lss:LocalStorageService,
		public alertCtrl: AlertController
	) {
		this.ws = new $WebSocket('ws://localhost:8888/ws');
		this.door = new Door(this.ws);
		// 连接
		this.door.openBind((c: Context) => {
			this.sysInfo = c.toObject(SysInfo);
			this.openSubject.next(this.sysInfo);
		}, 'window');
		// 切换页面
		this.door.putBind((c: Context) => this.pageSubject.next(c.toObject(Page)), 'window', 'page');
		// 接收提示信息
		this.door.postBind((c: Context) => this.message(c.toObject(Msg)), 'window', 'msg')
		// 用户登成功
		this.door.putBind((c: Context) => {
			this.user = c.toObject(User);
			this.loginSubject.next(this.user);
			this.lss.store('userNum', this.user.num);
		}, 'window', 'login')

		this.ws.onMessage((m: MessageEvent) => this.door.onMessage(m), { autoApply: false });
	}

	message(msg: Msg.AsObject) {
		if (msg) {
			this.alertCtrl.create({
				title: ['提示', '警告', '错误', '致命'][msg.type],
				subTitle: msg.text,
				buttons: ['确定'],
			}).present();
		}
	}

	login(user: Login.AsObject, saveToken: boolean) {
		const l = new Login();
		l.setPhone(user.phone);
		const p =  Base64.stringify(md5(`window-${user.password}-door`));
		this.lss.clear('token');
		if (saveToken) {
			this.lss.store('token',p);
		}
		l.setPassword(Base64.stringify(md5(`${this.sysInfo.usernum}-${p}`)));
		this.ws.send(this.door.postBinary(l, 'window', 'login'), WebSocketSendMode.Direct, true);
	}

	loginForUserNum(): boolean {
		const userNum = this.lss.retrieve('userNum');
		const token = this.lss.retrieve('token');
		if (userNum && token) {
			const l = new Login();
			l.setUsernum(userNum);
			l.setPassword(Base64.stringify(md5(`${this.sysInfo.usernum}-${token}`)));
			this.ws.send(this.door.postBinary(l, 'window', 'login'), WebSocketSendMode.Direct, true);
			return true;
		}
		return false;
	}

	logout() {
		this.ws.send(this.door.deleteBinary(null, 'window', 'login'), WebSocketSendMode.Direct, true);
		this.lss.clear('token');
		this.lss.clear('userNum');
	}

	register(user: User.AsObject) {
		const u = new User();
		assign(u, user);
		const p =  Base64.stringify(md5(`window-${user.password}-door`));
		u.setPassword(p);
		this.ws.send(this.door.postBinary(u, 'window', 'register'), WebSocketSendMode.Direct, true);
	}
}
