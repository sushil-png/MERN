// // var x=5;
// // var x=10;
// const x=5;
// // let x;
// x=10;
// console.log(x);

// let x=null;
// let y=x;
// y=6;
// console.log(x);//5

// let arr=[2,3 , 5];
// let brr=arr;
// brr.push(6);
// // console.log(arr);//2,3,5,6

// console.log(typeof x);
// console.log(typeof arr);

// let y=5;
// let y=10;
// console.log(y);

// let num="234";
// num=Number(num);
// console.log(typeof num);

// console.log("10" + 5 + 5);//55  //10 //5 + "5"
// console.log(10+15 + "10" + 12-"5");//1007 //107

// console.log(5=="5") //true
// console.log(5==="5") //false

// console.log(3**3)//8
// let num=0;
// console.log(++num + num++ + ++num + --num + num--);
// console.log(num);
// let a = "Hello";
// let b = "World";

// console.log(a + " " + b); //Hello World

// let a="hii";
// let b="hello";
// console.log( a || b);//hiihello //hello //hii //

// let a=5;
// let b=5;
// console.log(++a && a++ && ++a);//8
// console.log(++b || b++ || ++b);//6
// console.log(a);//8
// console.log(b);//6

// let x=5;
// let y=10;
// let z=15;

// console.log( y && z || x)//5//15 //10 15

// let nam="prerna";
// let a=10;
// let b=15;
// console.log(`my name is ${a + b}`);

// let message = `
// Hello Rahul,

// Welcome to JavaScript.

// Have a great day!
// `;
// console.log(message);

// let str="    hello my students!   "
// console.log(str);
// let i;
// for ( i = 0; i < 5; i++) {
//   console.log("Hello");
// }
// console.log(i);

//even number]
// let n=5;
// for(let i=0;i<4;i++){
//     let str="";
//     for(let j=0;j<4;j++){
//         str+="* "
//     }
//     console.log(str);
// }
// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=0;j<n;j++){
//         str+=(i+j);
//         str+=" ";
//     }
//     console.log(str);
// }
// let x=prompt("Enter your name:","hh");
// alert("are you student? ");
// console.error("Danger ")
// let day = "Monday";
// switch (day) {
//   default:
//     console.log("It's a regular day.");
//   case "Monday":
//     console.log("Start of the work week.");
//   case "Friday":
//     console.log("End of the work week.");
//     break;
// }

// condition ? true : false;

// console.log(5<2 ?"Id card submit karo":"id card submit mat karo");

// let x=5;
// if(x++ && ++x && x++ && ++x){
//     console.log(x);
// }
// let y=5;
// console.log(++y && ++y || ++y);

// let n=5;
// if ((n++ && ++n) || ++n) {
//   console.log(n);
// }

// let numbers = [10, 20, 30, 40];

// let sum = numbers.reduce((acc, curr, idx) => {
//   console.log(
//     `current iteration ${idx + 1}: acc value: ${acc}, curr value: ${curr}`,
//   );
//   acc += curr;
//   return acc;
// }, 0);

// console.log(sum);

// let students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 10 },
//   { name: "Charlie", age: 18 },
//   { name: "ram", age: 17 },
//   { name: "sham", age: 25 },
//   { name: "ramashes", age: 22 },
//   { name: "suresh", age: 16 },
// ];

// for(let i=0;i<students.length;i++){
//     console.log(students[i].age,typeof students[i]);
// }
// const reducedRes = students.reduce(
//   (acc, curr) => {
//     curr.age >= 18 ? acc.isAdult.push(curr) : acc.isTeen.push(curr);

//     return acc;
//   },
//   { isAdult: [], isTeen: []},
// );

// console.log(reducedRes);

/*
1.what is the diffrence between var ,let and const;
2.what is the rule of naming convenstion of variable;
3.what is truthy and falsy value;
4.write the syntax of all type of conditional statement
5.explain for loop and all its termnology...with proper syntax
6.when we u  se for ,while and do..while loop
7.explain ternary operator...
8.print all even number between 15 to 150;
9.print all prime number between 1 to 100;
10.print fibonacci series
 */

// 0 1 1 2 3 5 8 13 21 34 55 89

// let first=0;
// let second=1;
// console.log(first);
// console.log(second);
// for(let i=0;i<10;i++){
//     let curr=first+second;
//     console.log(curr);
//     first=second;
//     second=curr;
// }

// for(let i=2;i<=100;i++){
//      let flag=true;
//      for(let j=2;j*j<=i;j++){
//         if(i%j===0)flag=false;
//      }
//      if(flag)console.log(i);
// }

// let obj={};
// let val={
//    hii:"sushil",
//    hello:"raj"
// }
// obj["hii"]="sushil";
// // obj.hello="raj";
// console.log(obj);
// delete val["hello"];
// console.log(val);
// console.log(obj);

