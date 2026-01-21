class Counter {
  static count = 0;
  count = 10;

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
//here getCount() is a simple instance method which can access by class's object and when we create a c1 object of class Counter c1 has access a getCount() method and it will return a count which is initialized as a "10" which is a normal variable so the output is "10".

console.log(Counter.getStaticCount()); // 2
//getStaticCount() is a static method which can only access by class name and in this mwthod it count a static count which is different from simple count variable and when a new class  is is created constructor will run and increase a count by 1. and here we create a two objects of this class  so count is 2 so the output is "2".

console.log(c1.getStaticCount());  // Error
//as i considered above getStaticCount() is a static method and it can't accessible by class object so when a c1 object is called this method it will raise an error.


