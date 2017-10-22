function foo(x,y,z) {}

console.log(foo.length); // arity = 3 - foo() expects three arguments, because it has three declared parameters


function unary(x) {};

console.log(foo.length); // arity = 1 - a function having an arity of 1 is called a unary function


// Function.length excludes the rest parameter and only includes parameters before the first one with a default value.
(function f(x, y=5) {}).length;        // 1
(function f(x, ...rest) {}).length;    // 1
(function f({ x, y }) {}).length;      // 1

/*
https://github.com/getify/Functional-Light-JS/blob/master/ch2.md#counting-inputs
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
*/
