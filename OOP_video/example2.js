const func = function() {};
func.call();

console.log(func.__proto__ === Function.prototype);  // true
console.log(func.constructor === Function);  // true