// assignment 2 : any  vs  unknown

// question 1:
// create a function that accept any and perform operations without checks

function handleAny(value: any) {
  console.log(value.toUpperCase());
  console.log(value.length);
  console.log(value.toFixed(2));
}

// typescript allow everything here
// no error at compile time

handleAny("hello");
handleAny(123);

// this will compile fine, but at runtime it can crash
// because number dont have toUpperCase()
// so any is unsafe

// question 2:
// create same function using unknown and add type guards

function handleUnknown(value: unknown) {
  // console.log(value.toUpperCase());
  // if we try this directly , compiler give error
  // because value type is unknown

  if (typeof value === "string") {
    console.log(value.toUpperCase());
    console.log(value.length);
  }

  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

// now it will  works safely
handleUnknown("hello");
handleUnknown(123);

// here typescript force us to check type first
// so this is more safe

// question 3:
// compare compiler behavior and runtime safety

//in case of any compilation will done successfully, but at run time it will crash

//in case of unknown it will give error at compile time so it will not process further in runtime and make safe code

// question 4:
// create one variable using any

let dataAny: any = "Hello";

dataAny.toUpperCase();
dataAny();
dataAny.random.prop;

// no compile error
// but may crash at runtime

// question 5:
// create another variable using unknown

let dataUnknown: unknown = "Hello";

// dataUnknown.toUpperCase();
// compiler error here
// because type is unknown

if (typeof dataUnknown === "string") {
  dataUnknown.toUpperCase();
}

// we must check type first

// question 6:
// which one force you to write safer code?

// unknown force you to check type, so it make code safer
// any allow everything, so it is risky
