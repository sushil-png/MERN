// VARIABLES
const name = "Rahul";    // cannot reassign //must initialize at the time of declaration

let age = 20;            // can reassign //can not redeclare in the same scope
age = 21;

var city = "Agra";       // older style

school = "ABC School";  
console.log(typeof school); //ABC School

//Rules for naming variables
// 1. Cannot start with a number
// 2. Cannot use reserved keywords
// 3. Cannot contain spaces
// 4. Can use letters, numbers, underscores, and dollar signs
// 5. space are not allowed
// javascript is case Sensitive language

//Reserved Keyword:
/*
abstract, 
arguments, 
await, boolean,
 break, byte, case, 
 catch, char, class, const, 
 continue, debugger, default, 
 delete, do, double, else, enum, 
 eval, export, extends, false, final,
  finally, float, for, function, goto,
   if, implements, import, in, instanceof, 
   int, interface, let, long, native,
    new, null, package, private, protected, 
    public, return, short, static, super,
     switch, synchronized,
*/ 
//camelCase:The first word starts lowercase, and subsequent words start with uppercase letters.
/* 
Constants Naming Convention

For constants, you may see uppercase names when the value represents a true global/configuration constant:
const MAX_USERS = 100;
const PI = 3.14159;
  */ 
 
// PRIMITIVES

let str = "Hello";       // string
let num = 100;           // number
let flag = true;         // boolean
let x;                   // undefined
let y = null;            // null
let big = 100n;          // bigint
let id = Symbol("id");   // symbol


// REFERENCE TYPES

let arr = [10, 20, 30];

let obj = {
    name: "Rahul",
    age: 20
};

// Primitive
//    ↓
// value itself

// Reference type
//    ↓
// variable refers to an object

/*
let student1 = {
    name: "Rahul"
};

let student2 = student1;

student2.name = "Amit";

console.log(student1.name);

Arrays are Reference Types

let numbers1 = [10, 20, 30];

let numbers2 = numbers1;

numbers2.push(40);

console.log(numbers1);


 */

// TYPEOF

typeof "Hello";          // "string"
typeof 10;               // "number"
typeof true;             // "boolean"
typeof undefined;        // "undefined"
typeof null;             // "object"  ← special case
typeof NaN;              // "number"  ← special case

// What is NaN?

// NaN means Not-a-Number.

// It usually appears when a numeric operation cannot produce a meaningful numeric result.


// EXPLICIT CONVERSION

Number("10");             // 10
String(10);               // "10"
Boolean(1);               // true
Boolean(0);               // false

// Common Explicit Conversions
// Conversion	    Method
// String → Number	Number()
// Number → String	String()
// Any value → Boolean	Boolean()
// String → Integer	parseInt()
// String → Decimal	parseFloat()

// IMPLICIT COERCION

// Implicit coercion means JavaScript automatically converts a value from one type to another during an operation.

"10" + 5;                 // "105"
"10" - 5;                 // 5

// + with string → often concatenation
// - * / → numeric conversion is usually attempted



// Truthy and Falsy Values

// A value is truthy if JavaScript treats it as true in a Boolean context.

// A value is falsy if JavaScript treats it as false.
// TRUTHY

Boolean("hello");         // true
Boolean(100);             // true
Boolean([]);              // true
Boolean({});              // true


// FALSY

Boolean(false);           // false
Boolean(0);               // false
Boolean("");              // false
Boolean(null);            // false
Boolean(undefined);       // false
Boolean(NaN);             // false


// COMPARISON

5 == "5";                 // true
5 === "5";                // false

// == vs ===

// This topic is directly related to coercion.

// Loose equality: ==

// It can perform type coercion.

// console.log(5 == "5");

// Output:

// true

// JavaScript converts types before comparing.

// Strict equality: ===

// It checks both value and type.

// console.log(5 === "5");

// Output:

// false

// Because:

// 5   → number
// "5" → string

