// Write a function that returns the object on a given object's prototype chain
// where a property is defined.
function getDefiningObject(object, propKey) {
  // if (object.hasOwnProperty(propKey)) {
  //   return object;
  // } else if (Object.getPrototypeOf(object)) {
  //   return getDefiningObject(Object.getPrototypeOf(object), propKey);
  // } else {
  //   return null;
  // }

  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null