// Create a PaymentState discriminated union.

type Initialize = {
  state: "initialize";
};
type Processing = {
  state: "processing";
};
type Successfull = {
  state: "successfull";
};
type Failed = {
  state: "failed";
};

type Refunded = {
  state: "refund";
};

type PaymentState = Initialize | Processing | Successfull | Failed | Refunded;

// Add exhaustive checking to handle all states.

function checkPaymentState(paymentState: PaymentState): string {
  switch (paymentState.state) {
    case "initialize":
      return "payment Initialized";

    case "processing":
      return "Payment is in Processing";

    case "successfull":
      return "Payment Done Successfully";

    case "failed":
      return "Payment Failed";
    case "refund":
      return "Amount is Refunded in Your Account";

    default: {
      const _exahustive: never = paymentState;
      return _exahustive;
    }
  }
}

console.log(checkPaymentState({ state: "successfull" }));

// Create a generic ApiResponse<T> for products.

type ApiSuccess<T> = {
  status: "success";
  data: T;
};
type ApiError = {
  status: "error";
  message: string;
};

type ApiResponse<T> = ApiSuccess<T> | ApiError;

// Write a type guard to check if response is success.

function isSuccess<T>(response: ApiResponse<T>): response is ApiSuccess<T> {
  return response.status == "success";
}

type Product = {
  id: number;
  name: string;
  price: number;
};

const response: ApiResponse<Product[]> = {
  status: "success",
  data: [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
  ],
};

function checkProductResponse(response: ApiSuccess<Product[]>): Product[];
function checkProductResponse(response: ApiError): string;
function checkProductResponse(response: ApiResponse<Product[]>): Product[] | string {
  if (isSuccess(response)) {
    return response.data;
  } else {
    return response.message;
  }
}
console.log(checkProductResponse(response));
