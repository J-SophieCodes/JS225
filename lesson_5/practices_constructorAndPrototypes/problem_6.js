let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};
// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true

/*
This pattern of "chainable" method invocation on an object requires methods
defined on the prototype to always return the context object (in this case,
  ninjaA and ninjaB).
*/