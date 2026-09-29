/*
What is a Loop?
A loop is a programming construct that allows you to execute a block of code multiple times.

Suppose you want to print:

Hello
Hello
Hello
Hello
Hello

Without a loop:

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

This is repetitive.

The main types of loops in JavaScript are:
- for loop//
- while loop//
- do...while loop//

Start
  ↓
Check condition
  ↓
Is condition true?
  ↓ Yes
Execute code
  ↓
Update
  ↓
Check condition again
  ↓
...
  ↓ No
Stop


for loop:
The for loop is used when you know in advance how many times you want to execute a block of code. It consists of three parts: initialization, condition, and update.

syntax:
for (initialization; condition; update) {
    // code to be executed
}
****************************************
1.initialization: This is executed once before the loop starts. It is typically used to initialize a counter variable.

2.condition: This is evaluated before each iteration of the loop. If the condition is true, the loop continues; if it is false, the loop stops.

3.update: This is executed after each iteration of the loop. It is typically used to update the counter variable.

Dry run example:
for (let i = 0; i < 5; i++) {
    console.log("Hello");
}

question:
1. What will be the output of the above code?
2. How many times will the loop execute?
3. What will be the value of i after the loop finishes?
4. What will be the value of i during the last iteration of the loop?
5. What will be the value of i during the first iteration of the loop?
6.Print Even Numbers
7. Print Odd Numbers
8. Print Numbers from 1 to 10
9. Print Numbers from 10 to 1
10.sum of numbers from 1 to 10

****************************************
while loop:
The while loop is used when you want to execute a block of code as long as a specified condition is true. It consists of a condition that is checked before each iteration.

syntax:
while (condition) {
    // code to be executed
}

example:
let i = 0;
while (i < 5) {
    console.log("Hello");
    i++;
}

question:
1. What will be the output of the above code?
2. How many times will the loop execute?    
3. What will be the value of i after the loop finishes?
4. What will be the value of i during the last iteration of the loop?
5. What will be the value of i during the first iteration of the loop?

diffrence between for loop and while loop:
1. Initialization: In a for loop, the initialization of the loop control variable is done within the loop statement itself, while in a while loop, it is done outside the loop.
2. Condition: In a for loop, the condition is checked within the loop statement itself, while in a while loop, it is checked before each iteration.
3. Update: In a for loop, the update is done within the loop statement itself, while in a while loop, it is done inside the loop body.

****************************************
do...while loop:
The do...while loop is similar to the while loop, but it guarantees that the code block will be executed at least once, even if the condition is false. The condition is checked after the code block is executed.
syntax:
do {
    // code to be executed
} while (condition);

example:
let i = 0;
do {
    console.log("Hello");
    i++;
} while (i < 5);

****************************************
break statement:
The break statement is used to exit a loop prematurely, regardless of the loop's condition. When the break statement is encountered, the loop terminates immediately, and control is transferred to the next statement after the loop.
****************************************
continue statement:
The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is encountered, the remaining code in the current iteration is skipped, and the loop proceeds to the next iteration.

break vs continue

This is extremely important.

break
STOP THE ENTIRE LOOP
continue
SKIP CURRENT ITERATION
CONTINUE WITH NEXT ITERATION

example of break:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

example of continue:
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
****************************************
nested loops:
A nested loop is a loop inside another loop. The inner loop is executed completely for each iteration of the outer loop.

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }
}



****************************************
for...of loop:
The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.). It allows you to access the values of the iterable directly.

syntax:
for (const element of iterable) {
    // code to be executed
}

example:
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value);
}

****************************************
for...in loop:
The for...in loop is used to iterate over the enumerable properties of an object. It allows you to access the keys (property names) of the object.

syntax:
for (const key in object) {
    // code to be executed
}
  
let student = {
    name: "Rahul",
    age: 20,
    city: "Delhi"
};

for (let key in student) {
    console.log(key);
}

****************************************
Which Loop should You Use?
- Use a for loop when you know the number of iterations in advance.
- Use a while loop when you want to execute a block of code as long as a condition is true.
- Use a do...while loop when you want to ensure that the code block is executed at least once, regardless of the condition.
- Use for...of loop for iterating over iterable objects like arrays and strings.
- Use for...in loop for iterating over the properties of an object.



Situation:You know the number/range of iterations in advance. Use a for loop.

Situation:You want to execute a block of code as long as a condition is true. Use a while loop.

Situation:You want to ensure that the code block is executed at least once, regardless of the condition. Use a do...while loop.

Situation:You want to iterate over an iterable object like an array or a string. Use a for...of loop.

Situation:You want to iterate over the properties of an object. Use a for...in loop.

****************************************
Print this pattern:
*
**
***
****
*****

Print:
*****
****
***
**
*
* 
Print:
1
22
333
4444
55555

Print:
    *
   **
  ***
 ****
*****

1 2 3 4 5
2 3 4 5 6
3 4 5 6 7
4 5 6 7 8
5 6 7 8 9
*/