
let globalName = "Sushil";
let globalAge = 22;

console.log("----- GLOBAL SCOPE -----");

console.log(globalName);
console.log(globalAge);

debugger;

// // ============================================================
// // 2. FUNCTION SCOPE
// // ============================================================

// function functionScopeDemo() {
//   let functionName = "Rahul";
//   let functionAge = 21;

//   console.log("----- FUNCTION SCOPE -----");

//   console.log(functionName);
//   console.log(functionAge);

//   debugger;
// }

// functionScopeDemo();

// // This would cause an error if uncommented:
// //
// // console.log(functionName);
// //
// // functionName exists only inside functionScopeDemo().

// // ============================================================
// // 3. BLOCK SCOPE
// // ============================================================

// console.log("----- BLOCK SCOPE -----");

// if (true) {
//   let blockName = "Aman";
//   const blockAge = 20;

//   console.log(blockName);
//   console.log(blockAge);

//   debugger;
// }

// // These would cause ReferenceError if uncommented:
// //
// // console.log(blockName);
// // console.log(blockAge);

// // ============================================================
// // 4. var IS FUNCTION SCOPED
// // ============================================================

// console.log("----- VAR FUNCTION SCOPE -----");

// function varScopeDemo() {
//   if (true) {
//     var x = 100;

//     console.log("Inside block:", x);

//     debugger;
//   }

//   // var is NOT block scoped.
//   // Therefore x is still accessible here.

//   console.log("Outside block:", x);

//   debugger;
// }

// varScopeDemo();

// // ============================================================
// // 5. let IS BLOCK SCOPED
// // ============================================================

// console.log("----- LET BLOCK SCOPE -----");

// function letScopeDemo() {
//   if (true) {
//     let y = 200;

//     console.log("Inside block:", y);

//     debugger;
//   }

//   // y cannot be accessed here.
//   //
//   // Uncommenting the next line will cause ReferenceError.
//   //
//   // console.log(y);
// }

// letScopeDemo();

// // ============================================================
// // 6. const IS BLOCK SCOPED
// // ============================================================

// console.log("----- CONST BLOCK SCOPE -----");

// function constScopeDemo() {
//   if (true) {
//     const z = 300;

//     console.log("Inside block:", z);

//     debugger;
//   }

//   // z cannot be accessed here.
//   //
//   // console.log(z);
// }

// constScopeDemo();

// // ============================================================
// // 7. var CAN BE REASSIGNED AND REDECLARED
// // ============================================================

// console.log("----- VAR REASSIGN & REDECLARE -----");

// var number = 10;

// console.log("Original:", number);

// number = 20;

// console.log("After reassignment:", number);

// var number = 30;

// console.log("After redeclaration:", number);

// debugger;

// // ============================================================
// // 8. let CAN BE REASSIGNED BUT NOT REDECLARED
// // ============================================================

// console.log("----- LET REASSIGN -----");

// let score = 50;

// console.log("Original score:", score);

// score = 100;

// console.log("After reassignment:", score);

// debugger;

// // This is NOT allowed:
// //
// // let score = 200;
// //
// // It would cause:
// // SyntaxError: Identifier 'score' has already been declared

// // ============================================================
// // 9. const CANNOT BE REASSIGNED
// // ============================================================

// console.log("----- CONST -----");

// const country = "India";

// console.log(country);

// debugger;

// // This is NOT allowed:
// //
// // country = "USA";
// //
// // It would cause:
// // TypeError: Assignment to constant variable.

// // ============================================================
// // 10. CONST WITH OBJECT
// // ============================================================

// console.log("----- CONST OBJECT -----");

// const student = {
//   name: "Sushil",
//   age: 22,
// };

// console.log(student);

// student.age = 23;

// console.log(student);

// debugger;

// // The following is NOT allowed:
// //
// // student = {};
// //
// // const prevents reassignment of the variable itself,
// // but object properties can still be modified.

// // ============================================================
// // 11. LEXICAL SCOPE
// // ============================================================

// console.log("----- LEXICAL SCOPE -----");

// let university = "IIT Bhilai";

// function lexicalDemo() {
//   let course = "Computer Science";

//   function displayStudent() {
//     let studentName = "Sushil";

//     debugger;

