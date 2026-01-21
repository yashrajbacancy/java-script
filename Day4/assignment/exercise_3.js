function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
//here when we create a myPhone object then it's constructor return an object and in this case a new object which refre to this is hide or overwride by return object so any object which you will create from SmartPhone it will always return {brand: "Generic", os: "Android"}.so brand value is "Generic".

console.log(myPhone.getBrand); // undefined
//because of a it's not a object of SmartPhone we can't access a SmartPhone.prototype.getBrand() because it;'s created with smartphone because of that it will print "undefined"



