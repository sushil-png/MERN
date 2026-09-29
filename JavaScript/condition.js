/* Conditional Statements in JavaScript */


/* real life example:
1. If the temperature is greater than 30 degrees, it's hot outside.
2. Otherwise, it's not too hot. */

if (temperature > 30) {
    console.log("It's hot outside!");
} else {
    console.log("It's not too hot.");
}
/* Another example:
1. If the day is Monday, print "Start of the work week."
2. If the day is Friday, print "End of the work week."
3. Otherwise, print "It's a regular day." */

switch (day) {
    case 'Monday':
        console.log("Start of the work week.");
        break;
    case 'Friday':
        console.log("End of the work week.");
        break;
    default:
        console.log("It's a regular day.");
}
/* In this example, the switch statement checks the value of the variable day and executes the corresponding code block based on the matching case. If none of the cases match, the default block is executed.


*/
/*
conditional statements are used to perform different actions based on different conditions. 
The most common conditional statements in JavaScript are if...else and switch statements.

If...else statements allow you to execute a block of code if a specified condition is true, and another block of code if the condition is false. The syntax is as follows:

condition: a value that is evaluated as true or false
 
combining multiple conditions: you can use logical operators (&& for AND, || for OR) to combine multiple conditions in an if statement.
 
example:
if (age >= 18 && age <= 65) {
    console.log("You are eligible to work.");
} else {
    console.log("You are not eligible to work.");
}

 && (AND) operator: returns true if both conditions are true.
 || (OR) operator: returns true if at least one of the conditions is true.
 ! (NOT) operator: negates the condition, returning true if the condition is false, and vice versa.


 switch Statement

Use switch when you are comparing one value against multiple specific values.

fallthrough behavior: In a switch statement, if you don't include a break statement at the end of a case block, the code will "fall through" to the next case, executing its code as well. This can be useful in some scenarios but can also lead to unintended behavior if not used carefully.

default case: The default case in a switch statement is executed if none of the specified cases match the expression. It's similar to the else block in an if...else statement.


Ternary Operator
The ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

Syntax:
condition ? value_if_true : value_if_false;

Example:
let age = 20;
let eligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(eligibility); // Output: You are eligible to vote.  
 */

/* Syntax:
if (condition) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

switch (expression) {
    case value1:
        // code to execute if expression equals value1
        break;
    case value2:
        // code to execute if expression equals value2
        break;
    default:
        // code to execute if expression doesn't match any case
}
        */

/*
Common Mistake — 
1. Assignment Instead of Comparison

Very common:

let age = 20;

if (age = 18) {
    console.log("Adult");
}

Here:
age = 18
means assignment, not comparison.

2. Forgetting to Use Break in Switch Statements
If you forget to include a break statement in a switch case, the code will fall through to the next case, which can lead to unexpected behavior.

3. Using == Instead of ===
Using == can lead to unexpected type coercion. It's generally recommended to use === for strict equality checks.

4. Not Handling All Cases in Switch Statements
If you don't include a default case in a switch statement, and none of the cases match, nothing will happen. Always consider including a default case to handle unexpected values.

5. Overcomplicating Conditions
Avoid writing overly complex conditions that are hard to read and understand. Break them down into simpler statements or use helper functions if necessary.

6. Neglecting to Consider Edge Cases
Always think about edge cases when writing conditional statements. For example, consider what should happen if a variable is null or undefined.

7. Using Multiple Else If Statements Instead of Switch
If you have many conditions to check against a single variable, consider using a switch statement instead of multiple else if statements for better readability.

8. Forgetting to Use Parentheses in Complex Conditions
When combining multiple conditions with logical operators, always use parentheses to ensure the correct order of evaluation and to improve readability.

9. Not Using Ternary Operator for Simple Conditions
For simple if...else statements, consider using the ternary operator for more concise code.

10. Ignoring Readability
Always prioritize readability in your conditional statements. Use clear variable names and structure your code in a way that is easy to follow.

11. Not Testing All Possible Conditions
Make sure to test your conditional statements with all possible input values to ensure they behave as expected in every scenario.

12. truthy and falsy values: In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context. For example, 0, "", null, undefined, and NaN are falsy, while most other values are truthy. Be aware of this behavior when writing conditional statements.
*/

/*
    Questions to Ask Yourself When Writing Conditional Statements:
1. What is the condition I want to check?
2. What should happen if the condition is true?
3. What should happen if the condition is false?
4. Are there multiple conditions that need to be checked?
*/

/*
Questions:
1.Write a program that checks whether a number is positive or negative.
2. Write a program that checks whether a number is even or odd.
3. Write a program that checks whether a person is eligible to vote based on their age.
4. Write a program that checks whether a year is a leap year or not.
5. Write a program that checks whether a string is a palindrome or not.
6. Write a program that checks whether a number is prime or not.
7. Write a program that checks whether a person is eligible for a senior citizen discount based on their age.
8. Write a program that checks whether a number is divisible by 3 and 5.
9.take two numbers and print the largest of the two numbers.
10.Grade System

Create:

90–100 → A+
80–89  → A
70–79  → B
60–69  → C
40–59  → D
<40    → Fail

11.Age Category
0–12    → Child
13–19   → Teenager
20–59   → Adult
60+     → Senior

12.Number Classification

Print:
Positive
Negative
Zero
13.Largest of Three Numbers
14.College Admission

Student is eligible if:

marks >= 60
AND
attendance >= 75

15. Traffic Light System
    Red → Stop
    Yellow → Prepare to Stop
    Green → Go
16. Temperature Check
    If temperature > 30 → Hot
    If temperature between 20 and 30 → Warm
    If temperature < 20 → Cold
17.Weekend
Given a day:
Saturday
Sunday

print:
Weekend
otherwise:
Weekday

18. Number Range
Given a number:
1–10 → Low
11–20 → Medium
21–30 → High

19.ATM

Conditions:
If card is inserted
    check PIN

If PIN correct
    check balance

If balance sufficient
    allow withdrawal
20.Convert:

if (age >= 18) {
    result = "Adult";
} else {
    result = "Minor";
}

into ternary.
*/