//     console.log(studentName);
//     console.log(course);
//     console.log(university);
//   }

//   displayStudent();
// }

// lexicalDemo();

// // Scope:
// //
// // displayStudent()
// //       ↓
// // lexicalDemo()
// //       ↓
// // Global

// // ============================================================
// // 12. SCOPE CHAIN
// // ============================================================

// console.log("----- SCOPE CHAIN -----");

// let globalVariable = "GLOBAL";

// function outerFunction() {
//   let outerVariable = "OUTER";

//   function innerFunction() {
//     let innerVariable = "INNER";

//     debugger;

//     console.log(innerVariable);
//     console.log(outerVariable);
//     console.log(globalVariable);
//   }

//   innerFunction();
// }

// outerFunction();

// // Scope chain:
// //
// // innerFunction()
// //       ↓
// // outerFunction()
// //       ↓
// // Global

// // ============================================================
// // 13. VARIABLE SHADOWING
// // ============================================================

// console.log("----- VARIABLE SHADOWING -----");

// let name = "Global Name";

// function shadowingDemo() {
//   let name = "Function Name";

//   console.log("Inside function:", name);

//   debugger;
// }

// shadowingDemo();

// console.log("Outside function:", name);

// // The local 'name' shadows the global 'name'.

// // ============================================================
// // 14. NESTED SHADOWING
// // ============================================================

// console.log("----- NESTED SHADOWING -----");

// let value = 10;

// function outerShadow() {
//   let value = 20;

//   function innerShadow() {
//     let value = 30;

//     debugger;

//     console.log("Inner value:", value);
//   }

//   innerShadow();

//   console.log("Outer value:", value);
// }

// outerShadow();

// console.log("Global value:", value);

// // Output:
// //
// // Inner value: 30
// // Outer value: 20
// // Global value: 10

// // ============================================================
// // 15. BLOCK SHADOWING
// // ============================================================

// console.log("----- BLOCK SHADOWING -----");

// let blockValue = 100;

// {
//   let blockValue = 200;

//   console.log("Inside block:", blockValue);

//   debugger;
// }

// console.log("Outside block:", blockValue);

// // Output:
// //
// // Inside block: 200
// // Outside block: 100

// // ============================================================
// // 16. var HOISTING
// // ============================================================

// console.log("----- VAR HOISTING -----");

// function varHoistingDemo() {
//   console.log("Before declaration:", hoistedValue);

//   var hoistedValue = 500;

//   console.log("After declaration:", hoistedValue);

//   debugger;
// }

// varHoistingDemo();

// // Conceptually JavaScript behaves like:
// //
// // function varHoistingDemo() {
// //
// //     var hoistedValue;
// //
// //     console.log(hoistedValue);
// //
// //     hoistedValue = 500;
// //
// //     console.log(hoistedValue);
// // }

// // ============================================================
// // 17. var HOISTING WITH GLOBAL VARIABLE
// // ============================================================

// console.log("----- GLOBAL VAR HOISTING -----");

// console.log(globalVar);

// var globalVar = 1000;

// console.log(globalVar);

// debugger;

// // First output:
// // undefined
// //
// // Second output:
// // 1000

// // ============================================================
// // 18. let TDZ
// // ============================================================

// console.log("----- LET TDZ -----");

// function letTDZDemo() {
//   // DO NOT uncomment the next line initially.
//   // It will cause ReferenceError.

//   // console.log(tdzValue);

//   let tdzValue = 600;

//   console.log(tdzValue);

//   debugger;
// }

// letTDZDemo();

// // The area before:
// //
// // let tdzValue = 600;
// //
// // is called the Temporal Dead Zone.

// // ============================================================
// // 19. const TDZ
// // ============================================================

// console.log("----- CONST TDZ -----");

// function constTDZDemo() {
//   // DO NOT uncomment initially.
//   //
//   // console.log(constValue);

//   const constValue = 700;

//   console.log(constValue);

//   debugger;
// }

// constTDZDemo();

// // ============================================================
// // 20. TDZ WITH SHADOWING
// // ============================================================

// console.log("----- TDZ + SHADOWING -----");

// let outerX = 10;

// function tdzShadowDemo() {
//   // Uncommenting this will cause ReferenceError.
//   //
//   // console.log(outerX);

//   let outerX = 20;

