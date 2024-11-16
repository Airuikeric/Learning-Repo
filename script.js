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

// Adding Numebrs
var sum = 10 + 10;
console.log(sum);

// Subtracting Numbers
var difference = 45 - 33;
console.log(difference)

// Multiplying Numbers
var product = 8 * 10;
console.log(product);

// Dividing Numbers
var quotient = 66 / 33;
console.log(quotient);

// Incrementing Numbers
var myVar = 87;
myVar = myVar + 1;
myVar++;

// Decrementing Numbers
var myVar = 11;
myVar = myVar - 1;
myVar--;

// Decimal Numbers
var ourDecimal = 5.7;
var myDecimal = 0.0009; // anything with a decimal in it it is a decimal number

// Multiply Decimals
var product = 2.0 * 2.5;
console.log(product);

// Divide Decimals
var quotient = 4.4 / 2.0;

// Finding a Remainder 
var remainder;
remainder = 11 % 3;
// 11 divided by 3 is 9, 11 - 9 is 2, so remainder is 2
console.log(remainder);

// Compound Assignment with Augmneted Addiution
var a  = 3;
var b = 17;

a = a + 12; // same as
a += 12;

b = 9 + b; // as as
b += 9;

// Con pund Assignment with Augmented Subtreaction
a = a - 1; // same as
a -= 1;

// Compound Assignmentwith Augmented Multiplication
a *= 5;

// Compound Assignment with Augmented division
a /= 1;

// Declare String Variables
// example 
var firstName = "Airuike";
var lastName = "Chen";

// Escaping Literal Quotes in  Strings
// put a back slash before each of the quotes mark it is no longer count as a string.
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// Quoting Strings with Single Quotes
var myStr = '<a href="http://www.exmaple.com" target="_blank">Link</a>';
// backticks also work `
var myStr1 = `'<a href="http://www.exmaple2.com" target="_blank">Link</a>'`;
console.log(myStr);
console.log(myStr1);

// Escape Sequencess in Strings
/******
CODE   OUTPUT
\'     single quote
\"     double quote
\\     backslash
\n     newline
\r     carriage return
\t     tab
\b     backspace
\f     form feed
 ******/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

// Concatenating Strings with plus Operator
var outStr = "I come first. " + "I come second.";
console.log(outStr);

// Concatenating Strings with Plush Equals Operator
var ourStr = "I come first. ";
ourStr += "I come second.fasdhjlkfjhasldkjflkasjd";
console.log(ourStr);

// Constructing Strings with Variables
var myName = "freeCodeCamp";
var outStr = "Hello, out name is " + ourName + ", how are you?"; 
console.log(outStr);

// Appending Varibales to Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

// Find Length of String
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);

// Bracket Notation to Find First Character in String
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)