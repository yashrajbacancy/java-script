// interface practice assignment

//  create common base interface

interface BaseUser {
  id: number;
  name: string;
}


//  extend base for admin and customer

interface Admin extends BaseUser {
  role: "admin";
  permissions: string[];
}

interface Customer extends BaseUser {
  role: "customer";
  purchaseHistory: number[];
}


//  create objects

const adminUser: Admin = {
  id: 1,
  name: "Sharma",
  role: "admin",
  permissions: ["manage_users", "view_reports"],
};

const customerUser: Customer = {
  id: 2,
  name: "Rahul",
  role: "customer",
  purchaseHistory: [101, 102, 103],
};

// if we remove any required property
// compiler will give error

//  function that accept BaseUser

function printBasicInfo(user: BaseUser): void {
  console.log("User ID: " + user.id);
  console.log("Name: " + user.name);
}

// this function only need id and name
// so both admin and customer can pass

//  pass both

printBasicInfo(adminUser);
printBasicInfo(customerUser);

// it work because both extend BaseUser

// api response interface

//  create api response interface

interface ApiResponse {
  success: boolean;
  message: string;
}

//  function that accept this interface

function handleResponse(response: ApiResponse): void {
  if (response.success) {
    console.log("Success: " + response.message);
  } else {
    console.log("Failed: " + response.message);
  }
}

//  extend and reuse interface

interface UserApiResponse extends ApiResponse {
  data: BaseUser[];
}

const userResponse: UserApiResponse = {
  success: true,
  message: "Users fetched successfully",
  data: [adminUser, customerUser],
};

handleResponse(userResponse);

// since UserApiResponse extend ApiResponse
// we can pass it in handleResponse

//  create product interface

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

//  create product object

const product1: Product = {
  id: 101,
  name: "Laptop",
  price: 50000,
  inStock: true,
};

// if we remove any property like price or name
// compiler give error
// because all fields are required