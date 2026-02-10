/* What is the output of below code?*/

const laptop = {
  brand: "Dell",
  getBrand: function () {
    return this.brand;
  },
};
const myBrand = laptop.getBrand();
console.log(myBrand);

//output : Dell

/* 
getBrand() method is called with laptop object and in that
this is bounded to laptopso it will return an "Dell" 
as a brand which is assigned to myBrand
and it logged in console
*/

/************************************************************************ */

/* in whichh order below statement will logged?*/

console.log(1);
Promise.resolve().then(() => {
  console.log(2);
});
console.log(3);

/* output :
1
2
3*/

/*
basic concept of event loop:

first main callstack will execute 
if statemt with promise then it will go to microtask queue
if statemt has setTimeout then it will go to macrotask queue

now callstack has the main priority for execution 
then microtask has highest priority  and in last macrotask has low prioroty

and this all things are managed by event loop

now in our above code

first main call stack will execute

so first console.log(1) will run and print "1"

Promise.resolve().then() is async,
so its callback will go into microtask queue

then next console.log(3) will run and print "3"

now call stack is empty,
so event loop will check microtask queue first

so promise callback will execute
and print "2"

so final output:
1
3
2
*/

/**************************************************** */

/* What is the output of below code?*/

Promise.reject("Error Occurred")
  .then(() => console.log("Success"))
  .catch((err) => console.log(err));

/*
Promise.reject("Error Occurred") creates a rejected promise

because of rejected promise now .catch() will direct execute

so it will print "Error Occurred"

output:
Error Occurred
*/

/************************************************************* */

/* What is the output of below code?*/

var status = "Offline";

const server = {
  status: "Online",
  getStatus: function () {
    return this.status;
  },
};

console.log(server.getStatus());

//output : "Online"

/*
server has a getStatus() method
and when we call this refer to server object 
so server has status:"Online"
so it func will return "Online"

*/

/************************************************* */

/* What is the output of below code?*/

Promise.resolve(10)
  .then((num) => num * 2)
  .then((result) => console.log(result));

// output : 20

/*
  first promise will resolved with value 10
  now it will go into first then and their this response is multiplied by 2 
  so this will send a 20 value to second then  as a result and in last console will print 20. 
  */

/********************************************************* */

/* What is the output of below code?*/

const user = {
  name: "Alex",
  printName() {
    console.log(this.name);
  },
};

const print = user.printName;
print();

// output :

/*
printName method is taken out from user object
and stored in print variable

now print() is called without any object

so this will NOT refer to user
it will refer to global object

global object does not have name = "Alex"

so this.name will be undefined

*/

/***************************************** */

/* What is the output of below code?*/

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// output :
/*
start
end
promise
timeout
*/

/*
as i mentioned above the working of event loop
 so based on that explanation 
 first console.log("Start") will run and print "start"
 then setTimeout(() => console.log("Timeout"), 0) will run and go into macrotask queue
then Promise.resolve().then(() => console.log("Promise"))will go into microtask queue
then console.log("End") will run and print "end"
then promise will resolve and print "promise"
then in last "timeout" will print


*/

/************************************************************** */

/* What is the output of below code?*/

const group = {
  title: "Developers",
  getTitle: () => {
    console.log(this.title);
  },
};

group.getTitle();
//output: undefined

/*
getTitle is an arrow function

arrow function does not have its own this
it takes this from its outer scope

here outer scope is global scope,
not the group object

global scope does not have title = "Developers"

so this.title will be undefined

*/
/***************************************************** */

/* What is the output of below code?*/

Promise.resolve(5)
  .then((val) => {
    console.log(val);
    return val + 5;
  })
  .then((val) => console.log(val));

// output : 5  10

/*
here first promise is resolved and it will return 5 to the  then 
after that then will executed and print "5"
and after repression evaluation it will return "10"
now in next then "10" will print.

*/
/*********************************************************************** */

/* What is the output of below code?*/

Promise.reject("Fail")
  .catch((err) => {
    console.log(err);
    return "Recovered";
  })
  .then((res) => console.log(res));

// output:
//Fail
//Recovered

/*
here promise is rejected so it will go direct in catch 
this rejection is catch by catch blaock and print error "Fail" which is received through promise
then it will return "recovered" to next then and it will 
print "recovered".

*/
/********************************************************* */

/* What is the output of below code?*/

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
  Promise.resolve().then(() => console.log("D"));
});

console.log("E");

//output : A E C D B

/**
 here first console.log('A') will run and print "A"
 then setTimeout() is evaluated and it will go into macrotask queue.
 then promise is resolved and it will go into microtask queue.
 now last line console,log('E') wll run and print "E".
 now microtask has high priority then macrotask 
 so promise is resolved and console.log("C") will run and print "C".
 now again in that promise is so  this will go in microtask and again this will run 
 and print "D".
 and in last setTimeout() will run and print "B".
 */

/******************************************************************* */

/* What is the output of below code?*/

const agent = {
  id: 101,
};

