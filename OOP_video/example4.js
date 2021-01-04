const arr = ['a', 'b'];
// console.log(arr.hasOwnProperty(0));

// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.constructor === Array);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log(arr.hasOwnProperty('a'));  // false

// console.log(Array.from(arguments));

function abc() {};
let def = new abc();

// console.log(typeof Array);  // function
// console.log(typeof Object); // function
// console.log(typeof Function);  // function
// console.log(typeof abc);  // function
// console.log(typeof def);  // object
// console.log(typeof arr); // object


// console.log(Array.__proto__ === Function.prototype);
// console.log(Array.constructor === Function);

// console.log(Function.__proto__ === Function.prototype);
// console.log(Function.constructor === Function);

// console.log(Object.__proto__ === Function.prototype);
// console.log(Object.constructor === Function);

console.log(typeof Array.prototype);  // object
console.log(typeof Object.prototype); // object
console.log(typeof Function.prototype);  // function