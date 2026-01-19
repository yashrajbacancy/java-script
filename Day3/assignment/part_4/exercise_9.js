const inventory = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Phone", price: 500, stock: 0 },
    { name: "Mouse", price: 50, stock: 10 }
];

const output=inventory.filter((p)=>p.stock>0).map((p)=>p.price*p.stock).reduce((acc,p)=>{return acc+=p},0)
console.log(output)


