/**
 * Shape of a message
 *
 * const message = {
 *   id: // UUID
 *   time: // Unix timestamp
 *   content: // String
 * }
 */

const uuid = require("uuid").v4;

class MessageStore {
  constructor() {
    this.messages = [];
  }

  getAll() {
    return this.messages;
  }

  append(payload) {
    const newMsg = { id: uuid(), timestamp: Date.now(), content: payload };
    this.messages.push(newMsg);
    return newMsg;
  }
}

module.exports = MessageStore;
