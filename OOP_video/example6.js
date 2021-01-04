function UserCreator(name, points) {  // when invoked with 'new', an object is created and referenced by 'this' within the new exec context
  this.name = name;
  this.points = points;  // other than these properties, object prototype is also set to the function prototype
}  // implicitly returns 'this'

UserCreator.prototype.add = function() {
  this.points += 1;
}

const user = new UserCreator('Ryan', 3);  // creates new execution context

console.log(user.__proto__ === UserCreator.prototype);
console.log(user.constructor === UserCreator);

console.log(UserCreator.prototype.__proto__ === Object.prototype);
console.log(UserCreator.__proto__ === Function.prototype);