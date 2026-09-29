/*
DOM (Document Object Model) is a programming interface for HTML and XML documents.
It represents the structure of a document and allows programs to read and modify the document's content, structure, and style.

Document is an object that represents the entire HTML or XML document. It is the root of the DOM tree and provides access to all elements in the document.

<!DOCTYPE html>

<html>
<head>
    <title>My Website</title>
</head>

<body>
    <h1>Hello Students</h1>
    <p>Welcome to JavaScript</p>
</body>
</html>

Objects in the DOM are organized in a tree-like structure, where each node represents an element, attribute, or text in the document. The root of the tree is the document object, and all other nodes are its descendants.

1.doucument is an object that represents the entire HTML or XML document. It is the root of the DOM tree and provides access to all elements in the document.
2. An html element can also be represented as an object in the DOM. It has properties and methods that allow you to manipulate its content, attributes, and style.

Model of the DOM:

A model is a structured representation of something.

The browser takes HTML and creates a structured representation that JavaScript can work with.
That representation is the DOM.


The DOM is a programming representation of an HTML document that allows JavaScript to access and manipulate webpage elements.

why Do we need DOM?
The DOM allows JavaScript to interact with the content and structure of a webpage. It provides a way to access and manipulate HTML elements, attributes, and text, enabling dynamic updates to the webpage without requiring a full page reload.

How Does the Browser Create the DOM?
1. The browser parses the HTML document and creates a tree-like structure called the DOM tree.
2. Each HTML element is represented as a node in the tree, with parent-child relationships based on the nesting of elements in the HTML.
3. The browser also creates a separate CSSOM (CSS Object Model) tree for styles, which is combined with the DOM tree to create the render tree used for layout and painting.

<!DOCTYPE html>

<html>
    <head>
        <title>Student Page</title>
    </head>

    <body>
        <h1>Hello Students</h1>

        <p>Welcome to JavaScript.</p>
    </body>
</html>

The DOM Tree:
 Document
    |
   HTML
  /    \
HEAD    BODY
 |       |
TITLE   H1
 |       |
Text    Text

        P
        |
       Text

DOM is not exactly the html file, but it is a representation of the html file. The DOM is created by the browser when it loads the HTML document, and it can be manipulated using JavaScript.

The DOM is the browser's in-memory object representation of the HTML document.

Javascript interacts primarily with the DOM repersentations

Useful document properties and methods:
1. document.title: Returns the title of the document.
2. document.URL: Returns the URL of the document.
3. document.body: Returns the body element of the document.
4. document.head: Returns the head element of the document.
5. getElementById(): Returns the element with the specified ID.
6. getElementsByClassName(): Returns a collection of elements with the specified class name.
7. getElementsByTagName(): Returns a collection of elements with the specified tag name.
8. querySelector(): Returns the first element that matches the specified CSS selector.
9. querySelectorAll(): Returns a collection of all elements that match the specified CSS selector.

QuerySelector() finds the first element that matches a specified CSS selector(s) in the document. It returns null if no matches are found.

1. document.querySelector('h1') - Selects the first <h1> element in the document.
2. selecting by class name: document.querySelector('.my-class') - Selects the first element with the class "my-class".
3. selecting by ID: document.querySelector('#my-id') - Selects the first element with the ID "my-id".
4. selecting by attribute: document.querySelector('[data-attribute="value"]') - Selects the first element with the specified attribute and value.

queryselector() return value is an object of the first element that matches the specified CSS selector(s) in the document. If no matches are found, it returns null.

querysectorAll() finds all elements that match a specified CSS selector(s) in the document. It returns a NodeList of matching elements, which is a collection of nodes that can be iterated over.

1. document.querySelectorAll('p') - Selects all <p> elements in the document.
2. selecting by class name: document.querySelectorAll('.my-class') - Selects all elements with the class "my-class".
3. selecting by ID: document.querySelectorAll('#my-id') - Selects all elements with the ID "my-id".
4. selecting by attribute: document.querySelectorAll('[data-attribute="value"]') - Selects all elements with the specified attribute and value.
5. selecting child elements: document.querySelectorAll('div > p') - Selects all <p> elements that are direct children of <div> elements.
6. selecting descendant elements: document.querySelectorAll('div p') - Selects all <p> elements that are descendants of <div> elements.
7. selecting elements with multiple classes: document.querySelectorAll('.class1.class2') - Selects all elements that have both "class1" and "class2".

NodeList is a collection of nodes returned by methods like querySelectorAll(). It is similar to an array, but it is not a true array. You can access individual nodes using their index, and you can iterate over the NodeList using loops.

What is a Node?

A node is an object representing a part of the DOM tree.
Examples include:
element nodes
text nodes
comment nodes
document node

const paragraphs =
    document.querySelectorAll("p");

console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);

console.log(paragraphs.length); // returns the number of <p> elements in the document
paragraphs.forEach((paragraph) => {
    console.log(paragraph.textContent); // logs the text content of each <p> element
});

getElementById() is a method that returns the element with the specified ID. It is a fast and efficient way to access a single element in the document.

1. document.getElementById('my-id') - Selects the element with the ID "my-id".
2. If no element with the specified ID exists, it returns null.

getElementsByClassName() is a method that returns a live HTMLCollection of elements with the specified class name. It allows you to access multiple elements that share the same class.

1. document.getElementsByClassName('my-class') - Selects all elements with the class "my-class".
2. If no elements with the specified class name exist, it returns an empty HTMLCollection.

getElementsByTagName() is a method that returns a live HTMLCollection of elements with the specified tag name. It allows you to access multiple elements of the same type.

1. document.getElementsByTagName('p') - Selects all <p> elements in the document.
2. If no elements with the specified tag name exist, it returns an empty HTMLCollection.

static vs live collections:
- Static collections are snapshots of the elements at the time the collection was created. They do not update automatically when the document changes.
- Live collections are automatically updated when the document changes, reflecting any additions or removals of elements that match the specified criteria.     

querySelectorAll() returns a static NodeList, while getElementsByClassName() and getElementsByTagName() return live HTMLCollections.

*/
