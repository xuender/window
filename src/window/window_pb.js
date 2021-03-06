/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.window.Login', null, global);
goog.exportSymbol('proto.window.Msg', null, global);
goog.exportSymbol('proto.window.MsgEnum', null, global);
goog.exportSymbol('proto.window.Page', null, global);
goog.exportSymbol('proto.window.SysInfo', null, global);
goog.exportSymbol('proto.window.User', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.window.SysInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.window.SysInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.window.SysInfo.displayName = 'proto.window.SysInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.window.SysInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.window.SysInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.window.SysInfo} msg The msg instance to transform.
 * @return {!Object}
 */
proto.window.SysInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    serverversion: msg.getServerversion(),
    usernum: msg.getUsernum(),
    timestamp: msg.getTimestamp()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.window.SysInfo}
 */
proto.window.SysInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.window.SysInfo;
  return proto.window.SysInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.window.SysInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.window.SysInfo}
 */
proto.window.SysInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServerversion(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUsernum(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.window.SysInfo} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.SysInfo.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.window.SysInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.SysInfo.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getServerversion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getUsernum();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.window.SysInfo} The clone.
 */
proto.window.SysInfo.prototype.cloneMessage = function() {
  return /** @type {!proto.window.SysInfo} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string serverVersion = 1;
 * @return {string}
 */
proto.window.SysInfo.prototype.getServerversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.window.SysInfo.prototype.setServerversion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 userNum = 2;
 * @return {number}
 */
proto.window.SysInfo.prototype.getUsernum = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.window.SysInfo.prototype.setUsernum = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 timeStamp = 3;
 * @return {number}
 */
proto.window.SysInfo.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.window.SysInfo.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.window.Page = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.window.Page, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.window.Page.displayName = 'proto.window.Page';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.window.Page.prototype.toObject = function(opt_includeInstance) {
  return proto.window.Page.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.window.Page} msg The msg instance to transform.
 * @return {!Object}
 */
proto.window.Page.toObject = function(includeInstance, msg) {
  var f, obj = {
    page: msg.getPage(),
    msg: (f = msg.getMsg()) && proto.window.Msg.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.window.Page}
 */
proto.window.Page.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.window.Page;
  return proto.window.Page.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.window.Page} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.window.Page}
 */
proto.window.Page.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPage(value);
      break;
    case 2:
      var value = new proto.window.Msg;
      reader.readMessage(value,proto.window.Msg.deserializeBinaryFromReader);
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.window.Page} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Page.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.window.Page.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Page.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMsg();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.window.Msg.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.window.Page} The clone.
 */
proto.window.Page.prototype.cloneMessage = function() {
  return /** @type {!proto.window.Page} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string page = 1;
 * @return {string}
 */
proto.window.Page.prototype.getPage = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.window.Page.prototype.setPage = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Msg msg = 2;
 * @return {proto.window.Msg}
 */
proto.window.Page.prototype.getMsg = function() {
  return /** @type{proto.window.Msg} */ (
    jspb.Message.getWrapperField(this, proto.window.Msg, 2));
};


/** @param {proto.window.Msg|undefined} value  */
proto.window.Page.prototype.setMsg = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.window.Page.prototype.clearMsg = function() {
  this.setMsg(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.window.Page.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.window.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.window.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.window.Msg.displayName = 'proto.window.Msg';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.window.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.window.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.window.Msg} msg The msg instance to transform.
 * @return {!Object}
 */
proto.window.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: msg.getType(),
    text: msg.getText()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.window.Msg}
 */
proto.window.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.window.Msg;
  return proto.window.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.window.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.window.Msg}
 */
proto.window.Msg.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.window.MsgEnum} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.window.Msg} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Msg.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.window.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Msg.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.window.Msg} The clone.
 */
proto.window.Msg.prototype.cloneMessage = function() {
  return /** @type {!proto.window.Msg} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MsgEnum type = 1;
 * @return {!proto.window.MsgEnum}
 */
proto.window.Msg.prototype.getType = function() {
  return /** @type {!proto.window.MsgEnum} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.window.MsgEnum} value  */
proto.window.Msg.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.window.Msg.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.window.Msg.prototype.setText = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.window.Login = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.window.Login, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.window.Login.displayName = 'proto.window.Login';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.window.Login.prototype.toObject = function(opt_includeInstance) {
  return proto.window.Login.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.window.Login} msg The msg instance to transform.
 * @return {!Object}
 */
proto.window.Login.toObject = function(includeInstance, msg) {
  var f, obj = {
    phone: msg.getPhone(),
    password: msg.getPassword(),
    usernum: msg.getUsernum()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.window.Login}
 */
proto.window.Login.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.window.Login;
  return proto.window.Login.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.window.Login} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.window.Login}
 */
proto.window.Login.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUsernum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.window.Login} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Login.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.window.Login.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.Login.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPhone();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getUsernum();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.window.Login} The clone.
 */
proto.window.Login.prototype.cloneMessage = function() {
  return /** @type {!proto.window.Login} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string phone = 1;
 * @return {string}
 */
proto.window.Login.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.window.Login.prototype.setPhone = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.window.Login.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.window.Login.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 userNum = 3;
 * @return {number}
 */
proto.window.Login.prototype.getUsernum = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.window.Login.prototype.setUsernum = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.window.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.window.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.window.User.displayName = 'proto.window.User';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.window.User.prototype.toObject = function(opt_includeInstance) {
  return proto.window.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.window.User} msg The msg instance to transform.
 * @return {!Object}
 */
proto.window.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    num: msg.getNum(),
    phone: msg.getPhone(),
    password: msg.getPassword_asB64(),
    name: msg.getName(),
    lastremote: msg.getLastremote(),
    lastlogin: msg.getLastlogin()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.window.User}
 */
proto.window.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.window.User;
  return proto.window.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.window.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.window.User}
 */
proto.window.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNum(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastremote(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastlogin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.window.User} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.User.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.window.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.window.User.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNum();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = this.getPhone();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getPassword_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getLastremote();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getLastlogin();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.window.User} The clone.
 */
proto.window.User.prototype.cloneMessage = function() {
  return /** @type {!proto.window.User} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 num = 1;
 * @return {number}
 */
proto.window.User.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.window.User.prototype.setNum = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string phone = 2;
 * @return {string}
 */
proto.window.User.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.window.User.prototype.setPhone = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes password = 3;
 * @return {!(string|Uint8Array)}
 */
proto.window.User.prototype.getPassword = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes password = 3;
 * This is a type-conversion wrapper around `getPassword()`
 * @return {string}
 */
proto.window.User.prototype.getPassword_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPassword()));
};


/**
 * optional bytes password = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPassword()`
 * @return {!Uint8Array}
 */
proto.window.User.prototype.getPassword_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPassword()));
};


/** @param {!(string|Uint8Array)} value  */
proto.window.User.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.window.User.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.window.User.prototype.setName = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string lastRemote = 5;
 * @return {string}
 */
proto.window.User.prototype.getLastremote = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.window.User.prototype.setLastremote = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int64 lastLogin = 6;
 * @return {number}
 */
proto.window.User.prototype.getLastlogin = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.window.User.prototype.setLastlogin = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * @enum {number}
 */
proto.window.MsgEnum = {
  INFO: 0,
  WARN: 1,
  ERROR: 2,
  FATAL: 3,
  TOAST: 4
};

goog.object.extend(exports, proto.window);