function showId() {
  console.log(this.id);
}

showId.call(agent);
showId.apply(null);

// output :
//101
//undefined

/*
here showId() is called with the agent object 
so in this case this of showId() is refer to agent object "101" will print
in next line we call with null and null is not refer to any so this will print "undefined"
*/

/****************************************************** */

/* What is the output of below code?*/

Promise.all([
  Promise.resolve("Success 1"),
  Promise.reject("Error 1"),
  Promise.resolve("Success 2"),
])
  .then((res) => console.log("Result:", res))
  .catch((err) => console.log("Caught:", err));

// output: Error 1

/*
promise.all() receives a array of promises.
here in this method if all promises will resolved then and
then it will output other wise it will throw and error.


here our second promise is rejected and throw error 
and because of this control will go direct in catch and print "Error 1".
*/

/************************************************* */

/* What is the output of below code?*/

const player = {
  score: 50,
  updateScore() {
    setTimeout(function () {
      console.log(this.score);
    }, 100);
  },
};

player.updateScore();

// output : undefined

/*

updateScore() is called using the player object,
so inside updateScore() this refers to the player.

But the function inside setTimeout() is a normal function.
When it runs, it does not keep the player context.

So inside setTimeout(), this is not player.
Because of this, this.score is undefined and undefined is printed.

*/

/*************************************************** */

/* What is the output of below code?*/

Promise.resolve(1)
  .then((x) => {
    throw new Error("Invalid");
  })
  .catch((err) => {
    console.log("Caught Error");
    return 10;
  })
  .then((x) => console.log(x));

/*
    output:
    Caught Error
    10

 */

/*
    First Promise.resolve(1) creates a resolved promise.
In the first then(), an error is thrown using throw new Error("Invalid").
Throwing an error inside then() makes the promise rejected.

Because of this rejection, control goes directly to the catch() block.
The catch() block prints "Caught Error" and returns 10.

Returning a value from catch() converts the promise back to resolved state.
So the next then() receives 10 and prints it.

    */
/******************************************* */

/* What is the output of below code?*/

async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
foo();
console.log("D");

// output : C A D B
/*
First console.log("C") is executed and prints C.

Then foo() is called.
Inside foo(), console.log("A") is executed and prints A.
The await Promise.resolve() pauses the function
and the remaining part of foo() is moved to the microtask queue.

After that console.log("D") is executed and prints D.
Once the current call stack is empty,
the microtask is executed and console.log("B") is printed.

*/
/****************************************** */

/* What is the output of below code?*/

Promise.resolve("Done")
  .finally(() => {
    console.log("Cleanup");
    return "Modified?";
  })
  .then((res) => console.log(res));

/*
  output :

  Cleanup
Done

  */
/*
  Promise.resolve("Done") creates a resolved promise.

The finally() block is executed regardless of promise result.
It prints "Cleanup".
The value returned from finally() is ignored.
finally() does not modify the resolved value of the promise.

So the original resolved value "Done" is passed to then(),
and then() prints "Done".

  */
/********************************************** */

/* What is the output of below code?*/

console.log(a);
var a = 5;

Promise.resolve().then(() => {
  console.log(a);
});

a = 10;

//output : undefined , 10

/*
First console.log(a) is executed.
Because a is declared using var, it is hoisted.
So at this time a exists but its value is undefined.
Hence undefined is printed.

Then Promise.resolve().then() is registered as a microtask.
After that a is assigned the value 10.
Once the current synchronous code is finished,
the microtask queue is executed.
Inside the then() block, console.log(a) runs.

Now a already has the value 10,
so 10 is printed.

*/
/********************************* */

/* What is the output of below code?*/

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T2"), 0);
});

Promise.resolve().then(() => console.log("P2"));

console.log("End");

//output : End p1 p2 t1 t2

/*
First the synchronous code is executed.
console.log("End") is printed first.

setTimeout callbacks are placed in the macrotask queue,
but they will run only after the call stack is empty
and all microtasks are completed.

Promise.then() callbacks are microtasks
and they execute before setTimeout callbacks.
So after "End" is printed,
the microtasks run first and print "P1" and "P2".

Inside the first Promise.then(), another setTimeout is created,
so "T2" is added to the macrotask queue.
After all microtasks are finished,
the macrotasks execute in order and print "T1" and then "T2".

*/
/****************************************** */

/* What is the output of below code?*/

class Manager {
  constructor(name) {
    this.name = name;
  }

  print = () => {
    console.log(this.name);
  };
}

const m = new Manager("Sarah");
const p = m.print;
p();

//output : Sarah

/*
An object m is created from the Manager class with name "Sarah".
The print method is defined as an arrow function.
Arrow functions do not have their own this.
They capture this from the surrounding context where they are created.

Here, print is created inside the constructor scope,
so this refers to the Manager instance.

When m.print is assigned to p and p() is called,
this still refers to the Manager object.
So this.name prints "Sarah".

*/

/*********************************************** */
