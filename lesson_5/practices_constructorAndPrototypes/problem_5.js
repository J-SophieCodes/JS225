let ninja;

function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {         // points function prototype to a different object
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // not defined within the object prototype