/*
  But selecting an element is only the first step.

We often need to change its appearance or state.

For example:

Make a button active
Hide a menu
Show an error message
Highlight a selected item
Change a card's background
Open/close a dropdown
Enable dark mode
Mark a form field as invalid

JavaScript can control these things using:

HTML
  ↓
DOM
  ↓
JavaScript
  ↓
Change classes / styles
  ↓
Browser updates UI

className property
The className property allows you to get or set the value of the class attribute of an element.

<div id="myDiv" class="box"></div>

const myDiv = document.querySelector("#myDiv");
console.log(myDiv.className); // Output: "box"

myDiv.className = "newClass";
console.log(myDiv.className); // Output: "newClass"

can add multiple classes to an element by separating them with spaces:
myDiv.className = "class1 class2 class3";


classList property:
The classList property provides a convenient way to work with the classes of an element. It returns a DOMTokenList object that represents the classes of the element.

const myDiv = document.querySelector("#myDiv");
// Add a class
myDiv.classList.add("newClass");
// Remove a class
myDiv.classList.remove("box");
// Toggle a class
myDiv.classList.toggle("active");

instead of treating all classes as one string, classList allows you to work with each class individually. It provides methods to add, remove, toggle, and check for the presence of classes.
*/