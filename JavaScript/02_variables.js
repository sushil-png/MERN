// A variable

// A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

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


/*
We can declare variables to store data by using the var, let, or const keywords.

    let – is a modern variable declaration.
    var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
    const – is like let, but the value of the variable can’t be changed.

Variables should be named in a way that allows us to easily understand what’s inside them.
*/