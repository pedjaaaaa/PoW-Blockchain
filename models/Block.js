const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, precedingHash) {
    this.index = 0;
    this.timestamp = Date.now();
    this.data = data;
    this.precedingHash = "0";
    this.nonce = 0;
    this.transactions = [];
    this.hash = this.hash;
  }
  addTransaction(tx) {
    this.transactions.push(tx);
  }
  hash() {
    return SHA256(
      this.index + "" +
      this.precedingHash + "" +
      this.timestamp + "" +
      this.data + "" +
      this.nonce + "" +
      JSON.stringify(this.transactions)
    ).toString();
  }
  execute() {
    this.transactions.forEach(x => x.execute());
  }
}

module.exports = Block;
