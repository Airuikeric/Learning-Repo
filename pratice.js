/*
//create a function take a string as input and return a double string.
//example:
//input: 'abc'
//ouput: 'aabbcc'
*/

function foo(input) {
 // implement the logic below
 let result = [];

 for (let char of input) {
    result.push(char, char);
 }

 return result.join('');
}

// test case
console.log(foo('abc')); // should output 'aabbcc' in the console
console.log(foo('a12f')); // should output 'aa1122ff' in the console


