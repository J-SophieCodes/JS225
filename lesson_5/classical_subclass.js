function UserCreator(name) {
  this.name = name;
}

UserCreator.prototype.sayName = function() {
  console.log(`I am ${this.name}`);
};

function PaidUserCreator(name, balance) {
  UserCreator.call(this, name);
  this.balance = balance;
}

PaidUserCreator.prototype.increase = function() {
  this.balance += 1;
};

// Right now, PaidUserCreator doesn't inherit the methods from UserCreator
console.log(PaidUserCreator.prototype.constructor);  // PaidUserCreator
console.log(PaidUserCreator.prototype.__proto__.constructor);  // Object
console.log(PaidUserCreator.prototype.__proto__ === Object.prototype);  // true

// In order to inherit from UserCreator,
PaidUserCreator.prototype = Object.create(UserCreator.prototype);  // creates a {} and sets its __proto__ to UserCreator.prototype
// Alternative would be to set PaidUserCreator.prototype.__proto__ = UserCreator.prototype; But not good for performance.
console.log(PaidUserCreator.prototype.__proto__ === UserCreator.prototype);  // true
console.log(PaidUserCreator.prototype.__proto__.constructor);  // UserCreator
console.log(PaidUserCreator.__proto__ === UserCreator); // false - compare this to the new class syntax

// But now,
console.log(PaidUserCreator.prototype.constructor);  // UserCreator
// We need to fix this!
PaidUserCreator.prototype.constructor = PaidUserCreator;
console.log(PaidUserCreator.prototype.constructor);  // PaidUserCreator

// NOTE:
console.log(PaidUserCreator.prototype === UserCreator.prototype); // false! different objects!
// PaidUserCreator.prototype.__proto__ allows us to inherit from UserCreator

const user1 = new UserCreator('Dean');
const paidUser1 = new PaidUserCreator('Ryan', 3);


