/* Function in JavaScript 
A function is a reusable block of code designed to perform a particular task.

Input --> function -->output

Function Declaration:
A function declaration defines a named function. It consists of the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.

syntax:
function functionName(parameter1, parameter2, ...) {
    // code to be executed
}

Function call:
To execute a function, you call it by its name followed by parentheses. If the function has parameters, you pass the required arguments inside the parentheses.


function declaration:
function greet(name) {
    console.log("Hello " + name);
}

greet("Rahul");
greet("Aman");
greet("Priya");


Parameter: variable written in the function definition.

Argument: actual value passed during function call.
name-->parameter
Rahul, Aman, Priya-->arguments

function expression:
A function expression defines a function as part of a larger expression. It can be anonymous (without a name) or named. Function expressions are often assigned to variables.

syntax:
const functionName = function(parameter1, parameter2, ...) {
    // code to be executed
}

calling function expression:
const greet = function(name) {
    console.log("Hello " + name);
};
greet("Rahul");

Arrow function:
Arrow functions are a more concise way to write function expressions. They use the => syntax and do not have their own this context.

syntax:
const functionName = (parameter1, parameter2, ...) => {
    // code to be executed
};

const add = (a, b) => {
    return a + b;
};

even shorter version:
const add = (a, b) => a + b;


One parameter
You can write:
const square = (n) => {
    return n * n;
};

Or:
const square = n => {
    return n * n;
};

No parameters
const greet = () => {
    console.log("Hello");
};

Implicit return

This is very important.

const add = (a, b) => a + b;

The result is automatically returned.

Equivalent to:

const add = (a, b) => {
    return a + b;
};

But:

const add = (a, b) => {
    a + b;
};

does not return the value.

Questions:
1. What is the difference between a function declaration and a function expression?
2. What is an arrow function and how does it differ from a regular function?
3. When should you use implicit return in an arrow function?
4.Convert these into arrow functions.
   function square(n) {
    return n * n;
}
    let square =(n)=>{
        return n * n;
        }
   function greet(name) {
    console.log("Hello " + name);
}


5.What happens if arguments are missing?
function add(a, b) {
    console.log(a);
    console.log(b);
}
add(10);

Output:
10
undefined

JavaScript does not automatically throw an error just because the argument is missing.

Extra arguments
function add(a, b,...c) {
    console.log(a + b);
}

add(10, 20, 30, 40,"hello");
Output:// 30
a gets 10.
b gets 20.

The extra arguments are not assigned to a or b.

Default parameters
You can assign default values to parameters in case they are not provided during the function call.
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet(); // Output: Hello Guest
greet("Rahul"); // Output: Hello Rahul

Rest parameters
Rest parameters allow you to represent an indefinite number of arguments as an array. You can use the rest parameter syntax (...) to collect all remaining arguments into a single array.

syntax:
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

Sum of unlimited numbers
function sum(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

Rest with normal parameters
function student(name, ...marks) {
    console.log(name);
    console.log(marks);
}

student("Rahul", 80, 90, 85);

return statement
The return statement is used to specify the value that a function should return when it is called. When a return statement is executed, the function stops executing and returns the specified value to the caller.

function test() {
    return 10;

    console.log("Hello");
}

Scope of variables
The scope of a variable determines where it can be accessed or modified in the code.

There are three types of scope in JavaScript:
1. Global Scope: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.

example:
let name = "Rahul";

function greet() {
    console.log(name);
}

greet();


2. Function Scope: Variables declared within a function have function scope and can only be accessed within that function.

example:
function greet() {
    let name = "Rahul";
    console.log(name);
}
greet();
console.log(name); // This will throw an error because name is not defined in the global scope.

3. Block Scope: Variables declared with let or const within a block (e.g., inside an if statement or loop) have block scope and can only be accessed within that block.

example:
if (true) {
    let x = 10;
    console.log(x); // This will print 10
}
console.log(x); // This will throw an error because x is not defined in the global scope

var vs let vs const

This is extremely important for scope.

var is function-scoped, meaning it is accessible throughout the entire function in which it is declared. If declared outside of any function, it has global scope.


let and const are block-scoped, meaning they are only accessible within the block (e.g., inside an if statement or loop) in which they are declared.


let x = 10;

function test() {
    let y = 20;

    console.log(x);
    console.log(y);
}

test();

scope chain: If a variable is not found in the current scope, JavaScript looks for it in the outer scope, and so on, until it reaches the global scope. If the variable is not found in any scope, it will result in a ReferenceError.

let x = 10;

function outer() {
    let y = 20;

    function inner() {
        let z = 30;

        console.log(x);
        console.log(y);
        console.log(z);
    }

    inner();
}
outer();


Lexical Scope:
Lexical scope means scope is determined by where code is written, not where a function is called.

let x = "global";

function outer() {

    let x = "outer";

    function inner() {
        console.log(x);
    }

    inner();
}

outer();

let university = "IIT Bhilai";

function student() {

    let course = "CSE";

    function display() {

        let name = "Sushil";

        console.log(name);
        console.log(course);
        console.log(university);
    }

    display();
}

student();

variable shadowing: When a variable declared within a certain scope (e.g., a function) has the same name as a variable in an outer scope, the inner variable "shadows" the outer variable. This means that within the inner scope, the inner variable takes precedence over the outer variable.

let x = "global";

function outer() {
    let x = "outer";

    function inner() {
        let x = "inner";
        console.log(x);
    }

    inner();
}

outer();
Nested shadowing: When a variable is shadowed in multiple nested scopes, the innermost variable takes precedence over all outer variables with the same name.

let x = 1;

function outer() {

    let x = 2;

    function inner() {

        let x = 3;

        console.log(x);
    }

    inner();
}

outer();

Naming collisions: When a variable in an inner scope has the same name as a variable in an outer scope, it can lead to confusion and unexpected behavior. It's generally a good practice to use unique variable names to avoid such collisions.

let user = "Sushil";

function test() {
    let user = "Rahul";

    console.log(user);
}

test();



Hosting: In JavaScript, variable and function declarations are "hoisted" to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

function declaration hoisting:
greet("Rahul");
function greet(name) {
    console.log("Hello " + name);
}
    Hoisting is a behavior of JavaScript's execution process. Don't imagine that the source code is physically moved.

var hoisting:
console.log(x); // Output: undefined
var x = 10;

let and const

Consider:

console.log(x);
let x = 10;

This gives:
ReferenceError

Similarly:
console.log(x);
const x = 10;

gives a ReferenceError.

Temporal Dead Zone (TDZ): The period between the start of the block and the point where the variable is declared is called the Temporal Dead Zone. During this time, accessing the variable will result in a ReferenceError.

let and const declarations are hoisted in the language's execution model, but they cannot be accessed before their declaration is reached. The interval is commonly called the Temporal Dead Zone (TDZ)

Function Declaration vs Function Expression Hoisting

This is a very important question.

Function declaration
greet();

function greet() {
    console.log("Hello");
}

Works.

Function expression
greet();

const greet = function () {
    console.log("Hello");
};

Does not work.
Because greet is a const variable and cannot be accessed before its initialization.

Arrow Function Hoisting
Consider:

add(10, 20);

const add = (a, b) => {
    return a + b;
};

This gives a ReferenceError.

An arrow function assigned to const behaves with respect to the variable declaration like a const variable.

let x = 10;

{
    console.log(x);

    let x = 20;
}

let x = 100;

function test() {

    console.log(x);

    let x = 200;
}

test();

Function Declaration Hoisting

Function declarations are hoisted.

Example:

greet();

function greet() {
    console.log("Hello");
}

Output:

Hello

Function Declaration vs Function Expression

This is extremely important.

Function declaration
greet();

function greet() {
    console.log("Hello");
}

Works.

Function expression with var
greet();

var greet = function() {
    console.log("Hello");
};

This gives:

TypeError

Why?

Conceptually:

var greet;

greet();

greet = function() {
    console.log("Hello");
};

At the time of calling:

greet();

Function Expression with let
greet();

let greet = function() {
    console.log("Hello");
};

This produces:

ReferenceError

because greet is in the TDZ.
question:
1.
greet();

function greet() {
    console.log("Welcome");
}

2.var x = 10;

function test() {

    console.log(x);

    var x = 20;

    console.log(x);
}

test();

3.let x = 10;

function test() {

    console.log(x);

    let x = 20;
}

test();

devtools:
 1. Open the browser's developer tools (usually by pressing F12 or right-clicking on the page and selecting "Inspect").
 2. Go to the "Console" tab.
 3. Type the JavaScript code you want to test and press Enter to execute it.
 4. You can also write multi-line code by pressing Shift + Enter to create a new line without executing the code.
 5. To clear the console, you can click the "Clear Console" button (usually represented by a trash can icon) or use the keyboard shortcut Ctrl + L (Cmd + K on Mac).
 6. You can view any errors or logs generated by your code in the console, which can help you debug issues.
 ...
 debugging:
 1. Use console.log() statements to print variable values and track the flow of your code.
 2. Set breakpoints in your code by clicking on the line number in the "Sources" tab of the developer tools. This will pause execution at that line, allowing you to inspect variables and step through the code.
 3. Use the "Step Over", "Step Into", and "Step Out" buttons in the developer tools to navigate through your code while debugging.
 4. Inspect the call stack to see the sequence of function calls that led to the current point in your code.
 5. Use the "Watch" feature to monitor specific variables and expressions as you step through your code.
 

 breakpoints:
 1. Open the developer tools and go to the "Sources" tab.
 2. Navigate to the JavaScript file you want to debug.
 3. Click on the line number where you want to set a breakpoint. A blue marker will appear, indicating that a breakpoint has been set.
 4. When the code execution reaches that line, it will pause, allowing you to inspect variables and step through the code.
 5. You can remove a breakpoint by clicking on the blue marker again.
 ***********************************************
 step through code:
 1. When the code execution is paused at a breakpoint, use the "Step Over" button (usually represented by an arrow curving over a line) to execute the current line and move to the next one.
 2. Use the "Step Into" button (usually represented by an arrow pointing down into a line) to enter a function call and debug its code.
 3. Use the "Step Out" button (usually represented by an arrow curving out of a line) to exit the current function and return to the calling function.
 4. Continue using these buttons to navigate through your code and inspect its behavior.

let university = "IIT Bhilai";

function student() {

    let course = "CSE";

    function display() {

        let name = "Sushil";

        debugger;

        console.log(name);
        console.log(course);
        console.log(university);
    }

    display();
}

student();


question:
 n  


*************************************************************
this is a very important concept.
The this keyword in JavaScript refers to the object that is executing the current function. Its value is determined by how a function is called, and it can vary depending on the context.

const student = {
    name: "Sushil",

    showName: function() {
        console.log(this.name);
    }
};

student.showName();

function showArguments() {
    console.log(arguments);
}

showArguments(10, 20, 30);

arrow function does not have its own this or arguments object. Instead, it inherits them from the enclosing scope.

 ******************************************
Nested functions and closures:
A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created whenever a function is defined inside another function.
example:
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable);
        console.log(innerVariable);
    };
}

const inner = outerFunction("Hello");
inner("World");

function sayHiBye(firstName, lastName) {

  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

function calculator(x) {

    function multiply(y) {
        return x * y;
    }

    console.log(multiply(5));
}

calculator(10);

function outer(x) {

    function inner(x) {
        console.log(x);
    }

    inner(20);
}

outer(10);

function calculate(a, b) {

    function add() {
        return a + b;
    }

    return add();
}

console.log(calculate(10, 20));

function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

const result = outer();

result();



function createMultiplier(number) {

    function multiply(value) {
        return number * value;
    }

    return multiply;
}

const double = createMultiplier(2);
console.log(double(5)); 

closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created whenever a function is defined inside another function.

A closure happens when a function remembers and can access variables from its surrounding lexical scope even after the outer function has finished executing.
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}
let counter = makeCounter();
console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() ); // 2
console.log( counter() ); // 3



function createCounter() {

    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());

function createBankAccount(balance) {

    function getBalance() {
        return balance;
    }

    function deposit(amount) {
        balance += amount;
    }

    return {
        getBalance,
        deposit
    };
}

const account = createBankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500

function outer() {

    if (true) {

        const inner = function() {
            console.log("Hello");
        };

        inner();
    }
}
outer();

function calculator() {

    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function calculate(a, b) {

        let sum = add(a, b);
        let product = multiply(a, b);

        return sum + product;
    }

    console.log(calculate(2, 3));
}

calculator();


function registerUser(username, password) {

    function isValidUsername() {
        return username.length >= 3;
    }

    function isValidPassword() {
        return password.length >= 8;
    }

    if (!isValidUsername()) {
        return "Invalid username";
    }

    if (!isValidPassword()) {
        return "Invalid password";
    }

    return "Registration successful";
}

console.log(registerUser("abc", "12345678"));


A higher-order function is a function that:

accepts another function as an argument, or
returns a function.

function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();

fn();


function outer() {

    function inner() {
        return 10;
    }

    return inner();
}
Nested functions are created during the execution of the outer function. The inner function has access to the variables of the outer function, even after the outer function has finished executing. This is what creates a closure.


2.closure allows the inner function to access variables from the outer function even after the outer function has finished executing.
question:
1. What is a closure in JavaScript?
2. How does a closure work?
3. What are some common use cases for closures?









 **************************************
The function can be called before its textual declaration.
question:
1.What is function?
2.How do you define a function in JavaScript?
3.How do you call a function in JavaScript?
4.What is parameter and argument in the context of functions?
5.What is the difference between a function declaration and a function expression?
6.what is the difference between return and console.log in a function?
7.what is default parameter in a function?
8.what is rest parameter in a function?
9.what does ...numbers mean in the context of a function parameter?
10.what is the difference between var, let and const in terms of scope?
11.what is hoisting in JavaScript?
12.what is the difference between function declaration and function expression in terms of hoisting?
13.what is the temporal dead zone (TDZ) in JavaScript?
14. How does the scope chain work in JavaScript?
15. What is the difference between function scope and block scope in JavaScript?
16. What is the difference between function declaration and arrow function in terms of hoisting?

17.function greet() {
    console.log("Hello");
}

greet();

18.function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

19.function add(a, b) {
    console.log(a + b);
}

let result = add(5, 10);

console.log(result);

20.function greet(name = "Guest") {
    console.log(name);
}

greet();

21.function test(...numbers) {
    console.log(numbers);
}

test(1, 2, 3, 4);

22.let x = 10;

function test() {
    console.log(x);
}

test();
23.function test() {
    let x = 10;
}

console.log(x);

24.if (true) {
    let x = 10;
}

console.log(x);

25.
greet();

function greet() {
    console.log("Hello");
}
  
26.
console.log(x);

var x = 10;

27.console.log(x);

let x = 10;

28.
hello();

const hello = function() {
    console.log("Hello");
};

29.
let x = 10;

function test() {
    let x = 20;
    console.log(x);
}

test();

console.log(x);

30.
var x = 10;

if (true) {
    var x = 20;
}

console.log(x);

31.
let x = 10;

if (true) {
    let x = 20;
    console.log(x);
}
console.log(x);

32.Create a function that takes two numbers and returns their sum.
33.Create a function that takes a number and returns its square.
34.Create a function that checks whether a number is even.
35.Create a function that takes a string and returns its length.
36.Create a function that takes an array and returns the first element.
37.Create a function that takes an array and returns the last element.
38.Create a function that takes a string and returns it in uppercase.
39.Create a function that takes three numbers and returns the largest.
40.Create a function that takes a string and returns it reversed.

*/