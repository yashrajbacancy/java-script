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
//
user2.address.city="ahmedabad"
console.log(user.address.city,user2.address.city)
