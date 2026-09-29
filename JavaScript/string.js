/*
What is a String?
A string is a sequence of characters used to represent text. In JavaScript, strings are enclosed in either single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

strings can contain letters, numbers, symbols, and whitespace characters. They are immutable, meaning that once a string is created, it cannot be changed. However, you can create new strings based on existing ones.

Creating Strings:
You can create strings in JavaScript using single quotes, double quotes, or backticks.

strings are Immutable.
let str = "hello";

str[0] = "H";

console.log(str);// Output: "hello" (the original string remains unchanged)

let str = "hello";

str = "H" + str.slice(1);

console.log(str);

let original = "hello";
let upper = original.toUpperCase();
console.log("Original:", original);
console.log("New:", upper);


String methods:
1. length: Returns the number of characters in the string.
2. charAt(index): Returns the character at the specified index.
3. indexOf(searchValue): Returns the index of the first occurrence of the specified value, or -1 if not found.
4. lastIndexOf(searchValue): Returns the index of the last occurrence of the specified value, or -1 if not found.
5. slice(start, end): Returns a portion of the string from the start index to the end index.
6. substring(start, end): Returns a portion of the string from the start index to the end index.
7. toUpperCase(): Converts the string to uppercase.
8. toLowerCase(): Converts the string to lowercase.
9. trim(): Removes whitespace from both ends of the string.
10. replace(searchValue, newValue): Replaces the first occurrence of a specified value with a new value.

string methods return new strings and do not modify the original string.
11.replaceAll(searchValue, newValue): Replaces all occurrences of a specified value with a new value.
12. split(separator): Splits the string into an array of substrings based on the specified separator.
13. includes(searchValue): Checks if the string contains the specified value and returns true or false.
14. join() does opposite to split();

Character Frequency Using an Object
let str = "hello";

let frequency = {};

for (let char of str) {

    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);


let str = "hello";
let frequency = {};

for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
}

console.log(frequency);

let sentence = "JavaScript is easy to learn";

let words = sentence.trim().split(/\s+/);

console.log("Words:", words.length);

/\s+/ is a regular expression that matches one or more whitespace characters.
  it can repersent spaces, tabs, or newlines. The trim() method is used to remove any leading or trailing whitespace from the sentence before splitting it into words.
  The resulting array contains each word as a separate element.
  + means one or more occurrences of the preceding whitespace character class \s, which matches any whitespace character (space, tab, newline, etc.). This ensures that multiple consecutive whitespace characters are treated as a single separator when splitting the string into words.
  what is modularization?
  modularization means dividing a large program into smaller,focused pieces.
  Program
│
├── getInput()
├── validateInput()
├── processData()
├── calculateResult()
└── displayResult()


1.Count the number of characters in a string.
2.Convert a string to uppercase.
3.Convert a string to lowercase.
4.Remove leading and trailing spaces.
5.Check whether a string contains "JavaScript"./////
6.Count the number of words.
7.Find the first character of a string.
8.Find the last character of a string.
9.Reverse a string.
10.Count vowels in a string.

 
11.Find the longest word in a sentence.
12.Find the shortest word.
13.Count the frequency of every character.
14.Count the frequency of every word.
15.Find the first non-repeating character.
16.Check whether a string is a palindrome.
17.Remove duplicate characters.
18.Count uppercase and lowercase characters separately.
19.Find the most frequent character.
20.Reverse every word in a sentence.

21.Find the first non-repeating word.
22.Find the most frequent word in a paragraph.
23.Check whether two strings are anagrams.
24.Group words having the same character frequency/anagram signature.

*/