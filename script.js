// // const PI = 3.14159;
// // // PI=5;
// // // 5=5;
// // var PI = 3.14159;
// // var PI = 5;
// // console.log(PI);

// let arr = [10, 20, 30];
// let brr = arr;
// brr.push(40);
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// let x=5;
// let y=x;
// console.log(y);
// y=6;
// console.log(x);
// console.log(y);
// let z=1.5252;
// console.log(typeof z);
// console.log(typeof arr);

// let x=10;
// x=15;

// let str="256su10";
// console.log(typeof str);
// str=parseInt(str);

// console.log(str);

// console.log(Number("10")+30 + 20);//40 //3010
// console.log(10 - "10");//1010  //error //0

// console.log(Boolean(NaN));

// let x=5;
// let y="5";
// console.log(x==y);//true;
// console.log(x===y);//false;

// console.log(2**3);
// let z=0;
// let p=0;
// console.log(z++ && ++z && z++);//8 //6
// // console.log(p++ || ++p || ++p);// 6 //
// console.log(z); // 7
// // console.log(p); //6

// let x=0;
// let y=0;
// console.log(++x && x++ && y++);//0
// console.log(x);//2
// console.log(y);//1

// let age = 50;
// let hasLicense = false;
// let hasPermission = true;
// if ((age >= 18 && hasLicense )|| hasPermission) {
//   console.log("hello");
// }else{
//     console.log("hii")
// }

// let name1 = "sushil";
// console.log(`my name is ${name1}`);
// console.log(" my name is name");

// let a = 10;
// let b = 20;

// console.log(`Sum = ${a + b}`);

// let message = `
// Hello Rahul,

// Welcome to JavaScript.

// Have a great day!
// `;
// console.log(message);

// let str="       Hello my students!       "
// console.log(str.trim());

// console.log(Number("sushil"));   //Nan
// console.log(Number(""));   //0
// console.log(Number(" "));    //0
// console.log(Number("  25   ")); //25
// console.log(Number("256sushil"));   //256 //NaN

// console.log(parseInt("s256sushil"));//256

// console.log(parseInt("121cfrf", 2));//
// console.log(parseInt("101", 10)); //

// console.log(Math.floor(Math.random()*10) +1);

// console.log(Math.round(5.4));

// console.log(50>10? "hello world!":"hii world");

// let x=10;
// for(let i=0;i<100;i+=2){
//     if(x==i)continue;
//     console.log(i);
// }

// const arr = "hello";
// for (const value of arr) {
//   console.log(value);
// }

// let student = {
//   name: "Rahul",
//   age: 20,
//   city: "Delhi",
// };

// for (let key in student) {
//   console.log(student[key]);
// // }
// // *
// // **
// // ***
// // ****
// // *****
// let n=5;
// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=n;j>i;j--){
//         str+="*";
//     }
//     console.log(str);
// }

// Print:
//     *
//    **
//   ***
//  ****
// *****

// let m=5;
// for(let i=0;i<m;i++){
//     let str="";
//     for(let j=0;j<m-i-1;j++){
//         str+=" ";
//     }
//     for(let j=0;j<=i;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// let n=10;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=0;j<n;j++){
//         str+=(i+j);
//         str+=" ";
//     }
//     console.log(str);
// }
// function declaration
// function greeting(){
//     console.log("hello");
// }
// greeting();

//function expression

// const sum=function(){
//   let a=10;
//   let b=15;
//   console.log(a+b);
// }
// sum();

//arrow fuction
// const multi = (a,b,...num)=>{
//    console.log(a*b);
//     console.log(num);
// }
// multi(5,15,16,18);
//default parameter

// const sum =(a,b)=> { return a+b};
// let x=sum(5,10);
// console.log(x);

// const num = n => n*n;
// console.log(num(5));

// function greeting(){
//     console.log("hello my students");
// }
// greeting();

// function greeting1() {
//   return "hello my students";
// }
// console.log(greeting1());

// let x = 5; //global variable //global scope
// function test() {
//   let y = 10; //functional scope
//   if (true) {
//     let z = 5; //block scope
//     console.log(x);
//     console.log(y);
//     console.log(z);
//   }

//   //   console.log("Hello");
//   return 10;
// }
// console.log(test());

// let x = 5; //global variable //global scope
// function test() {
//   let y = 10; //functional scope
//   if (true) {
//     const z = 5; //block scope
//   }
//   console.log(x);
//   console.log(y);
//   console.log(z);

//   //   console.log("Hello");
//   return 10;
// }
// console.log(z);
// console.log(test());

// let x = 10;

// function outer() {
//   let y = 20;

//   function inner() {
//     let z = 30;
//     let y=50;
//     console.log(x);
//     console.log(y);
//     console.log(z);
//   }

//   inner();
// }

// outer();

