let parentObj = {a:1, b:2};

let childObj = Object.create(parentObj);

console.log(childObj);  // new empty object
console.log(childObj.a);  // inherits from parentObj

// console.log(childObj.__proto__ === parentObj);  // true
// console.log(childObj.__proto__);  // parentObj
// console.log(childObj.constructor); // Object

// console.log(parentObj.__proto__ === Object.prototype);
// console.log(parentObj.constructor); // Object
