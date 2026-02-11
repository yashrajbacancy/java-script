// assignment 5 : type aliases

// create reusable alias for union type

type UserRole = "admin" | "customer" | "guest";

// now we can use UserRole instead of writing union again

let role1: UserRole = "admin";
let role2: UserRole = "customer";

// role1 = "manager";
// error because manager not inside UserRole
// only these 3 values allowed

// create reusable alias for intersection type

type PersonName = {
  name: string;
};

type PersonNumber = {
  num: string;
};

// combine both using intersection

type Person = PersonName & PersonNumber;

// now UserRecord must contain all property from both types

const person1: Person = {
  name: "Sharma",
  num: "999999999",
};

// if we remove any one property
// compiler give error
// because intersection need all fields

// create type alias for string | number

// assignment 5 : type aliases

// create reusable alias for union type for person role

type PersonRole = "student" | "teacher" | "admin";

// now we use PersonRole instead of writing union again

let role1: PersonRole = "student";
let role2: PersonRole = "teacher";

// role1 = "manager";
// error because manager not part of PersonRole
// only these 3 values allowed

// create reusable alias for intersection type for person

type PersonName = {
  name: string;
};

type PersonContact = {
  phone: string;
};

// combine both using intersection

type Person = PersonName & PersonContact;

// now Person must have both name and phone

const person1: Person = {
  name: "Sharma",
  phone: "9999999999",
};

// if we remove phone or name
// compiler give error
// because intersection need all properties

// create type alias for order id

// assignment 5 : type aliases

// union type for user role

type UserRole = "admin" | "customer" | "guest";

let userRole1: UserRole = "admin";
let userRole2: UserRole = "customer";

// role not allowed outside union
// userRole1 = "manager";   error

// intersection example for person

type PersonName = {
  name: string;
};

type PersonNumber = {
  num: string;
};

// combine both

type Person = PersonName & PersonNumber;

const person1: Person = {
  name: "Sharma",
  num: "999999999",
};

// if remove name or num
// compiler give error

type ID = string | number;

let userId: ID = 101;
let orderId: ID = "ORD-2024";

// both correct because ID allow string or number

// userId = true;
// error because boolean not allowed

// small understanding about why alias is useful

/*
without alias

we need to write string | number again and again
it look messy and long


with alias

type ID = string | number

now we just write ID everywhere


if later we want to change type
we change only in one place
*/