// function makeuser(name,age){
//     return {
//         name:name,
//         age:age,
//         greet:function(){
//             console.log("Hello, my name is " + this.name);
//         }
//     };
//    }
//    let user1=makeuser("John",20);
// //    user1.greet();

// let user = { name: "John" };

// let permissions2 = { canView: true };
// let permissions1 = { canView: false};

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }
// console.log(user.name); // John
// console.log(user.canView); // true
// // console.log(user.canEdit); // true

//function declaretion
// function sum(a,c=50,b=6){
//    // console.log(a+b);
//    console.log(b);//1
//    console.log(c);//2
//    return a
// }
// // let x=sum(5,10);
// // console.log(x);//3

// /*
// 1.write a function  which take two parameters and return its multiple
// */

// // function expression

// let add =function(a,b,c){
//   console.log(b); //1
//      console.log(c);//2
//      console.log(sum(a,b));
//      return a
// }
// add(5, 6, 7);
// console.log();//3

//fuction declaration
// function add(){

// }

// //function expression
// let multi=function(){

// }

// //arrow function
// let sum = (a,b,c) => {
//  console.log("hello");
//  return;
// }
// sum();

// let arr = (a,b)=>{return (a+b,a*b)};
// // let arr1 =(a,b)=>a+b;a*b;
// console.log(arr(10,5));

// let x=n=>n*n;
// console.log(x(5));

// function add(a, b, ...c) {
//   console.log(a + b);
//   console.log(c);
// }

// add(10, 20, 30, 40,"hello");

// function student(name, ...marks) {
//   console.log(name);
//   console.log(marks);
// }

// student("Rahul", 80, 90, 85);
// let x=5;
// function test() {
//    let x=100;
//    let y=40;
//    console.log(x);
//    // console.log(y);
//   if(true){
//    let z=36;
//    var p=96;
//    console.log(x);
//   }
// //   console.log(p);
//    // console.log(z);
// }
// // console.log(p);
// test();
// console.log(x);

// if(true){
//    var p=6999;
// }
// console.log(p);

/*
     scope:
     1.global scope
     2.functional scope
     3.block scope

*/
// let showArguments=(a,b) =>{
//   console.log(arguments);
// }
// showArguments(10, 20, 30);

// console.log(x);
//  let x=5;

// greeting();
// function greeting(){
//    console.log("Welcome!");
// }
// greet();
// var greet =()=>{
//    console.log("Welcome!");
// }

// var x = 10;

// {
//   console.log(x);

//   let x = 20;
// }

// let x = 100;

// function test() {
//   let x = 200;
//   console.log(x);
// }
// console.log(test.name);
// test();

// let total=0;
// function sum(n){
//    if(n==0)return;
//    total+=n;
//    console.log(n);
//    sum(n-1);

// }
// sum(10);

// function createuser(name, age) {
//   return {
//     name,
//     age,
//     greet() {
//       console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`,
//       );
//     },
//   };

// }
// let user1 = new createuser("John", 30);
// user1.greet();
// console.log(user1);

// var x = 10;
// function demo() {
//   console.log(x);
//   var x = 20;
//   console.log(x);
//   if (true) {
//     let x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// demo();
// console.log(x);

// let num = () => {
//   console.log(arguments);
// };
// num();
// function sum(a,b,c,...rest){
//    console.log(arguments[0]);
//    return a+b+c;
// }
// let result = sum(5,3,6,6,7,8);
// console.log(result);

//write a function to print even number upto 100

// function even(n){
//   if(n<0) return;
//   console.log(n);
//   even(n-2);
// }
// even(100);

// function makeCounter() {
//   let count = 0;
//   return function () {
//    let count = 0;
//     return count++;
//   };
// }
// let counter = makeCounter();
// let num=counter;
// counter();
// counter();
// counter();
// console.log(counter());
// num();
// num();
// console.log(num());



// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log(outerVariable);
//     console.log(innerVariable);
//   };
// }

// const inner = outerFunction("Hello");
// // inner("World");
// let a=25;
// function calculate(n){
//    let a=5;
//     function add(c,d){
//       console.log(c);
//       console.log(c+d);
//       console.log(a);
//     }
//    add(5);
//    return add;
// }
// let num=calculate(10);
// console.log(num(50,30));
// console.log(num(25,36)); 

// let x=10;
// x=5;
// const obj ={
//   "first name":"sushil",
// };
// obj["first name"]="raj";

// let arr=[];//array literals
// let brr=[2,4,7];
// brr.push(2);
// arr.push([2,5,6,8]);
// arr.push(2,5,6,8);
// arr.push("sushil");
// arr.unshift("hii")
// console.log(arr);
// arr.pop();
// console.log(arr.shift())
// console.log(arr);
// console.log(brr);
/*
push()//

pop()
shift()
unshift()
*/

let arr=[5,8,9,10];
let brr=[arr];
brr.push(100);
console.log(brr[0][0]);
console.log(arr);

