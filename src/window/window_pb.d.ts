// package: window
// file: window.proto

import * as jspb from "google-protobuf";

export class SysInfo extends jspb.Message {
  getServerversion(): string;
  setServerversion(value: string): void;

  getUsernum(): number;
  setUsernum(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SysInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SysInfo): SysInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SysInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SysInfo;
  static deserializeBinaryFromReader(message: SysInfo, reader: jspb.BinaryReader): SysInfo;
}

export namespace SysInfo {
  export type AsObject = {
    serverversion: string,
    usernum: number,
    timestamp: number,
  }
}

export class Page extends jspb.Message {
  getPage(): string;
  setPage(value: string): void;

  hasMsg(): boolean;
  clearMsg(): void;
  getMsg(): Msg | undefined;
  setMsg(value?: Msg): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    page: string,
    msg?: Msg.AsObject,
  }
}

export class Msg extends jspb.Message {
  getType(): MsgEnum;
  setType(value: MsgEnum): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Msg.AsObject;
  static toObject(includeInstance: boolean, msg: Msg): Msg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Msg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Msg;
  static deserializeBinaryFromReader(message: Msg, reader: jspb.BinaryReader): Msg;
}

export namespace Msg {
  export type AsObject = {
    type: MsgEnum,
    text: string,
  }
}

export class Login extends jspb.Message {
  getPhone(): string;
  setPhone(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getUsernum(): number;
  setUsernum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Login.AsObject;
  static toObject(includeInstance: boolean, msg: Login): Login.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Login, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Login;
  static deserializeBinaryFromReader(message: Login, reader: jspb.BinaryReader): Login;
}

export namespace Login {
  export type AsObject = {
    phone: string,
    password: string,
    usernum: number,
  }
}

export class User extends jspb.Message {
  getNum(): number;
  setNum(value: number): void;

  getPhone(): string;
  setPhone(value: string): void;

  getPassword(): Uint8Array | string;
  getPassword_asU8(): Uint8Array;
  getPassword_asB64(): string;
  setPassword(value: Uint8Array | string): void;

  getName(): string;
  setName(value: string): void;

  getLastremote(): string;
  setLastremote(value: string): void;

  getLastlogin(): number;
  setLastlogin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    num: number,
    phone: string,
    password: Uint8Array | string,
    name: string,
    lastremote: string,
    lastlogin: number,
  }
}

export enum MsgEnum {
  INFO = 0,
  WARN = 1,
  ERROR = 2,
  FATAL = 3,
}

