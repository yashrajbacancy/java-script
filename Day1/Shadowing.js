 /*Block Scope

 A block is anything inside { }

let and const are block scoped

var is NOT block scoped

 A variable exists only inside the block where it is declared.*/

// Example:
{
  const a = 10;
  let b = 20;
  var c = 30;

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError
console.log(c); // 30

/*Shadowing

 Shadowing occurs when a variable in the inner scope has the same name as a variable in the outer scope.

Both are different variables

Inner variable hides (shadows) the outer variable*/

// ✅ Legal Shadowing
let a = 5;

{
  let a = 10;
  console.log(a); // 10
}

console.log(a); // 5

var x = 1;

{
  let x = 2; // ✅ Legal
}

// ❌ Illegal Shadowing
let x = 1;

{
  var x = 2; // ❌ Error
}


/*Reason:

var is function scoped

It tries to overwrite let, which is not allowed*/