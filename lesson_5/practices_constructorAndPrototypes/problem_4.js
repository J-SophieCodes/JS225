let ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja(); // creates new instance of Ninja

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); //logs true

/*
Even though the swingSword method is defined on the prototype after the ninja
object is created, the prototype chain lookup happens when the swingSword
method is called on the object, and it can be found.
*/