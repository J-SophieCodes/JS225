const obj = {
  monkey: 'yep',
};

console.log(typeof obj === 'object');  // true
console.log(typeof obj === 'function');  // false
console.log(typeof Object);  // 'function'

console.log(obj.hasOwnProperty('monkey'));  // true
console.log(obj.hasOwnProperty('elephance'));  // false

console.log(obj.__proto__ === Object.prototype);  // true
// An object prototype (.__proto__) is what the current object inherits from
// A function prototype (.prototype) is a hidden property on the object form of functions

console.log(obj.constructor === Object);  // true
// The constructor property refers to the Object constructor function that created the instance

console.log(obj.prototype);  // undefined - plain objects don't have this property