//hosting
// console.log(x);
// var x=5;
// console.log(x);

// console.log(sum());
// function sum(){
//     return 5+10;
// }
// // console.log(multi());
// // var multi =()=> 5*10;
// console.log(div());
// var div = function(){
//     console.log("hello");
// }

// test();
// function test() {
//     let x = 10;
//     console.log(x);
// }

// let arr=[]
// arr.push(5);
// arr.push(5,6,3,8)
// arr.unshift(6,9,8);
// // arr[25]=7;
// // console.log(arr[25]);
// // console.log(arr.pop());
// for(let val of arr){
//     console.log(val);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.shift();
// arr.push(6);
// arr.unshift(0);
// console.log(arr);
// arr.splice(start,deletecount,items1,items2,items3...)
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3, 25);
// let crr=arr;
// let brr = arr.slice(2, 4);
// crr.push(98);
// brr.push(97);
// console.log(arr);
// console.log(brr);
// console.log(crr);
// console.log(arr);
// console.log(arr.find(
//     function sum(n){
//         return n%2==0;
//     }
// ));

// let originalArray = [1, 2, 3];
// let newArray = originalArray.concat([]);
// console.log(newArray);
// console.log(originalArray);
// let copiedArray = [...originalArray];
// copiedArray.push(258);
// let copiedArray2 = originalArray.slice();
// console.log(copiedArray);
// console.log(copiedArray2);

// let students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 21 },
// ];

// for(let i=0;i<students.length;i++){
//      console.log("Name :" + students[i].name);
//      console.log("age" + students[i].age);
// }

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.find(n=> n>25));

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   callback();
// }

// processUser(()=>{
//     console.log("hello");
// });

// let numbers = [1, 2, 3, 4, 5];
// let sum=[];
// numbers.forEach(function (number,index,arr) {
//        sum.push(number);
// });

// console.log(sum);
/*
numbers.forEach((val,index,array))




*/
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(number => number * 2
// );

// console.log(doubled);
// let num =[-1,5,-9,10,-25];
// let str=["hello","hii","sushil","raj"];
// let first=str.filter(st=>st[0]=='h');
// // let second=num.map(number=>Math.abs(number));
// console.log(first);
// console.log(second);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((number) => {
//   return number % 4 === 0;
// });
// console.log(evenNumbers);

// let arr=[5,"hello",true,6,undefined,null];
// // console.log(typeof 5);
// let x=typeof 5;
// console.log(typeof x);
// let brr=arr.filter(num => typeof(num)=="number");
// console.log(brr);
// let initialvalue = 108;
// let arr = [5, 6, 9, 82, 6];
// let x = arr.reduce((acc, number) => {
//   console.log("hello");
//   return Math.min(acc, number);
// }, initialvalue);
// console.log(x);

// let arr = [5, 6, 9, 82, 6];
// let x = arr.findIndex((number) => {
//   return number > 10;
// });
// console.log(x);

// let numbers = [10, 15, 20, 25, 30];
// let hasEvenNumber = numbers.every((number) => number % 2 === 0);
// console.log(hasEvenNumber);

// let numbers = [1, 2, 3, 4, 5, 6];

// let result = numbers
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2)
//   .reduce((acc,num)=>{return acc+num},0);

// console.log(result);

// const str=["hello"];
// let num=["hii"];
// // str[0]="hii";
// str=num;
// console.log(str);

// let arr = [1, 2, 3, 4, 5];
// // arr.pop();
// // arr.shift();
// // arr.push(6);
// // arr.unshift(0);
// arr.splice(2,2,2,5,6,9);
// console.log(arr);

// let fruits = ["Apple", "Banana", ["Mango","hello"], "Orange"];
// let newFruits = fruits.slice(1, 3);
// console.log(newFruits[1]);
// newFruits[1].push("hii");
// newFruits.push("bye");
// console.log(newFruits);
// console.log(fruits);

// let num={};
// num["name"]="sushil";
// num["id"]=12241840;
// console.log(num);
// let key="hii";
// let student = {
//     8:"hii",
//     9:"hiiiii",
//     "first name":"raj",
//   name: "Rahul",
//   age: 20,
//   course: "BCA",
//   for:"hello",
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//     return "akshara"
//   },
// };
// student[key]="timepass";
// // console.log(student);
// // console.log(student.key);
// // console.log(student[key]);
// console.log(student.greet())
// console.log(student["first name"]);

// let sum = {};
// const obj = {
//   name: "raj",
//   roll: 12241840,
//   subject: "MERN",
// };
// // obj=sum;
// obj["subject"] = "DSA";
// // delete obj.subject;
// console.log(obj);

// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert(bag.apple);

// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age, // same as age: age
//   };
// }
// const user = makeUser("John", 30);
// user = makeUser("Joe", 35);
// console.log(user);

