// function createObject(obj) {
//   let newObj = {};
//   Object.setPrototypeOf(newObj, obj);
//   return newObj;
// }

function createObject(obj) {
  function Type() {}
  Type.prototype = obj;
  return new Type();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true