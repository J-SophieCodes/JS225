let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function Type() {}
  Type.prototype = this;
  return new Type();
}

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true