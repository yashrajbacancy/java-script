const user = {
  name: "Kaushal",
  age: 25,
  address: {
    city: "Mumbai",
    pin: 400001
  }
};

const user2={...user,name:"yashraj"}
console.log(user.name, user2.name)
user2.address.city="ahmedabad"
console.log(user.address.city,user2.address.city)

/************************************************************************************************* */
const config = {
  ui: {
    theme: "light"
  }
};

const copy = { ...config };
copy.ui.theme = "dark";

console.log(config.ui.theme); // dark
//here we create a shallow copy of config as a copy and we assigned a theme:"dark" to the copy object but due to ui is non-primitive data type ui of copy and config reffer to the same memory refference so here theme of both object is "dark".

/********************************************************************************************************** */
function Test() {
  this.x = 10;
  return 20;
}

const t = new Test();
console.log(t.x); // 10
//it prints "10" because in constructor return object overrides  but return primitive ignored


/************************************************************************************ */
const base = {
  items: []
};

const obj1 = Object.create(base);
const obj2 = Object.create(base);

obj1.items.push(1);

console.log(obj2.items); // 
//here because of same prototype array is shared between both object.


/******************************************************************************************* */


function test(...nums) {
  nums.push(4);
  console.log(nums.length);
}

test(1, 2, 3);

/************************************************************************************************* */


