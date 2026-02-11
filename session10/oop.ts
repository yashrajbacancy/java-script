// assignment 9 : access modifiers

// create a service class
// only required method should be public
// internal data should be private

class UserService {
  private users: string[] = []; // internal data , should not access from outside

  public addUser(name: string): void {
    this.users.push(name);
  }

  public getUsers(): string[] {
    return this.users;
  }

  private log(message: string): void {
    console.log("log:", message);
  }
}

// here users array is private
// so outside class we cant access it directly

const service = new UserService();

service.addUser("Sharma");
service.addUser("Rahul");

console.log(service.getUsers());

// service.users   error
// because users is private

// service.log("hello")   error
// because log is private

/*
why private?

users is internal data
we dont want anyone change it directly
they must use addUser method

log method also internal use only
not needed outside

so only required methods should be public
*/

// now example with public, private and protected

class Person1 {
  public name: string;
  private age: number;
  protected city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  public getAge(): number {
    return this.age;
  }
}

const p1 = new Person1("Yash", 25, "Delhi");

console.log(p1.name); // allowed because public

console.log(p1.getAge()); // allowed

// console.log(p1.age);   error because private

// console.log(p1.city);  error because protected

/*
public  -> can access anywhere

private -> only inside same class

protected -> inside class and child class only
not outside

*/
