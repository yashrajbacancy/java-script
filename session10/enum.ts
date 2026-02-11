// assignment 7 : enums

// create enum for payment state

enum PaymentState {
  INITIATED = "INITIATED",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

// enum is like group of fixed values
// here payment state can be only these 3

// function which accept only PaymentState enum

function handlePayment(state: PaymentState) {
  if (state === PaymentState.INITIATED) {
    console.log("Payment started...");
  } else if (state === PaymentState.SUCCESS) {
    console.log("Payment completed successfully.");
  } else if (state === PaymentState.FAILED) {
    console.log("Payment failed.");
  }
}

// valid usage

handlePayment(PaymentState.INITIATED);

handlePayment(PaymentState.SUCCESS);

// if we try wrong value

// handlePayment("SUCCESS");
// error because string is not PaymentState
// even if text same , still not allowed

// handlePayment("RANDOM");
// error because this value not exist in enum

/*
typescript make sure
only defined enum values can be passed

we cant pass random string

so enum give more strict control
and prevent wrong values

this make code more safe and clean
*/
