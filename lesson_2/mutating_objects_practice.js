// Q1
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

/*
The above logs:
'Hello from the function scope!'
'Hello from the global scope!'

Only the value of primitives is passed to functions.
On line 4, local variable message is reassigned to a new string value.
Global variable message on line 1 still stores the same value as before;
*/



// Q2
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);

/* 
The above logs:
'Greetings from the function scope!'
'Greetings from the function scope!'

Demonstrates that reference to object is passed to functions, and objects
are mutable. 

On line 28, the object property is modified (stores a different string 
value). Since both the function's local variable 'obj' and the global 
variable 'myObj' reference the same object, both variables see the same
change
*/



// Q3
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);

/*
The above logs:
'Hello from the function scope!
'Hello from the function scope!

func() can't find a local variable match for variable 'message', therefore
looks in the global scope for the variable and reassigns a new string
value to it.
*/



// Q4
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj === obj);

/*
The above logs:
false, because they are different variables storing different values
true, because they are different variables storing the same reference to the 
same object
*/



// Q5
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

/*
On line 106, animal is reassigned a different pointer that stores
reference to a different object.
*/