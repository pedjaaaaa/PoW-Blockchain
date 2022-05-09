class UTXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
        // this.senderPublicKey = senderPublicKey;
    // this.recieverPublicKey = recieverPublicKey;
  }
}

module.exports = UTXO;
