//TASK 2 : setTimeout Examples

/* 
 Exercise 1 : Print 1 to 5 with delay
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


/******************************************************************************** */
/*
 Exercise 2 : Fix setTimeout loop bug
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

/************************************************************* */

/*


 Exercise 3 : Countdown timer
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