//   console.log(outerX);

//   debugger;
// }

// tdzShadowDemo();

// // Why?
// //
// // The inner outerX shadows the outer outerX.
// // Before initialization, the inner variable is in TDZ.

// // ============================================================
// // 21. FUNCTION DECLARATION HOISTING
// // ============================================================

// console.log("----- FUNCTION HOISTING -----");

// sayHello();

// function sayHello() {
//   console.log("Hello from function declaration");

//   debugger;
// }

// // Function declarations can be called
// // before their declaration in the code.

// // ============================================================
// // 22. FUNCTION DECLARATION WITH PARAMETERS
// // ============================================================

// console.log("----- FUNCTION DECLARATION -----");

// displayStudent();

// function displayStudent() {
//   let studentName = "Sushil";
//   let studentAge = 22;

//   console.log(studentName);
//   console.log(studentAge);

//   debugger;
// }

// // ============================================================
// // 23. FUNCTION EXPRESSION WITH var
// // ============================================================

// console.log("----- FUNCTION EXPRESSION WITH VAR -----");

// // DO NOT execute this section initially.
// //
// // Calling the function before assignment:
// //
// // greet();
// //
// // var greet = function() {
// //     console.log("Hello");
// // };
// //
// // This produces:
// // TypeError: greet is not a function

// // ============================================================
// // 24. FUNCTION EXPRESSION WITH let
// // ============================================================

// console.log("----- FUNCTION EXPRESSION WITH LET -----");

// // Calling before declaration:
// //
// // greetUser();
// //
// // let greetUser = function() {
// //     console.log("Hello");
// // };
// //
// // This produces:
// // ReferenceError
// //
// // because greetUser is in the TDZ.

// // ============================================================
// // 25. COMBINED SCOPE + HOISTING
// // ============================================================

// console.log("----- COMBINED EXAMPLE -----");

// var combinedX = 10;

// function combinedDemo() {
//   console.log("First:", combinedX);

//   var combinedX = 20;

//   console.log("Second:", combinedX);

//   debugger;
// }

// combinedDemo();

// console.log("Global:", combinedX);

// // Output:
// //
// // First: undefined
// // Second: 20
// // Global: 10

// // ============================================================
// // 26. COMBINED SCOPE + BLOCK + SHADOWING
// // ============================================================

// console.log("----- COMBINED BLOCK EXAMPLE -----");

// let combinedValue = 10;

// function combinedBlockDemo() {
//   let combinedValue = 20;

//   console.log("Function:", combinedValue);

//   if (true) {
//     let combinedValue = 30;

//     console.log("Block:", combinedValue);

//     debugger;
//   }

//   console.log("Function again:", combinedValue);
// }

// combinedBlockDemo();

// console.log("Global:", combinedValue);

// // Output:
// //
// // Function: 20
// // Block: 30
// // Function again: 20
// // Global: 10

// // ============================================================
// // 27. SCOPE CHAIN + SHADOWING + DEBUGGING
// // ============================================================

// console.log("----- FINAL SCOPE CHAIN DEMO -----");

// let company = "OpenAI";

// function department() {
//   let departmentName = "Engineering";

//   function employee() {
//     let employeeName = "Sushil";

//     debugger;

//     console.log("Employee:", employeeName);
//     console.log("Department:", departmentName);
//     console.log("Company:", company);
//   }

//   employee();
// }

// department();

// // At the debugger:
// //
// // Local scope:
// // employeeName
// //
// // Outer scope:
// // departmentName
// //
// // Global scope:
// // company

// // ============================================================
// // 28. FINAL DEBUGGING DEMO
// // ============================================================

// console.log("----- FINAL DEBUGGING DEMO -----");

// let globalNumber = 10;

// function debuggingDemo() {
//   let functionNumber = 20;

//   console.log("Step 1");

//   debugger;

//   if (true) {
//     let blockNumber = 30;

//     console.log("Step 2");

//     debugger;

//     console.log(globalNumber);
//     console.log(functionNumber);
//     console.log(blockNumber);
//   }

//   console.log("Step 3");

//   debugger;
// }

// debuggingDemo();

// console.log("Step 4");

// // ============================================================
// // END
// // ============================================================

// console.log("===== PROGRAM FINISHED =====");
