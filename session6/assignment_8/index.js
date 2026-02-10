/*
8) Create a Promise that resolves with the number 5.
Chain .then() to double the number, then another .then() to add 20,
and finally log the result.
*/
  Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 20)
    .then(result => console.log("Final Result:", result));

