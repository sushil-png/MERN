/*
const title = document.querySelector("#title");

const message = document.querySelector(".message");

const button = document.querySelector("#btn");

title.textContent="Hello World";

message.textContent="Welcome to JavaScript";

textContent property is used to set or get the text content of an element. It can be used to change the text of an element or to retrieve the text of an element.

textContent treats everything as text, including HTML tags. It does not parse the content as HTML, so any HTML tags will be displayed as plain text.

message.textContent = "<strong>Hello</strong>";

innerHTML property is used to set or get the HTML content of an element. It can be used to change the HTML structure of an element or to retrieve the HTML structure of an element.

innerHTML parses the content as HTML, so any HTML tags will be rendered as HTML elements.

message.innerHTML = "<strong>Hello</strong>";

difference between textContent and innerHTML:
textContent treats everything as text, while innerHTML parses the content as HTML.

Security Risks of innerHTML:
Using innerHTML can introduce security risks, such as cross-site scripting (XSS) attacks, if the content being set is not properly sanitized. It is important to validate and sanitize any user-generated content before inserting it into the DOM using innerHTML.

example of XSS attack:
const userInput = "<script>alert('XSS Attack!');</script>";
message.innerHTML = userInput;

Reading Element Properties:
You can read the properties of an element using JavaScript. For example, you can read the text content of an element using the textContent property, or you can read the value of an input element using the value property.

<input type="text" id="myInput" value="Hello">

const inputElement = document.querySelector("#myInput");
console.log(inputElement.value); // Output: Hello
inputElement.value = "New Value"; // Change the value of the input element
inputElement.id = "newId"; // Change the id of the input element

common DOM Properties and methods:
1.element.textContent: Gets or sets the text content of an element.
2.element.innerHTML: Gets or sets the HTML content of an element.
3.element.value: Gets or sets the value of an input element.
4.element.id: Gets or sets the id of an element.
5.element.className: Gets or sets the class of an element.
6.element.style: Gets or sets the style of an element.
7.element.getAttribute(attributeName): Gets the value of the specified attribute of an element.
8.element.setAttribute(attributeName, value): Sets the value of the specified attribute of an element.
9.element.removeAttribute(attributeName): Removes the specified attribute from an element.

properties of an element:
element.textContent
element.innerHTML
element.value
element.checked
element.disabled
element.href
element.src
element.alt
element.id
element.title

Attributes of an element:
element.getAttribute(attributeName)
element.setAttribute(attributeName, value)
element.removeAttribute(attributeName)

Attributes are used to provide additional information about an element, while properties are used to represent the current state of an element. Attributes are defined in the HTML markup, while properties are defined in the DOM.

example of attributes and properties:
<input type="text" id="myInput" value="Hello">


<input id="myInput" value="Hello">

const inputElement = document.querySelector("#myInput");
console.log(inputElement.getAttribute("value")); // Output: Hello
console.log(inputElement.value); // Output: Hello

inputElement.value="hii";
console.log(inputElement.getAttribute("value")); // Output: Hello
console.log(inputElement.value); // Output: hii

getAttribute() method is used to get the value of an attribute of an element. It takes the name of the attribute as a parameter and returns the value of the attribute.

syntax: element.getAttribute(attributeName)
setAttribute() method is used to set the value of an attribute of an element. It takes the name of the attribute and the value to be set as parameters.

syntax: element.setAttribute(attributeName, value)
removeAttribute() method is used to remove an attribute from an element. It takes the name of the attribute as a parameter.
syntax: element.removeAttribute(attributeName)

<a id="link" href="https://example.com">
    Visit
</a>

const link = document.querySelector("#link");

link.setAttribute(
    "href",
    "https://developer.mozilla.org/"
);

Questions:
1. What is the difference between textContent and innerHTML?
2. What are the security risks of using innerHTML?
3. How can you read and modify the properties of an element using JavaScript?   
4. What are some common DOM properties and methods that can be used to manipulate elements in the DOM?
5. create new attribute
6. remove attribute
7. create new property
8. What is the difference between attributes and properties of an element?
9. How can you use getAttribute(), setAttribute(), and removeAttribute() methods to manipulate attributes of an element?
10. How can you change the href attribute of an anchor element using JavaScript?

check Whether Attribute Exists or Not:
const inputElement = document.querySelector("#myInput");
console.log(inputElement.hasAttribute("value")); // Output: true

data-* Attributes:
html allows us to store custom information using data-*

example:
<div>
    id="student"
    data-name="Sushil"
    data-course="BCA"
    data-semester="5">
</div>

const student = document.querySelector("#student");

console.log(
    student.getAttribute("data-name")
);
console.log(
    student.getAttribute("data-course")
);
console.log(
    student.getAttribute("data-semester")
);

using dataset property to access data-* attributes:
const student = document.querySelector("#student");

console.log(student.dataset.name);
console.log(student.dataset.course);
console.log(student.dataset.semester);

updating links:
<a id="link" href="https://example.com">
    Visit
</a>

const link = document.querySelector("#link");

link.setAttribute(
    "href",
    "https://developer.mozilla.org/"
);
or
link.href = "https://developer.mozilla.org/";

link.textContent="Clic here";

updating image:
<img
    id="profileImage"
    src="old.jpg"
    alt="Old image">

const image=document.querySelector("#profileImage");
image.src="new.png";
image.alt="New profile image";

Accessibility Attributes:

<button id="menuButton" aria-expanded="false">
    Menu
</button>

<nav id="menu" hidden>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
</nav>

const menuButton =
    document.querySelector("#menuButton");

const menu =
    document.querySelector("#menu");

menuButton.addEventListener("click", function () {

    const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

    if (isOpen) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menu.hidden = true;

    } else {

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menu.hidden = false;
    }

});

classwork :
task 1:change Heading
welcome to welcome to sushil world!

task 2:compare textContent and innerHTML 

task 3:Change Link

Create a link.
Using JavaScript:
change href
change link text
add target="_blank"

task 4:Remove Attribute
<button disabled>Submit</button>
Use JavaScript to enable it by removing the disabled attribute.



Homework:

Build a Dynamic Product Card

Create a product card containing:
Product image
Product name
Product price
Product description
Product link
Availability status
"Buy Now" button

Use JavaScript to implement:

Requirement 1
Change the product name using:
textContent


Requirement 2
Change the product image using:
src


Requirement 3
Change the image alternative text using:
alt


Requirement 4
Change the product link using:
href


Requirement 5
Store product information using:
data-id
data-category
data-price


Requirement 6
Read those values using:
dataset


Requirement 7
If the product is available:
Available
Otherwise:
Out of Stock


Requirement 8
If the product is out of stock, disable the Buy button.


Requirement 9
Update:
aria-disabled
appropriately when the button's availability changes.


Requirement 10
Do not use innerHTML for user-provided product information
*/