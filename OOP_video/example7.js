function UserCreator(name) {
  this.name = name;
}

UserCreator.prototype.sayName = function() {
  console.log(`I'm ${this.name}`);
};

function PaidUserCreator(paidName, balance) {
  UserCreator.call(this, paidName);
  this.balance = balance;
}

// --> PROCESS TO SET-UP A SUBCLASS

// Step 1: set up inheritance chain
console.log(PaidUserCreator.__proto__ === Function.prototype);  // true
console.log(PaidUserCreator.prototype.hasOwnProperty('constructor'));  // true
console.log(PaidUserCreator.prototype.constructor === PaidUserCreator);  // true - this is what we want
console.log(PaidUserCreator.prototype.__proto__ === Object.prototype);  // true - but we want it to point to UserCreator.prototype to establish inheritance
PaidUserCreator.prototype = Object.create(UserCreator.prototype); // creates new object and sets its .__proto__ to UserCreator.prototype
// PaidUserCreator.prototype.__proto__ = UserCreator.prototype;  // works too, but poorer performance
console.log(PaidUserCreator.prototype.__proto__ === UserCreator.prototype);  //true

// Step 2: create 'constructor' property on the new prototype object
console.log(PaidUserCreator.prototype.hasOwnProperty('constructor'));  // false - the new object created doesn't have the property
console.log(PaidUserCreator.prototype.constructor === UserCreator);  // true - looked up inheritance change for the property
PaidUserCreator.prototype.constructor = PaidUserCreator;  // create the property and assign it back to PaidUserCreator

// --> DONE!

console.log(PaidUserCreator.prototype === UserCreator.prototype);  // false

PaidUserCreator.prototype.increase = function() {
  this.balance += 1;
};

const user1 = new UserCreator("Dean");
const paidUser1 = new PaidUserCreator("Ryan", 3);

