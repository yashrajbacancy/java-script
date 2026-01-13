

 /*Everything in JavaScript happens inside an Execution Context.

 JavaScript is a synchronous, single-threaded language.

An Execution Context has two main components:*/

/*1 Memory Component (Variable Environment)

Also called Variable Environment

Stores:

Variables

Functions

Stored in key : value pairs*/

// Example:

// a : undefined
// foo : function() { ... }

/*2 Code Component (Thread of Execution)

Also called Thread of Execution

Executes code line by line

Only one line at a time*/


/*Whenever a function is called, a new execution context is created with:

Its own memory component

Its own code component*/




// JavaScript Execution Phases

// JavaScript executes code in two phases:

// 1 Memory Creation Phase (Hoisting Phase)

/*JS scans the entire code

Memory is allocated for:

Variables

Functions

Declaration	Stored Value
var	undefined
let / const	Hoisted but in TDZ
Function Declaration	Entire function
Function Expression	undefined*/


/*2 Execution Phase

Code is executed line by line

Values are assigned

Functions are executed

For every function call, a new execution context is created and the same two phases run again.*/