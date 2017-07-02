import { Injectable } from '@angular/core';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket'
import { LocalStorageService } from 'ngx-webstorage';
import { Door, Context } from 'ws-door';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import Base64 from 'crypto-js/enc-base64';
import md5 from 'crypto-js/md5';

import { SysInfo, Login, Msg, User, Page, MsgEnum } from '../../window_pb';
import { AlertController, ToastController } from 'ionic-angular';
import { assign } from '../../utils/pb';

@Injectable()
export class DoorProvider {
	private ws: $WebSocket;
	private openSubject = new Subject<SysInfo.AsObject>()
	private pageSubject = new Subject<Page.AsObject>()
	private loginSubject = new Subject<User.AsObject>()

	public door: Door;
	public openObservable = this.openSubject.asObservable();
	public pageObservable = this.pageSubject.asObservable();
	public loginObservable = this.loginSubject.asObservable();
	public sysInfo: SysInfo.AsObject;
	public user: User.AsObject;
	constructor(
		private lss: LocalStorageService,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController
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

	public message(msg: Msg.AsObject) {
		if (msg) {
			if (msg.type === MsgEnum.TOAST) {
				this.toastCtrl.create({
					message: msg.text,
					position: 'top',
					duration: 3000,
				}).present();
				return;
			}
			this.alertCtrl.create({
				title: ['提示', '警告', '错误', '致命'][msg.type],
				subTitle: msg.text,
				buttons: ['确定'],
			}).present();
		}
	}

	public login(user: Login.AsObject, saveToken: boolean) {
		const l = new Login();
		l.setPhone(user.phone);
		const p = Base64.stringify(md5(`window-${user.password}-door`));
		this.lss.clear('token');
		if (saveToken) {
			this.lss.store('token', p);
		}
		l.setPassword(Base64.stringify(md5(`${this.sysInfo.usernum}-${p}`)));
		this.send(this.door.postBinary(l, 'window', 'login'));
	}

	public loginForUserNum(): boolean {
		const userNum = this.lss.retrieve('userNum');
		const token = this.lss.retrieve('token');
		if (userNum && token) {
			const l = new Login();
			l.setUsernum(userNum);
			l.setPassword(Base64.stringify(md5(`${this.sysInfo.usernum}-${token}`)));
			this.send(this.door.postBinary(l, 'window', 'login'));
			return true;
		}
		return false;
	}

	public logout() {
		this.send(this.door.deleteBinary(null, 'window', 'login'));
		this.lss.clear('token');
		this.lss.clear('userNum');
	}

	public register(user: User.AsObject) {
		const u = new User();
		assign(u, user);
		const p = Base64.stringify(md5(`window-${user.password}-door`));
		u.setPassword(p);
		this.send(this.door.postBinary(u, 'window', 'register'));
	}

	public send(msg: any) {
		this.ws.send(msg, WebSocketSendMode.Direct, true);
	}
}
