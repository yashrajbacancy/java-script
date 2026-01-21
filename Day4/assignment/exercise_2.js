function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; 
Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen? 
//here wehn we inherit dog from animal we do a same prototype of both and assigned to dog so in this case both are refference to the same prototype object and because of that when we called a bark() method from  Animal's object it's accessible and print "Woof!"

console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
//here output is "Animal" because as above same refference prototype object Dog's original prototype will overwrite by Animal and in this all property will overwrite including constructor also.and both share and refference same prototype it will give "Animal" as a constructor.


/******************************************************** */

//correct version


//Dog.prototype = Animal.prototype;
// ==> change the above assignment
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

//above two lines will correct code and give output like below

genericAnimal.bark(); 
//this will give error


console.log(myDog.constructor.name);
//this will print Dog



