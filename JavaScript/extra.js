/*

Spread operator is used to expand an iterable (like an array or string) into individual elements. It can be used in function calls, array literals, and object literals.

let arr1 = [1, 2, 3];
...arr1 equals 1, 2, 3;



function sum(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

extra values will be ignored if the function expects fewer arguments than provided. If the function expects more arguments than provided, the missing arguments will be undefined.

Rest operator is used to collect multiple elements into a single array. It is used in function parameters to gather remaining arguments into an array.

function sum(a, b, ...rest) {
  return rest.reduce((acc, val) => acc + val, a + b);
}
Rest operator must be the last parameter in the function definition. It collects all remaining arguments into an array.

returning object using arrow function
let createUsers = name=>({firstName:"sushil"});
console.log(createUser());

Factory function is a function that returns an object. It can be used to create multiple instances of similar objects.

function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  let user1 = createUser("John", 30);
  user1.greet(); // Output: Hello, my name is John and I am 30 years old.
}

Constructor function is a special type of function that is used to create objects. It is called with the new keyword and initializes the properties of the object.
function User(name, age) {
  this.name = name;
  this.age = age;
}
let user1 = new User("John", 30);

The new Operator creates a new object, sets the this value to that object, and returns the object.

when a function is called with new, it does the following:
1. Creates a new empty object.
2. Sets the this value to the new object.
3. Executes the function with the new object as the context.
4. Returns the new object.


Default function properties and methods:
1. length: Returns the number of parameters expected by the function.
2. name: Returns the name of the function.
3. prototype: An object that is used to build the prototype chain for instances created by the function.
4. call(): Invokes the function with a specified this value and arguments provided individually.
5. apply(): Invokes the function with a specified this value and arguments provided as an array.
6. bind(): Creates a new function that, when called, has its this keyword set to the provided value.
7. toString(): Returns a string representation of the function's source code.
8. toLocaleString(): Returns a string representation of the function's source code, localized according to the current locale.

All primitive values (undefined, null, boolean, number, string, symbol) are immutable. This means that their values cannot be changed once they are created. However, objects (including arrays and functions) are mutable, meaning their properties and elements can be modified.

mutable means that the value can be changed after it is created. For example, you can change the properties of an object or the elements of an array.

immutable means that the value cannot be changed after it is created. For example, you cannot change the value of a number or a string once it is created.

Then how the variable value changes if it is immutable? 
The variable itself can be reassigned to a new value, but the original value remains unchanged. For example:
let x = 5; // x is assigned the value 5
x = 10; // x is now reassigned to the value 10, but the original value 5 is unchanged

*/