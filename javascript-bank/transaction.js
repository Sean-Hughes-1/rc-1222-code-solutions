/* exported Transaction */
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.getType = function () {
  return this.type;
};

Transaction.prototype.getAmount = function () {
  return this.amount;
};
