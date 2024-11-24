/* 
JavaScript Notes Learn JavaScript - Full Course for Beginners
*/

// Declaring Variables and Comments in JavaScript

// Single-line comment
var number = 5; // this is an inline comment

/* 
Multi-line Comment
This is how you can write comments that span multiple lines.
Useful for explaining larger sections of code or detailed notes.
*/
number = 9;

/* 
Data Types in JavaScript:
1. undefined - a variable that hasn't been defined or assigned a value.
2. null - represents no value or "nothing."
3. boolean - represents true or false.
4. string - text data, like "hello."
5. symbol - an immutable, unique identifier.
6. number - numeric values (both integers and floats).
7. object - can store multiple key-value pairs, useful for structured data.
*/

// Declaring Variables in JavaScript
// There are three ways to declare variables:

// 1. var - defines a variable (can be updated and re-declared within its scope)
var myName = "Eric";
myName = 8;

// 2. let - defines a block-scoped variable (can be updated but not re-declared in the same scope)
let ourName = "freeCodeCamp";

// 3. const - defines a constant (cannot be updated or re-declared in the same scope)
const pi = 3.14;

/* 
Storing Values with the Assignment Operator
= is the assignment operator, used to assign values to variables.
*/
var a; // variable declaration without assignment (undefined)
var b = 2; // variable declaration and assignment (value of 2)
console.log(a); // output: undefined
a = 7; // assigning value to a

b = a; // assigning the value of a to b
console.log(a); // output: 7

/* 
Initializing Variables with the Assignment Operator
Variables can be initialized at the time of declaration.
*/
var a = 9; // initializes a with 9

/* 
Uninitialized Variables
Variables declared but not initialized have an initial value of undefined.
*/
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line
a = a + 1; // a is now 6
b = a + 5; // b is now 15
c = c + " String!"; // c is now "I am a String!"

/* 
Case Sensitivity in Variables
Variable names in JavaScript are case-sensitive.
Best practice is to use camelCase for variable names.
*/

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*
Recap:
- var, let, and const are used to declare variables.
- Assignment (=) is used to give values to variables.
- Variables without values are undefined by default.
- Case-sensitivity in variables matters (studlyCapVar is different from STUDLYCAPVAR).
- Use comments to annotate your code and explain complex logic or notes.
*/

/* 
Basic Arithmetic Operations 
*/
var sum = 10 + 10; // Addition
console.log(sum);

var difference = 45 - 33; // Subtraction
console.log(difference);

var product = 8 * 10; // Multiplication
console.log(product);

var quotient = 66 / 33; // Division
console.log(quotient);

/*
Incrementing and Decrementing Numbers
*/
var myVar = 87;
myVar = myVar + 1; // Increment manually
myVar++;           // Increment using shorthand
console.log(myVar);

myVar = 11;
myVar = myVar - 1; // Decrement manually
myVar--;           // Decrement using shorthand
console.log(myVar);

/*
Decimal Numbers
*/
var ourDecimal = 5.7;  // Example of a decimal number
var myDecimal = 0.0009; // Another decimal number

var product = 2.0 * 2.5; // Multiplication with decimals
console.log(product);

var quotient = 4.4 / 2.0; // Division with decimals
console.log(quotient);

/*
Finding Remainder (Modulo Operator)
*/
var remainder = 11 % 3; // Remainder of 11 divided by 3
console.log(remainder);

/*
Compound Assignment Operators
*/
var a = 3;
var b = 17;

// Compound addition
a += 12; // Same as a = a + 12
b += 9;  // Same as b = b + 9

// Compound subtraction
a -= 1; // Same as a = a - 1

// Compound multiplication
a *= 5; // Same as a = a * 5

// Compound division
a /= 1; // Same as a = a / 1

/*
String Basics
*/
// Declaring string variables
var firstName = "Airuike";
var lastName = "Chen";

// Escaping quotes in strings using backslash
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Using single quotes or backticks for strings
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
var myStr1 = `'<a href="http://www.example2.com" target="_blank">Link</a>'`;
console.log(myStr);
console.log(myStr1);

/*
Escape Sequences in Strings
\'  - Single quote
\"  - Double quote
\\  - Backslash
\n  - Newline
\r  - Carriage return
\t  - Tab
\b  - Backspace
\f  - Form feed
*/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

/*
String Concatenation
*/
// Using the `+` operator
var outStr = "I come first. " + "I come second.";
console.log(outStr);

// Using `+=` to append strings
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

// Constructing strings with variables
var myName = "freeCodeCamp";
var outStr = "Hello, our name is " + myName + ", how are you?";
console.log(outStr);

// Appending variables to strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

/*
String Properties and Indexing
*/
// Finding the length of a string
var firstName = "Ada";
var firstNameLength = firstName.length;
console.log(firstNameLength);

// Accessing characters using bracket notation
var firstLetterOfFirstName = firstName[0]; // First character
console.log(firstLetterOfFirstName);

/*
String Immutability
*/
// Strings in JavaScript are immutable, meaning their characters cannot be changed individually
var myStr = "Jello World";
myStr[0] = "H"; // This does NOT work!
console.log(myStr); // Still "Jello World"

// Reassigning the entire string works
myStr = "Hello World"; 
console.log(myStr); // Outputs "Hello World"

// Bracket Notation to  Find Nth Character in String
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
var thridLetterOfFirstname = firstName[2];
console.log(secondLetterOfFirstName);
console.log(thridLetterOfFirstname);

// Bracket Notation to Find Last Character in String
var firstName = "Ada";
var lastLetterOfFirstName = firstLetterOfFirstName[firstName.length - 1];

// Bracket Notation to Find Nth-to-Last Character in String
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName);

// Word Blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + myAdverb;
    return result;
}

console.log(wordBlanks("dog", "big", "ran", " quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// Store Mulitple values with Arrays
var ourArray = ["John", 23];

// Nested Arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

// Access Arrays Data with Indexes
var ourArray = [50, 60 ,70];
var ourData = ourArray[0]; // 50
console.log(ourData);

// Modify Array Data With Indexes
var ourArray = [18, 64, 99];
ourArray[1] = 45;
console.log(ourArray); // outArray now equals [18, 45, 99]