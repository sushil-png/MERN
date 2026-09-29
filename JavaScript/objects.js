/*
objects is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.
let student = {
  name: "John",
  age: 20,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
    console.log(student.name); // Output: John
    console.log(student.age); // Output: 20
    student.greet(); // Output: Hello, my name is John


Object constructor:
let user = new Object();
let user = {};//object literal syntax

delete operator:
The delete operator is used to remove a property from an object. It takes the form of delete object.property or delete object["property"].

we can also use multiword property names in objects by enclosing them in quotes. For example:
let person = {
  "first name": "John",
  "last name": "Doe"
};

the last property in the list may end with a comma, which is known as a trailing comma. This is allowed in JavaScript and can make it easier to add new properties to the object later on.

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];



let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;



let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] );

the dot notation cannot be used in a similar way with variables, because a variable is evaluated as an expression, and the dot requires a literal name. For instance, user.key would look for a property literally named "key", not the value of the variable key.

computed properties allow you to use an expression in square brackets [] as the property name when creating an object. The expression is evaluated, and the result is used as the property name.
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"


// Property value shorthand
function makeUser(name, age) {
  return {
    name:name, // same as name: name
    age:age  // same as age: age
  };
}
  let user = makeUser("John", 30);
  console.log(user.name); // John


  property names are strings, but we can also use numbers as property names. They are automatically converted to strings.
  Property names can be any string, including an empty string. The following example shows how to create an object with a property that has an empty string as its name:
  let obj = {
    "": "empty string"
  };
  console.log(obj[""]); // Output: "empty string" 

  property name limitations:
  As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

  But for an object property, there’s no such restriction:

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3
};

console.log( obj.for + obj.let + obj.return );

property existence test, "in" operator

Reading a non-existing property just returns undefined

IN operator:
syntax:
"key" in object

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user );

let obj = {
  test: undefined
};

alert( obj.test ); // it's undefined, so - no such property?

alert( "test" in obj );

The for..in loop:
for (key in object) {
  // executes the body for each key among object properties
}

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
// Summary:
Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

Property keys must be strings or symbols (usually strings).
Values can be of any type.
To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
Additional operators:

To delete a property: delete obj.prop.
To check if a property with the given key exists: "key" in obj.
To iterate over an object: for (let key in obj) loop.

Questions:
1.Write the code, one line for each action:

a.Create an empty object user.
b.Add the property name with the value John.
b.Add the property surname with the value Smith.
c.Change the value of the name to Pete.
d.Remove the property name from the object.

2.Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

3.
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

4.
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.


Object References and Copying
Objects are stored and copied “by reference”. That means that if we have a variable storing an object, then another variable can be set equal to it. Both variables will then reference the same object.

example:
let user = { name: "John" };
let admin = user; // copy the reference
console.log( admin.name ); // John
console.log( user.name ); // John

A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.

comparison by reference:
let a = {};
let b = a;
console.log( a === b ); // true
console.log( a == b ); // true

let a = {};
let b = {};
console.log( a === b ); // false (two independent objects)
console.log( a == b ); // false (two independent objects)

Const objects can be modified
An important side effect of storing objects as references is that an object declared as const can be modified.

For instance:
const user = {
  name: "John"
};
user.name = "Pete"; // (*)
alert(user.name); // Pete

It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the const user gives an error only if we try to set user=... as a whole.

// cloning and merging, Object.assign
We can use Object.assign to copy values of all properties from one or more source objects to a target object. It will return the target object.

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object


Object.assign:
The syntax is:

Object.assign(dest, ...sources)
The first argument dest is a target object.
Further arguments is a list of source objects.

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

If the copied property already exists in the destination object, it will be overwritten.

let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

Here it copies all properties of user into a new empty object and returns it.

Spread syntax:
The spread syntax ... allows us to create a new object by copying properties from an existing one.

let user = {
  name: "John",
  age: 30
};

let clone = { ...user };

alert(clone.name); // John
alert(clone.age); // 30


Nested cloning:
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, see the result from the other one

structuredClone:
The structuredClone() method creates a deep clone of a given value using the structured clone algorithm. It can clone objects, arrays, Map, Set, Date, RegExp, Blob, FileList, ImageData, and other built-in types. It also supports circular references.

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, the other one is not affected

garbage collection:
JavaScript uses garbage collection to automatically manage memory. When an object is no longer reachable, it becomes eligible for garbage collection, and the memory it occupies can be reclaimed.


*/
