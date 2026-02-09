/*Create a variable prices as an array of numbers
Write a function calculateTotal that:
Accepts a number array
Returns the total sum
Write another function that:
Accepts two numbers
Returns a string if the result is greater than 100
*/

let prices: number[] = [1, 2, 3, 4, 5];

function calculateTotal(arr: number[]): number {
  let sum: number = 0;

  arr.forEach((i) => {
    sum += i;
  });
  return sum;
}

console.log(calculateTotal(prices));

function conditionalReturn(a: number, b: number): string | number {
  if (a + b > 100) {
    return "Sum of two numbers is greater than 100";
  }
  return a + b;
}

/*
Answers:

Q1. What happens if you pass a string?
if we pass a string instead of number then typescript will show error.
string is not allowed where number type is defined.
code will not run until this error is fixed.


Q2. Which errors are caught before running the code?
typescript checks type related errors before running the code.
passing wrong data type like string instead of number.
returning wrong type from function.
assigning wrong type to variables or function parameters.

these errors are caught before javascript code runs
and help to avoid runtime bugs.
*/

