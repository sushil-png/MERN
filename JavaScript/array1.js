/*
What is a callback function in JavaScript?

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to control the flow of your program and handle asynchronous operations.

 A function passed as an argument to another function is called a callback function. It is executed after the completion of the operation in the outer function. Callback functions are commonly used in JavaScript for handling asynchronous operations, such as API calls, event handling, and timers.

Example of a callback function:
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Sushil");
}

processUser(greet);


function add(a, b) {
    return a + b;
}

function calculate(callback) {
    console.log(callback(10, 20));
}

calculate(add);

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

forEach() is a built-in array method in JavaScript that allows you to iterate over each element of an array and execute a provided callback function for each element. It is commonly used for performing operations on each item in an array without the need for a traditional loop.

forEach() is used when:

You want to perform an action for every element of an array.

array.forEach(callback(currentValue, index, array)) {
    // code to be executed for each element
}

let students = ["Rahul", "Aman", "Priya"];

students.forEach(student => {
    console.log("Welcome " + student);
});

practice questions:
1. Write a program to calculate the sum of all elements in an array using forEach().
2. Write a program to find the maximum element in an array using forEach().
3. Write a program to filter out even numbers from an array using forEach().
4. Write a program to create a new array with the squares of each element in an existing array using forEach().
5. Write a program to count the occurrences of each element in an array using forEach().
6. Write a program to check if all elements in an array satisfy a certain condition using forEach().
7. Write a program to find the index of a specific element in an array using forEach().
8. Write a program to concatenate all elements of an array into a single string using forEach().
9. Write a program to create a new array containing only the elements that meet a certain condition using forEach().
10. Write a program to perform an operation on each element of an array and store the results in a new array using forEach().

What is map() in JavaScript?

The map() method in JavaScript is a built-in array method that creates a new array by applying a provided callback function to each element of the original array. It allows you to transform the elements of an array and return a new array with the modified values.

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(number => {
    return number * 2;
});

console.log(doubled);
syntax:
array.map(callback(currentValue, index, array)) {
    // code to be executed for each element
}

let numbers = [10, 20, 30];

let result = numbers.map((number, index) => {
    return number + index;
});

console.log(result);

return new array with the results of calling a provided function on every element in the calling array.

questions:
1. Write a program to create a new array containing the squares of each element in an existing array using map().
2. Write a program to convert an array of strings to uppercase using map().
3. Write a program to create a new array with the lengths of each string in an existing array using map().
4. Write a program to create a new array with the absolute values of each number in an existing array using map().
5. Write a program to create a new array with the first letter of each string in an existing array using map(). 

filter() method:
The filter() method in JavaScript is a built-in array method that creates a new array containing all elements of the original array that pass a specified test implemented by a provided callback function. It allows you to filter out elements based on certain conditions.
// We want to select some elements based on a condition and create a new array with those selected elements.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(number => {
    return (number % 2) === 0;
});
console.log(evenNumbers);

filter() callback should return true to keep the element, or false otherwise.
syntax:
array.filter(callback(currentValue, index, array)) {
    // code to be executed for each element
}

questions:
1. Write a program to create a new array containing only the even numbers from an existing array using filter().
2. Write a program to create a new array containing only the odd numbers from an existing array using filter().
3. Write a program to create a new array containing only the strings that start with a specific letter from an existing array using filter().
4. Write a program to create a new array containing only the elements greater than a certain value from an existing array using filter().
5. Write a program to create a new array containing only the elements that are of a specific data type (e.g., numbers, strings) from an existing array using filter().

What is reduce() in JavaScript?
The reduce() method in JavaScript is a built-in array method that applies a provided callback function to each element of an array, reducing the array to a single value. It allows you to accumulate or combine values from an array based on a specific logic.

reduce() is used when:
You want to reduce an array to a single value by performing a specific operation on its elements.

example:
sum,product,maximum,minimum,average,concatenation,flattening arrays, counting occurrences, finding unique values, etc.

syntax:
array.reduce(callback(accumulator, currentValue, index, array), initialValue) {
    // code to be executed for each element
}
    let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);


console.log(sum);

*************************************************

what is the difference between 
forEach(),
map(),
filter(),
and 
reduce(),
in JavaScript?

***********************************************
forEach(): Executes a provided function once for each array element. It does not return a new array or any value. It is used for performing side effects, such as logging or modifying external variables.

************************************************

map(): Creates a new array by applying a function to each element of the original array. It returns a new array with the same length as the original array.

************************************************

filter(): Creates a new array containing only the elements that pass a specified test implemented by a provided callback function. It returns a new array with a length less than or equal to the original array.

************************************************

reduce(): Applies a provided callback function to each element of an array, reducing the array to a single value. It returns the accumulated value after processing all elements in the array.

*************************************************

What is a callback function in JavaScript?

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to control the flow of your program and handle asynchronous operations.

example of a callback function:
function greet(name) {
    console.log("Hello " + name);
}
function processUser(callback) {
    callback("Sushil");
}
processUser(greet);

2.
function sayHello() {
    console.log("Hello");
}
function execute(callback) {
    callback();
}
execute(sayHello);

3.
function calculateSquare(num) {
    return num * num;
}
function processNumber(callback, value) {
    return callback(value);
}
processNumber(calculateSquare, 5);

4.
function fetchData(callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}
    fetchData((data) => {
        console.log(data);
    });

5. marks.forEach(mark => console.log(mark));

6.let numbers = [10, 20, 30];

numbers.forEach(function(value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
});

7.
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(number => {
    return number * 2;
});

console.log(doubled);

8.
let numbers =[10, 15, 20, 25, 30];

let result = numbers.filter(number => number > 20);

console.log(result);

9.
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

10.
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

11.
let numbers = [10, 20, 30, 40];

let sum = numbers.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(sum);

12.
let numbers = [1, 2, 3, 4, 5];

let product = numbers.reduce((acc, number) => {
    return acc * number;
}, 1);

console.log(product);

let numbers = [10, 50, 20, 80, 30];

let maximum = numbers.reduce((max, number) => {
    return number > max ? number : max;
}, numbers[0]);

console.log(maximum);

==>find() returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let numbers = [10, 15, 20, 25, 30];
let result = numbers.find(number => number > 18);
console.log(result);

==> findIndex() returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

let numbers = [10, 15, 20, 25, 30];
let index = numbers.findIndex(number => number > 18);
console.log(index);

let index = numbers.findIndex(number => number > 100);
console.log(index);

some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

let numbers = [10, 15, 20, 25, 30];
let hasEvenNumber = numbers.some(number => number % 2 === 0);
console.log(hasEvenNumber);

==> every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

let numbers = [10, 15, 20, 25, 30];
let allEvenNumbers = numbers.every(number => number % 2 === 0);
console.log(allEvenNumbers);

let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);

console.log(result);

*/
