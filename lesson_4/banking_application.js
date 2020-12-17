function makeBank() {
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];
    let log = (type, amount) => transactions.push({type, amount});
    return {
      number() { return number; },
      balance() { return balance; },
      transactions() { return transactions },
  
      deposit(amount) {
        log('deposit', amount);
        balance += amount;
        return amount;
      },
  
      withdraw(amount) {
        if (balance < amount) {
          amount = balance;
        }
  
        log('withdrawal', amount);
        balance -= amount;
        return amount;
      },
    };
  }

  let accounts = [];
  return {
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}

let bank = makeBank();
console.log(bank.accounts);
// undefined