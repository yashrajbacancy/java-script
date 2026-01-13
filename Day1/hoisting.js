/*Hoisting means that during the memory creation phase, JavaScript moves declarations to the top of the scope.

 Only declarations are hoisted, not initializations.

Hoisting with var*/
console.log(a);
var a = 10;


// Output:

// undefined


// Reason:

/*a is hoisted

Memory is allocated as undefined

Hoisting with let and const*/
console.log(b);
let b = 20;


// ❌ ReferenceError

// Reason:

/*let and const are hoisted

But they stay in Temporal Dead Zone (TDZ)

Cannot be accessed before initialization

Function Hoisting
Function Declaration (Works)*/
hello();

function hello() {
  console.log("Hello");
}

// Function Expression (Does NOT Work)
hello();

var hello = function () {
  console.log("Hello");
};


/*Reason:

Variable hello is hoisted as undefined

Function is assigned later*/