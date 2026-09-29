/*
  Array in JavaScript
  An array is a data structure that can hold a collection of values. In JavaScript, arrays are dynamic and can hold elements of different types, including numbers, strings, objects, and even other arrays.
  Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
    You can create an array using square brackets [] and separate the elements with commas. For example:
    let fruits = ["apple", "banana", "orange"];
    console.log(fruits[0]); // Output: "apple"
    console.log(fruits[1]); // Output: "banana"
    console.log(fruits[2]); // Output: "orange"
    console.log(fruits.length); // Output: 3

    creating Arrays
    Method 1: Using Array Literals
    let fruits = ["apple", "banana", "orange"];
    mixedArray = [1, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
    emptyArray = [];
    adding elements to an array
    You can add elements to an array using the push() method, which adds elements to the end of the array, or the unshift() method, which adds elements to the beginning of the array.
    let fruits = ["apple", "banana"];
    fruits.push("orange"); // Adds "orange" to the end of the array
    fruits.unshift("grape"); // Adds "grape" to the beginning of the array
    removing elements from an array
    You can remove elements from an array using the pop() method, which removes the last element, or the shift() method, which removes the first element.
    let fruits = ["apple", "banana", "orange"];
    fruits.pop(); // Removes "orange" from the end of the array
    fruits.shift(); // Removes "apple" from the beginning of the array

2. Array Constructor:
You can also create an array using the Array constructor. For example:
let fruits = new Array("apple", "banana", "orange");

what Happens with invalid Indexes:
If you try to access an index that is out of bounds (i.e., an index that does not exist in the array), JavaScript will return undefined. For example:
let fruits = ["apple", "banana", "orange"]; 
console.log(fruits[5]); // Output: undefined

modifying elements in an array:
You can modify elements in an array by accessing them using their index and assigning a new value. For example:
let fruits = ["apple", "banana", "orange"];
fruits[1] = "grape"; // Changes "banana" to "grape"
console.log(fruits); // Output: ["apple", "grape", "orange"]

What will this print?

let arr = [10, 20, 30];

arr[1] = 100;

console.log(arr);
console.log(arr.length);

Changing length
let arr = [10, 20, 30, 40, 50];

arr.length = 3;

console.log(arr);

Output:

[10, 20, 30]

The array was shortened.

⚠️ This should be demonstrated, normally they should use methods like splice() when they want controlled modification.

Array is a reference type in JavaScript, which means that when you assign an array to another variable, you are assigning a reference to the same array in memory, not a copy of the array. Therefore, if you modify the array through one variable, the changes will be reflected in the other variable as well.

let arr = [1, 2, 3];
let brr = arr;
brr.push(4);
console.log(arr);

Array Iteration:
You can iterate over the elements of an array using various methods, such as for loops, for...of loops, forEach() method, and map() method. For example:
let fruits = ["apple", "banana", "orange"];

method 1: Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
Print Only Even Numbers
let numbers = [10, 15, 20, 25, 30];

Method 2: Using a for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

1.write a program to calculate the sum of all elements in an array.
2. write a program to find the maximum element in an array.
// 3. write a program to find the minimum element in an array.
4. write a program to reverse an array.
5. write a program to check if an array contains a specific element.
6. write a program to remove duplicates from an array.
7. write a program to sort an array in ascending order.
//  8. write a program to sort an array in descending order.
9. write a program to find the index of a specific element in an array.
10. write a program to merge two arrays into one.

push() adds one or more elements to the end of an array and returns the new length of the array.
pop() removes the last element from an array and returns that element.
shift() removes the first element from an array and returns that element.
unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

Multiple Values:
let arr = [10];
arr.push(20, 30, 40);
console.log(arr);

questions:
1.Predict Output
let arr = [10, 20, 30];

arr.push(40);
arr.shift();
arr.unshift(5);
arr.pop();

console.log(arr);

2. Predict Output
let arr = [1, 2, 3, 4, 5];
arr.pop();
arr.shift();
arr.push(6);
arr.unshift(0);
console.log(arr);

splice() method:
splice() can:

Remove elements
Add elements
Replace elements

And it changes the original array.

syntax:
array.splice(start, deleteCount, item1, item2, ...)
explanation:
start: The index at which to start changing the array.
deleteCount: The number of elements to remove from the array.
item1, item2, ...: The elements to add to the array, starting at the start index.

splice() returns an array containing the deleted elements. If no elements are removed, it returns an empty array.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(1, 1);
console.log(fruits);

3. Predict Output
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, 10, 20);
console.log(arr);

4. Predict Output
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);

5. Predict Output
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 10, 20);
console.log(arr);

slice() method:
slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

syntax:
array.slice(start, end)
end is optional. If not provided, slice() will extract through the end of the array.

end is not included in the extracted portion.

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let newFruits = fruits.slice(1, 3);
console.log(newFruits);

let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);
console.log(result);

let arr = [10, 20, 30, 40];
let result = arr.slice(1, 3);
console.log(result);
console.log(arr);

indexOf() method:
indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.

includes() method:
includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.

find() method:
find() returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

let numbers = [5, 10, 15, 20];

let result = numbers.find(function(number) {
    return number > 12;
});

console.log(result);

Includes() asks "Does this exact value exist?"

find() asks "Give me the first element satisfying this condition."

What is mutation in JavaScript?
Mutation refers to the process of changing or modifying the state of an object or data structure. In JavaScript, arrays and objects are mutable, meaning their contents can be changed after they are created. For example, you can add, remove, or modify elements in an array or properties in an object.

Non-mutation, on the other hand, refers to creating a new object or data structure without modifying the original one. This is often done using methods that return a new array or object instead of changing the existing one.

creating a new array without mutating the original:
let originalArray = [1, 2, 3];
let newArray = originalArray.concat([4, 5]);
console.log(newArray);
console.log(originalArray);
let copiedArray = [...originalArray, 4, 5];
let copiedArray2 = originalArray.slice();
console.log(copiedArray);
console.log(copiedArray2);


array of objects:
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

access elements:
console.log(students[0].name);

for (let student of students) {
    console.log(student.name);
}

questions:
1.
let fruits = ["Apple", "Banana", "Mango"];

Do the following:
Add "Orange" at the end
Remove "Orange"
Add "Grapes" at beginning
Remove "Grapes"
    
console.log(fruits);

2.
let numbers = [10, 20, 30, 40, 50];
Using splice():
Insert:
25
between 20 and 30.
Expected:
[10, 20, 25, 30, 40, 50]

3.
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 21 }
];

// Find the student with the name "Bob"
let bob = students.find(student => student.name === "Bob");
console.log(bob);

4.Check whether 50 exists:

let numbers = [10, 20, 30, 40, 50];
5. Find the first number greater than 25:
let numbers = [10, 20, 30, 40, 50];
6. Find the index of 30:
let numbers = [10, 20, 30, 40, 50];


*/
