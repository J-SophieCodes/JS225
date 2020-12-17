let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // creates new instance of Foo, saved into foo
// executes line 10 and logs 2

foo.bar(); // logs 2
Foo(); // without the 'new' keyword, 'this' points to the global obj
// function executes, variable a and method bar defined to the global obj
// line 10 executes and logs 2
// since function has no explicit return value, line 17 returns undefined


obj = {}; // assigns empty object to obj
Foo.call(obj);  // invokes Foo within the context of obj; 'this' points to obj
// executes line 10 and logs 2
obj.bar();  // logs 2

console.log(this.a); // 'this' references the global object, therefore logs 2