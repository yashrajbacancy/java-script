// Advanced Slug Builder

// Scenario: Blog titles may contain punctuation and extra spaces.

// const input="  Learn JavaScript! In 30 Days??  "
// const output=input.trim().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
// console.log(output)

//output = "learn-javascript-in-30-days"

//************************************************************************************************************************* */

// Smart Pagination

// Scenario: Build reusable pagination logic.

// const items = [1,2,3,4,5,6,7,8,9,10];
// pageSize = 4
// page = 2

// const start=pageSize*(page-1);
// const end=pageSize*page;
// const output=items.slice(start,end)
// console.log(output)

//output = [ 5, 6, 7, 8 ]

/******************************************************************************************************************************** */

// Real-World Pipeline

// Scenario: Simulate an e-commerce checkout.

// Tasks:

// Remove items with qty = 0

// Calculate item totals

// Apply 10% tax

// Return final amount

// const cart = [
//   { name: "Laptop", price: 1000, qty: 1 },
//   { name: "Mouse", price: 50, qty: 2 },
//   { name: "Phone", price: 500, qty: 0 },
// ];

// const output = cart
//   .filter((c) => c.qty > 0)
//   .map((c) => c.price * c.qty + c.price * c.qty * 0.1)
//   .reduce((acc, c) => {
//     return (acc += c);
//   }, 0);
// console.log(output);

// output = 1210

/*********************************************************************************************************************** */



// const orders = [
//   { customer: "Alex", total: 100 },
//   { customer: "John", total: 200 },
//   { customer: "Alex", total: 50 }
// ];



// const output=orders.reduce((acc,item)=>{
//     acc[item.customer]=(acc[item.customer] || 0)+ item.total
//     return acc
// },{})
// console.log(output)

/*************************************************************************************************************************** */




// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]

// const output = fruits.reduce((acc,item)=>{

//   if(acc[item])
//     acc[item]+=1
//   else
//     acc[item]=1

//   return acc
// },{})
// console.log(output)


// output 
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
/************************************************************************************************************** */