// let user = { name: "John", age: 30 };

// console.log("age" in user); // true, user.age exists
// console.log("blabla" in user);

// let arr = [
//   { name: "John1", age: 30 },
//   { name: "John2", age: 300 },
//   { name: "John3", age: 3000 },
// ];
// let sum=0;
// for(let key of arr){
//     //  console.log(key + " => " + user[key]);
//     console.log(key.name + " => " + key.age);
// }
// console.log(sum);

// let user = { name: "John", age: 30 };
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user);

// const user = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi",
// };
// let arr = [5, 6, 7, 5, 8, 9, 6];
// let [a, b,...rest] = arr;
// let brr=arr;
// let [...brr]=arr;
// brr.push(500);
// console.log(arr);

// console.log(a);
// console.log(b);
// console.log(rest);

// Object.entries(user).forEach(([key, value,...rest]) => {
//   console.log(`${key}: ${value}`);
//   console.log(rest);
// });

// const user = {
//   name: "Rahul12",
//   age: 22,
//   city: "Delhi",
// };
// const { name, age, city } = user;
// console.log(name, age, city);

// const student = {
//   name: "Rahul",
//   age: 20,
// };
// const { name: studentName, age: studentAge } = student;
// console.log(studentName, studentAge);
// console.log(name,age);

// const { name, age, course = "MCA" } = student;
// console.log(name, age, course);

// const skills = ["HTML", "CSS", "JavaScript"];
// const [firstSkill, , thirdSkill] = skills;
// console.log(firstSkill, thirdSkill);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, b: 4 };
// const obj3 = { ...obj2, ...obj1 };
// // console.log(obj3);

// const original = { a: 1, b: 2,obj2:obj2 };
// const copy = { ...original };
// copy.obj2.hello="hii";
// console.log(copy);
// console.log(original);
// console.log(obj1);

// comparison by reference:
// let a = {};
// let b = a;
// console.log( a === b ); //true
// console.log( a == b );//true

// let arr=[2];
// let brr=[2];

// let c = {};
// let d = {};
// console.log( c === d ); //false
// console.log( c == d ); //true
// c.name="sushil";
// console.log(d);

// Object.assign(c,user,student);
// console.log(c);

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };
// let clone = structuredClone(user);//deep copy
// clone.sizes.age=20;
// console.log(clone);
// console.log(user)
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person1 = new Person("John", 30);
// const person2 =new Person("hello",21);
// console.log(typeof person1);
//  let Student=() =>{
//   // this.name = name;
//   // this.age = age;
//   console.log(arguments)
//   // this.introduce =  () =>{
//   //   console.log(`My name is ${this.name}`);
//   // };
// }
// // const student1 = new Student("Rahul", 20);
// // student1.introduce();
// Student("hello",25,26,78);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`My name is ${this.name}`);
//   }
// }
// const person1 = new Person("John", 30);
// const person2= new Person("Jane", 25);

// function even(name,age,city){

//    this.name= name;
//     this.age =age;
//     this.city=city;
// }
// let p=even("anuj",19,"bareilly")
// console.log(typeof p);
// console.log(p);

// let arr1 = [1, 2, 3,[5,6]];
// let brr=[...arr1];;
// brr[3].push(8);
// console.log(brr);
// console.log(arr1);

// function sum(a, b, c,...rest) {
//   console.log(rest);
//   console.log(c);
//   return a + b + c;

// }
// let numbers = [1, 2];
// console.log(sum(...numbers));

// let createUsers = (name) =>( { firstName: "sushil" });
// console.log(createUsers.length);

// let str = "hello";

// // str = "H" + str.slice(1);

// // console.log(str);

// let frequency = {};

// for (let char of str) {
//   if (frequency[str.charCodeAt(str.indexOf(char)) - 97]) {
//     frequency[str.charCodeAt(str.indexOf(char)) - 97]++;
//   } else {
//     frequency[str.charCodeAt(str.indexOf(char)) - 97] = 1;
//   }
// }

// console.log(frequency);

// let sentence = `      JavaScript is 
// easy to learn  `;

// let words = sentence.trim().split(/\s+/);

// console.log("Words:", words.length);
// console.log(words);
// let str="anoopanp"
// let freq={};
// for(let ch of str){
//     if(freq[ch]){
//         freq[ch]++;
//     }else{
//         freq[ch]=1;
//     }
// }
// let flag=true;
// console.log(freq);
// for(let key in freq){
//     if(freq[key]==1){
//         console.log(key);
//         flag=false;
//         break;
//     }
// }
// if(flag){
//     console.log("All chars are repeated");
// }

// let str="SusHiLraj";
// let upper=0;
// let lower=0;
// for(let ch of str){
//     if(ch>='a' && ch<='z')lower++;
//     else upper++;
// }
// console.log(lower);
// console.log(upper);

