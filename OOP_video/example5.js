const userFunctions = {
  add: function() {this.points += 1},
  login: function() {console.log("Logged in!")},
};

function userCreator(name, points) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.points = points;
  return newUser;
}

const user = userCreator('Ryan', 3);

console.log(user.constructor === Object);
console.log(user.__proto__ === userFunctions);

console.log(userFunctions.constructor === Object);
console.log(userFunctions.__proto__ === Object.prototype);