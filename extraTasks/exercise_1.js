const transactions = [
  { id: 1, userId: 10, amount: 500 },
  { id: 2, userId: 11, amount: 300 },
  { id: 3, userId: 10, amount: 700 },
  { id: 1, userId: 10, amount: 500 }, // duplicate id
  { id: 4, userId: 12, amount: 200 },
  { id: 2, userId: 11, amount: 300 }  // duplicate id
];
//remove duplicate id also 

// output:{
//   '10': { totalAmount: 1200, transactions: [ 1, 3 ] },
//   '11': { totalAmount: 300, transactions: [ 2 ] },
//   '12': { totalAmount: 200, transactions: [ 4 ] }
// }

const output=transactions.reduce((acc,{id,userId,amount})=>{
    if(!acc[userId]){
        acc[userId]={
            totalAmount:amount,
            transactions:[id]
        }
    }
    else{
        if(!acc[userId].transactions.includes(id)){
            acc[userId].totalAmount+=amount,
            acc[userId].transactions.push(id)
        }
    }
    return acc
},{})
console.log(output)