/*
 ///////////////// Operators /////////////////
An operator is a special symbol that performs an operation on one or more values (operands) and produces a result.

operands are the values on which the operator operates.

Types of Operators in JavaScript

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Ternary Operator


Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

The main operators are:

+     Addition
-     Subtraction
*     Multiplication
/     Division
%     Modulus
**    Exponentiation
++    Increment
--    Decrement

+ also joins strings 
example:
let a = "Hello";
let b = "World";

console.log(a + " " + b);

Output:

Hello World

number + string → string concatenation
let a = 10;
let b = "20";

console.log(a + b);

Output:

1020

//
5+10+"20" → 15 + "20" → "1520"

console.log(5 + 10 + "20");
console.log("20" + 5 + 10);

JavaScript division can produce decimals.
console.log(2 ** 3);
//2*2*2 = 8

prefix and postfix increment/decrement operators

x++ means:

Use the current value first, then increment.

++x means:

Increment first, then use the new value.


Assignment Operators

Assignment operators are used to assign values to variables.

The main operators are:

=     Assignment
+=    Addition assignment
-=    Subtraction assignment
*=    Multiplication assignment
/=    Division assignment
%=    Modulus assignment
**=   Exponentiation assignment

//comparison operators

Comparison operators are used to compare two values.

The main operators are:

==    Equal to
===   Strict equal to
!=    Not equal to
!==   Strict not equal to
>     Greater than
<     Less than
>=    Greater than or equal to
<=    Less than or equal to

Strict equality ===

=== checks:

Value
Data type

Strict Inequality !==
Checks whether value OR type is different.

// logical Operators

Logical operators are used to combine or invert Boolean values.

The main operators are:

&&    Logical AND
||    Logical OR
!     Logical NOT

&& and || Return Values:
Logical operators don't always return true or false.
They can return one of their operands.

For example:

console.log("Hello" && "World");

Output:

World

And:

console.log(0 && "Hello");
Output:
0

Why?
JavaScript uses truthy/falsy evaluation.

|| for Default Values

Example:

let name = "Alice";
let guestName = name || "Guest";

console.log(guestName);

Common Falsy Values:
false
0
-0
0n
""
null
undefined
NaN

//operator Precedence:When multiple operators appear in an expression, JavaScript follows a specific order.

Common Precedence Order

For the operators in this lesson, a useful simplified order is:

1. ()
2. **
3. * / %
4. + -
5. < > <= >=
6. === !==
7. &&
8. ||
9. =

Remember:

Parentheses have the highest priority among these.


Even when you know precedence, parentheses can make code easier to understand.

Instead of:

let age=15
let hasLicense=true;
let hasPermission=true;
if (age >= 18 && hasLicense || hasPermission) {
 console.log("hello");
}

you may write:

if ((age >= 18 && hasLicense) || hasPermission) {
}

This makes your intention clearer.

Template Literals

Template literals are used to create strings more conveniently.

They use:

`

called a backtick.

Example:

let name = "Rahul";

let message = `Hello ${name}`;

console.log(message);

Output:

Hello Rahul

Expression Inside Template Literal

You can put JavaScript expressions inside:

${ }

Example:

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);

Output:

Sum = 30

Multi-line Strings

Template literals can contain multiple lines.

let message = `
Hello Rahul,
  
Welcome to JavaScript.

Have a great day!
`;
console.log(message);

Expression Inside Template Literal

You can put expressions inside ${}.

let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);


Multiline Strings

Normal strings:

let message = "Hello\nWelcome to JavaScript\nHave a nice day";

Template literal:

let message = `
Hello
Welcome to JavaScript
Have a nice day
`;

You don't need \n for every line.


Common String Methods

JavaScript provides many methods for working with strings.

Important ones:

length
toUpperCase()
toLowerCase()
trim()
includes()
startsWith()
endsWith()
indexOf()
slice()
substring()
replace()
replaceAll()
split()
charAt()
 */

const student = {
    name: "tanish",
    bow(){
        console.log(`${this.name} take the bow`)
    }
}   

const tanish = student.bow

console.log(tanish());

console.log(Number("sushil"));             // NaN
console.log(Number(""));                // 0
console.log(Number(" "));              // 0
console.log(Number("  25   "));      // 25
console.log(Number("256sushil"));    // NaN

console.log(parseInt("sushil"));    // NaN
console.log(parseInt(""));          // NaN
console.log(parseInt(" "));         // NaN
console.log(parseInt("  25   "));   // 25
console.log(parseInt("256sushil")); // 256

console.log(parseFloat("sushil"));    // NaN
console.log(parseFloat(""));          // NaN
console.log(parseFloat(" "));         // NaN
console.log(parseFloat("  25   "));   // 25
console.log(parseFloat("256.5sushil")); // 256.5

console.log(parseInt("101", 2)); // 5
console.log(parseInt("101", 10)); // 101
/*
Global isNaN()

The global function performs conversion before checking.
It returns true if the value is NaN, and false otherwise.

isNaN("sushil");    // true
isNaN("");          // false
isNaN(" ");         // false
isNaN("  25   ");   // false
isNaN("256sushil"); // true

*/

/*
Number.isNaN()

The Number.isNaN() method does not perform conversion.
It returns true only if the value is NaN, and false otherwise.

Number.isNaN("sushil");    // false
Number.isNaN("");          // false
Number.isNaN(" ");         // false
Number.isNaN("  25   ");   // false
Number.isNaN("256sushil"); // false
Number.isNaN(NaN);         // true
Number.isNaN(false);       // false
*/

