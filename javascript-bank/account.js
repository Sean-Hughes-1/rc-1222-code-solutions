/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var balance = 0;
  this.transactions.forEach(transaction => {
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else if (transaction.type === 'withdrawal') {
      balance -= transaction.amount;
    }
  });
  return balance;
};
