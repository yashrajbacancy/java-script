// SAVE10 ---> 10% Discount
// SAVE20 ---> 20% Discount
// NONE ---> No Discount

function applyCoupon(amount, couponCode) {
  if (couponCode == "SAVE10") return amount - amount * 0.1;
  else if (couponCode == "SAVE20") return amount - amount * 0.2;
  else if (couponCode == "NONE") return amount;
}
console.log(applyCoupon(1000,"SAVE10"));
console.log(applyCoupon(2000, "SAVE20"));
console.log(applyCoupon(500,"NONE"));
