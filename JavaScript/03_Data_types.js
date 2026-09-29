/* Data Types in JavaScript 

A value in JavaScript is always of a certain type. For example, a string or a number.

There are several data types in JavaScript:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object
7. Symbol
8. BigInt

Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1)



    Seven primitive data types:
        number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
        bigint for integer numbers of arbitrary length.
        string for strings. A string may have zero or more characters, there’s no separate single-character type.
        boolean for true/false.
        null for unknown values – a standalone type that has a single value null.
        undefined for unassigned values – a standalone type that has a single value undefined.
        symbol for unique identifiers.
    And one non-primitive data type:
        object for more complex data structures.

The typeof operator allows us to see which type is stored in a variable.

    Usually used as typeof x, but typeof(x) is also possible.
    Returns a string with the name of the type, like "string".
    For null returns "object" – this is an error in the language, it’s not actually an object.

*/
console.log(1/0); //String

/*


alert
    shows a message.
prompt
    shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
confirm
    shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

    The exact location of the modal window is determined by the browser. Usually, it’s in the center.
    The exact look of the window also depends on the browser. We can’t modify it.


prompt

The function prompt accepts two arguments:

result = prompt(title, [default]);

It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

title
    The text to show the visitor.
default
    An optional second parameter, the initial value for the input field. 

*/