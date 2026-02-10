//  TASK 1 : Predict Output of Async Code

/*Code Block 1 : Basic Async
 Question:
 In which order below statements will be logged?*/

console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

Promise.resolve().then(function () {
  console.log("3");
});

console.log("4");

/*
Predicted Output:
1
4
3
2

Actual Output:
1
4
3
2

Explanation:
first synchronous code will run
so 1 and 4 will print

setTimeout goes to macrotask queue
promise then goes to microtask queue

after call stack is empty
microtask will run first so 3 prints
then macrotask will run so 2 prints
*/

/******************************************************************************************** */

/* 
 Code Block 2 : Nested Async
 Question:
 What will be the execution order?
*/

console.log("Start");

setTimeout(function () {
  console.log("Timeout 1");
  Promise.resolve().then(function () {
    console.log("Promise 1");
  });
}, 0);

Promise.resolve().then(function () {
  console.log("Promise 2");
  setTimeout(function () {
    console.log("Timeout 2");
  }, 0);
});

console.log("End");

/*
Predicted Output:
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2

Actual Output:
Start
End
Promise 2
Timeout 1
Promise 1
Timeout 2

Explanation:
Start and End are synchronous so they run first

Promise 2 is microtask so it runs next

Timeout 1 comes from macrotask
inside Timeout 1 promise is created
so Promise 1 goes to microtask and runs immediately

Timeout 2 is last macrotask
*/

/******************************************************************************************** */

/* 
 Code Block 3 : Multiple Microtasks
 Question:
 What will be the output order?
*/

console.log("A");

Promise.resolve().then(function () {
  console.log("B");

  Promise.resolve().then(function () {
    console.log("C");
  });

  console.log("D");
});

Promise.resolve().then(function () {
  console.log("E");
});

setTimeout(function () {
  console.log("F");
}, 0);

console.log("G");

/*
Predicted Output:
A
G
B
D
C
E
F

Actual Output:
A
G
B
D
C
E
F

Explanation:
A and G are synchronous so they print first

microtasks will run next
first promise prints B
then D
inside it another promise C is added
so C runs next
then E runs

after all microtasks finish
macrotask F will run
*/

/******************************************************************************************** */

/* 
 Code Block 4 : Complex Async Chain
 Question:
 Predict the output order
*/

console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

queueMicrotask(function () {
  console.log("3");
});

Promise.resolve().then(function () {
  console.log("4");
  queueMicrotask(function () {
    console.log("5");
  });
});

setTimeout(function () {
  console.log("6");
}, 0);

console.log("7");

/*
Predicted Output:
1
7
3
4
5
2
6

Actual Output:
1
7
3
4
5
2
6

Explanation:
1 and 7 are synchronous

queueMicrotask and promise both go to microtask queue
3 runs first
then 4 runs
inside 4 another microtask 5 is added
so 5 runs next

after microtask complete
macrotasks 2 and 6 will run
*/

/******************************************************************************************** */

/* 
 Code Block 5 : Async / Await
 Question:
 What is the execution order?
*/

console.log("Start");

async function asyncFunction() {
  console.log("Async 1");
  await Promise.resolve();
  console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function () {
  console.log("Promise 1");
});

setTimeout(function () {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Predicted Output:
Start
Async 1
End
Async 2
Promise 1
Timeout

Actual Output:
Start
Async 1
End
Async 2
Promise 1
Timeout

Explanation:
Start will print

async function starts
Async 1 prints
await moves remaining code to microtask

End prints

microtask runs:
Async 2 then Promise 1

macrotask Timeout runs last
*/

/******************************************************************************************** */

//TASK 2 : setTimeout Examples

/* 
 Exercise 1 : Print 1 to 5 with delay
 Question:
 Print numbers 1 to 5 with 1 second gap
*/

function countWithDelay() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

countWithDelay();

/*
Explanation:
loop runs immediately
delay is multiplied by i
so numbers print one by one after each second
*/
/******************************************************************************************** */
/* 
 Exercise 2 : Fix setTimeout loop bug
 Question:
 Fix code so output is 0 1 2
*/

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*
Explanation:
let has block scope
each loop gets its own i value
so after 1 second it prints 0 1 2
*/

/******************************************************************************************** */

/* 
 Exercise 3 : Countdown timer
 Question:
 Countdown from 10 to 0 and stop
*/

function countdown(start) {
  console.log(start);

  let timer = setInterval(function () {
    start--;

    if (start < 0) {
      clearInterval(timer);
      return;
    }

    console.log(start);
  }, 1000);
}

countdown(10);

/*
Explanation:
first value prints immediately

setInterval runs every second
value decreases by 1

when value becomes less than 0
clearInterval stops execution
*/
