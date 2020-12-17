function greet(arg1, arg2) {
  console.log(arg1[0].toUpperCase() + arg1.slice(1) + ', ' + arg2 + '!');
}

greet('howdy', 'Joe');
// Howdy, Joe!
greet('good morning', 'Sue');
// Good morning, Sue!

function partial(func, arg1) {
  return function(arg2) {
    return func(arg1, arg2);
  };
}

let sayHello = partial(greet, 'hello');
let sayHi = partial(greet, 'hi');

sayHello('Brandon');
// Hello, Brandon!
sayHi('Sarah');
// Hi, Sarah!