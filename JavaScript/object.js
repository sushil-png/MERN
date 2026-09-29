/*
what is object in javascript
An object in JavaScript is a collection of key-value pairs, where each key (also called a property) is a string (or symbol) and each value can be any data type, including other objects or functions. Objects are used to represent real-world entities and their attributes, allowing you to group related data and functionality together.

For example, instead of storing a student's information separately:

let studentName = "Rahul";
let studentAge = 20;
let studentCourse = "BCA";

// You can group this information into an object:
let student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};
An object can also have methods, which are functions that are associated with the object. For example:
let student = {
    name: "Rahul",
    age: 20,
    course: "BCA",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

Object Literals:
The most common way to create an object in JavaScript is by using object literals. An object literal is a comma-separated list of key-value pairs enclosed in curly braces {}. For example:
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

objects.key() method:
The Object.keys() method is a built-in JavaScript function that returns an array of a given object's own enumerable property names (keys). It allows you to retrieve the keys of an object in a convenient way.

object.values() method:
The Object.values() method is a built-in JavaScript function that returns an array of a given object's own enumerable property values. It allows you to retrieve the values of an object in a convenient way.

object.entries() method:
The Object.entries() method is a built-in JavaScript function that returns an array of a given object's own enumerable property [key, value] pairs. It allows you to retrieve both the keys and values of an object in a convenient way.

const student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};

console.log(Object.keys(student));

Output:

["name", "age", "course"]
Object.values()

Returns values.

console.log(Object.values(student));

Output:

["Rahul", 20, "BCA"]
Object.entries()

Returns key-value pairs.

console.log(Object.entries(student));

Output:

[
    ["name", "Rahul"],
    ["age", 20],
    ["course", "BCA"]
]
Practical Example
const user = {
    name: "Rahul",
    age: 22,
    city: "Delhi"
};

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

Object Destructuring:
const { name, age, city } = user;
console.log(name, age, city);

const student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};

const name = student.name;
const age = student.age;
const course = student.course;

console.log(name, age, course);

const { name, age, course } = student;
console.log(name, age, course);

Renaming Variables During Destructuring:
const { name: studentName, age: studentAge } = student;
console.log(studentName, studentAge);

Defult Values During Destructuring:
const { name, age, course = "MCA" } = student;
console.log(name, age, course);

Array Destructuring:
const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, secondSkill, thirdSkill] = skills;
console.log(firstSkill, secondSkill, thirdSkill);

skipping Values During Array Destructuring:
const skills = ["HTML", "CSS", "JavaScript"];
const [firstSkill, , thirdSkill] = skills;
console.log(firstSkill, thirdSkill);

Spread operator:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

shallow Copying:
const original = { a: 1, b: 2 };
const copy = { ...original };
copy.a = 10;

console.log(original);
console.log(copy);

Template literals with objects:
const user = { name: "Rahul", age: 22 };
console.log(`Name: ${user.name}, Age: ${user.age}`);

Practice Questions
Q1. Create an object with the following properties: name, age, and city. Then, use object destructuring to extract each property into a separate variable.
Q2. Given an array of numbers, use array destructuring to assign the first two elements to variables and the rest to another array.
Q3. Create two objects and merge them into a new object using the spread operator.
Q4. Given an object, use Object.keys(), Object.values(), and Object.entries() to print the keys, values, and key-value pairs respectively.
Q5. Create an object with a method that returns a formatted string using template literals.
Q6. Create an object with nested objects and use destructuring to extract values from the nested objects.
Q7. Create an object with a method that returns a formatted string using template literals.

*******************************************************
Constructors:
In JavaScript, a constructor is a special function that is used to create and initialize objects. Constructors are typically used with the new keyword to create instances of an object.

syntax:
function ConstructorName(parameters) {
    // Initialization code
}
example:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1.name, person1.age);

"this" refers to the object being created when called with new;

function Student(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log(`My name is ${this.name}`);
    };
}
const student1 = new Student("Rahul", 20);
student1.introduce(); // Output: My name is Rahul

*******************************************************
javascript classes:
In JavaScript, classes are a way to create objects with a specific structure and behavior. They are a syntactic sugar over the existing prototype-based inheritance.

syntax:

class ClassName {
    constructor(parameters) {
        // Initialization code
    }
    methodName() {
        // Method code
    }
}
example:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}`);
    }
}
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

person1.introduce(); // Output: My name is John
person2.introduce(); // Output: My name is Jane

constructor is a special method for creating and initializing an object created with a class. There can only be one constructor method in a class. A SyntaxError will be thrown if the class contains more than one occurrence of a constructor method.

syntax:
class ClassName {
    constructor(parameters) {
        // Initialization code
    }
}

questions:
1.Create a Car class.

Properties:

brand
model
price

Method:

displayDetails()

2. Create a Rectangle class.
Properties:
width
height
Method:
calculateArea()

3. Create a BankAccount class.
Properties:
accountNumber
accountHolder
balance
Method:
deposit(amount)
withdraw(amount)

4. Create a Student class.
Properties:
name
age
grade
method:
introduce()
**********************************************************
prototype:
In JavaScript, every object has a prototype. A prototype is an object from which other objects inherit properties and methods. When you create a new object, it can access properties and methods defined in its prototype.


*/