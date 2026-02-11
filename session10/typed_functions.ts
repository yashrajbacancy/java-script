// assignment 8 : typed functions



// function with required and optional parameter
// and return type also written

function createUser(name: string, age: number, isAdmin?: boolean): string {

  if (isAdmin) {
    return name + " (Admin) - Age " + age;
  }

  return name + " (User) - Age " + age;
}


createUser("Sharma", 22, true);

createUser("Yashraj", 25);


// here name and age is required
// isAdmin is optional
// if we not pass isAdmin , it still works



// small function
// calculate final price with optional discount


function calculateFinalPrice(price: number, discount?: number): number {

  if (discount !== undefined) {
    return price - (price * discount) / 100;
  }

  return price;
}


calculateFinalPrice(1000, 10);

calculateFinalPrice(1000);


// price is required
// discount is optional
// if no discount then it just return same price




// another simple example

function greetUser(username: string, greeting?: string): string {

  if (greeting) {
    return greeting + ", " + username;
  }

  return "Hello, " + username;
}


greetUser("Sharma", "Good Morning");

greetUser("Yashraj");



// how typescript check correctness


// createUser("Sharma");
// error because age is required

// calculateFinalPrice("1000");
// error because price must be number

// greetUser(123);
// error because username must be string



/*
typescript check everything at compile time

it make sure required parameter is passed
it check type also
optional parameter become type | undefined
so we must handle it properly

it stop wrong values before runtime
so less bug happen
*/
