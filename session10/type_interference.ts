// assignment 1: type inference

// question 1:
// declare variables using let and const and see what type typescript gives automatically

let age = 25;

// typescript see 25 and understand it is number
// so age type become number

// age = "hello";
// if we try this , it give error
// because age is number
// we cant put string inside number variable

let userName = "Yashraj";

// typescript see text so it become string type

// userName = 100;
// error because userName is string
// we cant assign number here

const country = "India";

// we use const so value can not change
// typescript keep exact value type "India"

// country = "USA";
// error because const variable cant change

// question 2:
// try giving wrong type and see error

let isActive = true;

// typescript understand this is boolean

// isActive = 10;
// error because isActive is boolean
// we cant assign number to it

// once type is decided  we cant change it later

// question 3:
// write function without writing return type

function add(a: number, b: number) {
  return a + b;
}

// we did not write return type
// typescript check return value
// a + b is number
// so it automatically set return type as number

let result = add(2, 3);

// result type become number

function greet(name: string) {
  console.log("Hello " + name);
}

// this function not return anything
// so typescript automatically set return type as void
