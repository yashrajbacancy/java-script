// Assignment 3: Union Types

//  Part 1: Define Roles using type

type Admin = {
  role: "admin";
  permissions: string[];
};

type Customer = {
  role: "customer";
  purchaseHistory: number[];
};

type Guest = {
  role: "guest";
  name: string;
};

type User = Admin | Customer | Guest;

//  Part 2: Create real objects

const adminUser: User = {
  role: "admin",
  permissions: ["manage_logs", "hr_activity"],
};

const customerUser: User = {
  role: "customer",
  purchaseHistory: [4, 6, 8],
};

const guestUser: User = {
  role: "guest",
  name: "yashraj",
};

//  Part 3: Function that narrows using role

function checkUser(user: User) {
  if (user.role === "admin") {
    console.log("Admin permissions:", user.permissions);

    // console.log(user.purchaseHistory);
    // Error: Property does not exist on type 'Admin'
  } else if (user.role === "customer") {
    console.log("Customer history:", user.purchaseHistory);
  } else {
    console.log("Guest name:", user.name);
  }
}

checkUser(adminUser);
checkUser(customerUser);
checkUser(guestUser);

// Part 4: Create union of two roles using `type`

type AdminOrCustomer = Admin | Customer;

function handleAdminOrCustomer(user: AdminOrCustomer) {
  if (user.role === "admin") {
    console.log(user.permissions);
  } else {
    console.log(user.purchaseHistory);
  }
}

handleAdminOrCustomer(adminUser);
handleAdminOrCustomer(customerUser);

// Part 5: Create union using interfaces

interface Manager {
  role: "manager";
  teamSize: number;
}

interface Employee {
  role: "employee";
  salary: number;
}

type Staff = Manager | Employee;

const managerUser: Manager = {
  role: "manager",
  teamSize: 10,
};

const employeeUser: Employee = {
  role: "employee",
  salary: 50000,
};

function handleStaff(staff: Staff) {
  if (staff.role === "manager") {
    console.log("Team size:", staff.teamSize);
  } else {
    console.log("Salary:", staff.salary);
  }
}

handleStaff(managerUser);
handleStaff(employeeUser);

