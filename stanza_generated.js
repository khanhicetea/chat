// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var stanzas = stanzas || {};

/**
 * @enum
 */
stanzas.MessageType = {
  Chat: 1,
  Error: 2,
  GroupChat: 3,
  Headline: 4,
  Normal: 5
};

/**
 * @enum
 */
stanzas.ChatState = {
  Active: 1,
  Inactive: 2,
  Gone: 3,
  Composing: 4,
  Paused: 5
};

/**
 * @enum
 */
stanzas.DeliveryStatus = {
  Pending: 1,
  Sent: 2,
  Delivered: 3
};

/**
 * @enum
 */
stanzas.Receipt = {
  Request: 0,
  Received: 1
};

/**
 * @constructor
 */
stanzas.Message = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {stanzas.Message}
 */
stanzas.Message.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {stanzas.Message=} obj
 * @returns {stanzas.Message}
 */
stanzas.Message.getRootAsMessage = function(bb, obj) {
  return (obj || new stanzas.Message).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Message.prototype.id = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Message.prototype.sender = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Message.prototype.to = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {stanzas.MessageType}
 */
stanzas.Message.prototype.type = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? /** @type {stanzas.MessageType} */ (this.bb.readInt8(this.bb_pos + offset)) : stanzas.MessageType.Chat;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Message.prototype.body = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {stanzas.ChatState}
 */
stanzas.Message.prototype.chatstate = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? /** @type {stanzas.ChatState} */ (this.bb.readInt8(this.bb_pos + offset)) : stanzas.ChatState.Active;
};

/**
 * @returns {boolean}
 */
stanzas.Message.prototype.received = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns {boolean}
 */
stanzas.Message.prototype.delivered = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
};

/**
 * @returns {boolean}
 */
stanzas.Message.prototype.receipt = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? /** @type {stanzas.Receipt} */ (!!this.bb.readInt8(this.bb_pos + offset)) : stanzas.Receipt.Request;
};

/**
 * @param {flatbuffers.Builder} builder
 */
stanzas.Message.startMessage = function(builder) {
  builder.startObject(9);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} idOffset
 */
stanzas.Message.addId = function(builder, idOffset) {
  builder.addFieldOffset(0, idOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} senderOffset
 */
stanzas.Message.addSender = function(builder, senderOffset) {
  builder.addFieldOffset(1, senderOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} toOffset
 */
stanzas.Message.addTo = function(builder, toOffset) {
  builder.addFieldOffset(2, toOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {stanzas.MessageType} type
 */
stanzas.Message.addType = function(builder, type) {
  builder.addFieldInt8(3, type, stanzas.MessageType.Chat);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} bodyOffset
 */
stanzas.Message.addBody = function(builder, bodyOffset) {
  builder.addFieldOffset(4, bodyOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {stanzas.ChatState} chatstate
 */
stanzas.Message.addChatstate = function(builder, chatstate) {
  builder.addFieldInt8(5, chatstate, stanzas.ChatState.Active);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} received
 */
stanzas.Message.addReceived = function(builder, received) {
  builder.addFieldInt8(6, +received, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} delivered
 */
stanzas.Message.addDelivered = function(builder, delivered) {
  builder.addFieldInt8(7, +delivered, +false);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {boolean} receipt
 */
stanzas.Message.addReceipt = function(builder, receipt) {
  builder.addFieldInt8(8, +receipt, +stanzas.Receipt.Request);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
stanzas.Message.endMessage = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
stanzas.Presence = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {stanzas.Presence}
 */
stanzas.Presence.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {stanzas.Presence=} obj
 * @returns {stanzas.Presence}
 */
stanzas.Presence.getRootAsPresence = function(bb, obj) {
  return (obj || new stanzas.Presence).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Presence.prototype.type = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
stanzas.Presence.startPresence = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} typeOffset
 */
stanzas.Presence.addType = function(builder, typeOffset) {
  builder.addFieldOffset(0, typeOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
stanzas.Presence.endPresence = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @constructor
 */
stanzas.Stanza = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {stanzas.Stanza}
 */
stanzas.Stanza.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {stanzas.Stanza=} obj
 * @returns {stanzas.Stanza}
 */
stanzas.Stanza.getRootAsStanza = function(bb, obj) {
  return (obj || new stanzas.Stanza).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {stanzas.Message=} obj
 * @returns {stanzas.Message}
 */
stanzas.Stanza.prototype.message = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new stanzas.Message).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {stanzas.Presence=} obj
 * @returns {stanzas.Presence}
 */
stanzas.Stanza.prototype.presence = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? (obj || new stanzas.Presence).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
stanzas.Stanza.startStanza = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} messageOffset
 */
stanzas.Stanza.addMessage = function(builder, messageOffset) {
  builder.addFieldOffset(0, messageOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} presenceOffset
 */
stanzas.Stanza.addPresence = function(builder, presenceOffset) {
  builder.addFieldOffset(1, presenceOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
stanzas.Stanza.endStanza = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
stanzas.Stanza.finishStanzaBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
stanzas.Auth = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {stanzas.Auth}
 */
stanzas.Auth.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {stanzas.Auth=} obj
 * @returns {stanzas.Auth}
 */
stanzas.Auth.getRootAsAuth = function(bb, obj) {
  return (obj || new stanzas.Auth).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Auth.prototype.username = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
stanzas.Auth.prototype.channel = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
stanzas.Auth.startAuth = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} usernameOffset
 */
stanzas.Auth.addUsername = function(builder, usernameOffset) {
  builder.addFieldOffset(0, usernameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} channelOffset
 */
stanzas.Auth.addChannel = function(builder, channelOffset) {
  builder.addFieldOffset(1, channelOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
stanzas.Auth.endAuth = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.stanzas = stanzas;