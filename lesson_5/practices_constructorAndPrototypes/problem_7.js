let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

let ninjaB = new ninjaA.constructor;
// let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true