// classical
function Parent(arg) {
  this.val = arg;
}

Parent.prototype.get = function() {
  console.log(this.val);
};

let child = new Parent(2);
// child.get();

// console.log(child.__proto__ === Parent.prototype);
// console.log(child.prototype);
// console.log(child.constructor === Parent);
// console.log(Parent.__proto__ === Function.prototype);
console.log(Parent.prototype);
// console.log(Parent.constructor === Function);
console.log(Parent.prototype.constructor === Parent);

// let obj = {};
// console.log(obj.constructor);
// console.log(obj.__proto__);
// console.log(obj.prototype);
// console.log(Object.constructor);
// console.log(Object.__proto__);
// console.log(Object.prototype);
