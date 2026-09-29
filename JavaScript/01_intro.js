  <script>
    alert( 'Hello, world!' );
  </script>



/*
JavaScript is a high-level, dynamically typed, programming language primarily used to make web pages interactive and dynamic.


JavaScript was introduced to allow webpages to respond to users.

For example:

User clicks button
       ↓
JavaScript detects click
       ↓
JavaScript executes code
       ↓
Page changes

This transformed the web from mostly static documents into interactive applications.

what can JavaScript do?
1. Update and change both HTML and CSS.
2. Calculate, manipulate and validate data.
3. Control the browser and its behavior.
4. Communicate asynchronously.

JavaScript is a versatile language that can be used for both front-end and back-end development. It is supported by all modern web browsers and has a large ecosystem of libraries and frameworks that make it easier to build complex applications.

1.change HTML content:
   document.getElementById("demo").innerHTML = "Hello JavaScript!";

2.change HTML attribute:
   document.getElementById("myImage").src = "landscape.jpg";

3.change CSS style:
   document.getElementById("demo").style.fontSize = "35px";

4.hide HTML element:
   document.getElementById("demo").style.display = "none";

5.show HTML element:
   document.getElementById("demo").style.display = "block";

6.validate data:
   function validateForm() {
     let x = document.forms["myForm"]["fname"].value;
     if (x == "") {
       alert("Name must be filled out");
       return false;
     }
   }

7.control the browser:
   window.open("https://www.example.com", "_blank");

8.communicate asynchronously:
   fetch('https://api.example.com/data')
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.error('Error:', error));

javascript is a programming language.
beacuse javascript has variables, operators, loops, functions, and objects. It can be used to create dynamic and interactive web pages, as well as server-side applications.

Javascript is high-level programming language that means programmers don't normally need to directly manage cpu and memory address. 

It is dynamically typed programming language that means you don't have to declare the data type of a variable when you create it. The data type is determined automatically at runtime based on the value assigned to the variable.

javascript is a multi-paradigm programming language that supports different programming styles, including object-oriented, imperative, and functional programming. This flexibility allows developers to choose the most suitable approach for their specific use case.

javascript is an interpreted programming language that means the code is executed line by line by the JavaScript engine in the browser or server environment, rather than being compiled into machine code before execution. This allows for faster development and testing, as changes can be made and tested immediately without the need for a separate compilation step.

javassript is case-sensitive programming language that means it distinguishes between uppercase and lowercase letters in variable names, function names, and other identifiers. For example, the variables myVariable and myvariable would be considered different variables in JavaScript.

*/

/*
How javascript Runs inside the browser?
1. The browser loads the HTML document and encounters the <script> tag.
2. The browser downloads the JavaScript code from the specified source (if it's an external file) or reads the code directly (if it's inline).
3. The JavaScript engine in the browser parses the code, checking for syntax errors and converting it into an intermediate representation.
4. The engine executes the code line by line, performing actions such as manipulating the DOM, handling events, and making network requests.
5. If there are any asynchronous operations (like fetching data), the engine continues executing other code while waiting for those operations to complete.
6. Once all synchronous and asynchronous tasks are completed, the browser updates the webpage accordingly.

what is javascript engine?
A JavaScript engine is a program or interpreter that executes JavaScript code. It is responsible for parsing, compiling, and executing JavaScript code in web browsers and other environments. Each major web browser has its own JavaScript engine, which is optimized for performance and efficiency.

Some popular JavaScript engines include:

1. V8: Developed by Google, used in Chrome and Node.js.
2. SpiderMonkey: Developed by Mozilla, used in Firefox.
3. JavaScriptCore (also known as Nitro): Developed by Apple, used in Safari.
4. Chakra: Developed by Microsoft, used in older versions of Edge (before switching to Chromium).

The engine takes the JavaScript code, compiles it into machine code, and executes it, allowing developers to create dynamic and interactive web applications.

Browser is more than javascript engine, it also has HTML parser, CSS parser, rendering engine, networking, storage, and other components that work together to provide a complete web browsing experience.

  
*/



//   JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

//   JavaScript code can be placed in the <head> or <body> sections of an HTML page.
//External JavaScript

//   You can also place JavaScript code in an external file with the extension .js. This is useful when you want to use the same JavaScript code in many different web pages.

//   To use an external script, put the name of the script file in the src attribute of a <script> tag:

//   <script src="filename.js"></script>

//   The <script> tag can be placed in the <head> or <body> sections of an HTML page.
// To attach several scripts, use multiple tags:

/*
If src is set, the script content is ignored.

A single <script> tag can’t have both the src attribute and code inside.

This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>

We must choose either an external <script src="…"> or a regular <script> with code.

The example above can be split into two scripts to work:

<script src="file.js"></script>
<script>
  alert(1);
</script>

Statements

Statements are syntax constructs and commands that perform actions.

A JavaScript program is a list of statements to be executed by the browser.
A Semicolon (;) is used to separate statements. It is not required at the end of a statement, but it is a good practice to use it.


“use strict”

The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.

Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

There’s no way to cancel use strict

There is no directive like "no use strict" that reverts the engine to old behavior.

Once we enter strict mode, there’s no going back.


*/



/*
 


*/