/*
     Math Methods:
     1. Math.round() - Rounds a number to the nearest integer.
     2. Math.floor() - Rounds a number down to the nearest integer.
     3. Math.ceil() - Rounds a number up to the nearest integer.
     4. Math.trunc() - Returns the integer part of a number by removing any fractional digits.
     5. Math.random() - Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
     6. Math.max() - Returns the largest of zero or more numbers.
     7. Math.min() - Returns the smallest of zero or more numbers.
     8. Math.pow() - Returns the base to the exponent power, that is, base^exponent.
     9. Math.sqrt() - Returns the square root of a number.
     10. Math.abs() - Returns the absolute value of a number.
     11. Math.random() - Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
     12. Math.PI - Returns the value of π (pi),

     ON negative numbers, Math.floor() rounds down (towards negative infinity), while Math.ceil() rounds up (towards positive infinity).
     Example:
     Math.floor(-4.5); // -5
     Math.ceil(-4.5);  // -4        
     Math.round(-4.5); // -5
*/
 /*
 Questions:
1. What is the difference between == and === in JavaScript?
2. How does JavaScript handle type coercion during comparisons?
3. What are truthy and falsy values in JavaScript? Provide examples.
4. Explain the difference between var, let, and const in variable declarations.
5. How do template literals work in JavaScript? Provide an example.
6. What are some common string methods in JavaScript, and how are they used?
7. How does the typeof operator work in JavaScript? Give examples of its output for different data types.
8. What is the difference between parseInt() and parseFloat() in JavaScript?
9. Explain the difference between global isNaN() and Number.isNaN() methods.
10. How do Math methods like Math.round(), Math.floor(), and Math.ceil() differ in their behavior with negative numbers?




11.console.log(10 + 20 * 2);
12. console.log((10 + 20) * 2);
13. console.log(10 + 20 / 2);
14. console.log(10 + "20");
15. console.log(10 - "20");
16. console.log(10 * "20");
17. console.log(10 / "20");
18. console.log("10" + "20");
19. console.log("10" - "20");
20. console.log("10" * "20");
21. console.log("10" / "20");
22. console.log(10 + true);
23. console.log(10 + false);
24. console.log(10 + null);
25. console.log(10 + undefined);
26. console.log(10 + NaN);
27. console.log(5 == "5");
28. console.log(5 === "5");
29. console.log(5 != "5");
30. console.log(5 !== "5");
31. console.log(5 > "5");
32. console.log(5 < "5");
33. console.log(5 >= "5");
34. console.log(5 <= "5");
35. console.log(5 && "Hello");
36. console.log(0 && "Hello");
37. console.log("Hello" || "World");
38. console.log(0 || "World");
39. console.log(!true);
40. console.log(!false);
41.console.log(true || false && false);
42. console.log((true || false) && false);



43.Mini Project: Student Result Calculator

Create a program that stores:

let name = "Rahul";
let english = "85";//100
let maths = "90";//100
let science = "78";//100

The program should:

Convert marks from strings to numbers.
Calculate total..
Calculate percentage.
Display student name using a template literal.
Check whether the student passed.
Display grade.

44. Mini Project: Temperature Converter
     Create a program that converts temperature from Celsius to Fahrenheit and vice versa.
     Use prompt() to get user input.
     Use Math.round() to round the result to two decimal places.
     Display the converted temperature using a template literal.

45. Mini Project: Simple Calculator
     Create a program that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on user input.
     Use prompt() to get two numbers and the desired operation.
     Use a switch statement to perform the selected operation.
     Display the result using a template literal.
46. Mini Project: Age Calculator
     Create a program that calculates a person's age based on their birth year.
     Use prompt() to get the user's birth year.
     Calculate the current age using the current year.
     Display the age using a template literal.

47. Mini Project: BMI Calculator
     Create a program that calculates a person's Body Mass Index (BMI) based on their weight and height.
     Use prompt() to get the user's weight (in kilograms) and height (in meters).
     Calculate BMI using the formula: BMI = weight / (height * height).
     Display the BMI value and the corresponding category (Underweight, Normal weight, Overweight, Obesity) using a template literal.
48. Mini Project: Currency Converter
     Create a program that converts currency from one unit to another (e.g., USD to EUR, GBP to INR).
     Use prompt() to get the amount and the desired conversion.
     Use predefined exchange rates for the conversion.
     Display the converted amount using a template literal.

49. Mini Project: Simple Interest Calculator
     Create a program that calculates simple interest based on principal, rate of interest, and time.
     Use prompt() to get the principal amount, rate of interest, and time (in years).
     Calculate simple interest using the formula: SI = (Principal * Rate * Time) / 100.
     Display the simple interest using a template literal.

50. Mini Project: Leap Year Checker
     Create a program that checks whether a given year is a leap year or not.
     Use prompt() to get the year from the user.
     Check the leap year condition:
         A year is a leap year if it is divisible by 4 but not divisible by 100, or it is divisible by 400.
     Display whether the year is a leap year or not using a template literal.


For string utility:

1. Find length
2. Convert to uppercase
3. Convert to lowercase
4. Reverse string
5. Check palindrome
6. Count vowels
7. Search for a word
 */