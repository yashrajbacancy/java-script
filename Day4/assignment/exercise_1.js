const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;
  
  return copy;
}

const newRegistry = cloneAndModify(registry);


console.log(registry.active.length); // 2
//here because of spread operator we create a shallow copy of that object and for non primitive data types it will reffrence to the same and we push a new object in array so now length will become 2 so length is 2.


console.log(registry.active[0].name); // Gamma
//in this active is a array and active[0] means you are accessing a first object of array so in that { id: 1, name: "Gamma" } this will return and then .name will access a name attribute in that object so finally Gamma will print.

console.log(registry.version); // undefined
//in this we are giving a version to the new object not to the old one and we are trying to access a old object's version whhich is not defined because it's a shallow copy and it will not use refference for primitive data types so undefined will print.






