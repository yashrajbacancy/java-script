// assignment 4 : intersection types

// create order using intersection (&)

type OrderBase = {
  orderId: number;
  amount: number;
};

type Auditable = {
  createdAt: Date;
  createdBy: string;
};

// intersection mean combine both types
// so Order must have all property from both

type Order = OrderBase & Auditable;

const order1: Order = {
  orderId: 101,
  amount: 500,
  createdAt: new Date(),
  createdBy: "Sharma",
};

// if we remove any one property it give error
// because intersection need ALL properties

/*
const orderError: Order = {
  orderId: 101,
  amount: 500,
  createdAt: new Date()
};
*/

// error because createdBy is missing

// same thing using interface + extends

interface BaseOrder {
  orderId: number;
  amount: number;
}

interface AuditedOrder extends BaseOrder {
  createdAt: Date;
  createdBy: string;
}

// here also it combine properties
// extends mean child get all parent properties

const order2: AuditedOrder = {
  orderId: 202,
  amount: 1000,
  createdAt: new Date(),
  createdBy: "Admin",
};

// if we remove createdAt or createdBy
// compiler give error

// small example using intersection

type Person = {
  name: string;
};

type Contact = {
  phone: string;
};

// combine both

type PersonWithContact = Person & Contact;

const person1: PersonWithContact = {
  name: "Yash",
  phone: "9999999999",
};

// if we remove phone
// error because intersection need both

// same using interface

interface PersonBase {
  name: string;
}

interface PersonContact extends PersonBase {
  phone: string;
}

const person2: PersonContact = {
  name: "Rahul",
  phone: "8888888888",
};

// now small understanding

/*
intersection (&)

it merge multiple types
object must have all properties
good when we want combine features


union (|)

it choose one type
object can be this OR that
not both required


so simple line

intersection = merge everything
union = choose one
*/
