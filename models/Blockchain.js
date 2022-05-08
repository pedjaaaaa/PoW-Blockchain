const Block = require("./Block");

class Blockchain {
  constructor() {
    this.blocks = [];
  }

  obtainLatestBlock() {
    return this.blocks[this.blocks.length - 1];
  }
  addBlock(block) {
    block.precedingHash = this.obtainLatestBlock();
    block = block.hash();
    this.blocks.push(block);
  }
  blockHeight() {
    return this.blocks.length;
  }
}

module.exports = Blockchain;
