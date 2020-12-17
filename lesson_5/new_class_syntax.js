// achieves the same thing as the classical style
class UserCreator {
  constructor (name) {
    this.name = name;
  }

  sayName() {
    console.log(`I am ${this.name}`);
  }
}

class PaidUserCreator extends UserCreator {  // subclass
  constructor (name, balance) {
    super(name);
    this.balance = balance;
  }

  increase() {
    this.balance += 1;
  }
}

console.log(typeof UserCreator); // function
console.log(typeof PaidUserCreator); // function

console.log(PaidUserCreator.__proto__ === UserCreator); // true

const user1 = new UserCreator('Dean');
console.log(user1.__proto__ === UserCreator.prototype);
console.log(user1.constructor === UserCreator);

const paidUser1 = new PaidUserCreator('Ryan', 3);
console.log(paidUser1.__proto__ === PaidUserCreator.prototype);
console.log(paidUser1.constructor === PaidUserCreator);

console.log(PaidUserCreator.prototype.__proto__ === UserCreator.prototype);
console.log(UserCreator.prototype.__proto__ === Object.prototype);