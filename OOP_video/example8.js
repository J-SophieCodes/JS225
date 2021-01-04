class UserCreator {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`I'm ${this.name}`);
  }
}

class PaidUserCreator extends UserCreator {  // 'extends' sets .prototype.__proto__ to UserCreator.prototype
  constructor(paidName, balance) {
    super(paidName);
    this.balance = balance;
  }

  increase() {
    this.balance += 1;
  }
}

console.log(typeof UserCreator === 'function');
console.log(typeof PaidUserCreator === 'function');

const user1 = new UserCreator("Dean");
console.log(user1.__proto__ === UserCreator.prototype);
console.log(user1.constructor === UserCreator);

const paidUser1 = new PaidUserCreator("Ryan", 3);
console.log(paidUser1.__proto__ === PaidUserCreator.prototype);
console.log(paidUser1.constructor === PaidUserCreator);

console.log(PaidUserCreator.prototype.__proto__ === UserCreator.prototype);
console.log(UserCreator.prototype.__proto__ === Object.prototype);

console.log(PaidUserCreator.prototype === UserCreator.prototype); // false