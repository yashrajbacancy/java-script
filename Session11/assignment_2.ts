// Create a function activateUser that accepts only objects having isActive: boolean

interface User{
    isActive:boolean
    id:number
    name:string
    email:string
}

const user1:User={
    isActive:true,
    id:1,
    name:"Yashraj",
    email:"abc@gmail.com"
}

function activateUser< T extends {isActive: boolean}>(obj:T){
    if(obj.isActive){
        console.log(obj.name)
    }
}

activateUser(user1)


// Create another function that requires both id and email

function activateUser1< T extends {id:number,email:string}>(obj:T){
    console.log(obj.id, obj.email)
}

activateUser1(user1)

// Try passing invalid objects and observe TypeScript errors.

/*
Argument of type 'User' is not assignable to parameter of type '{ isActive: boolean; }'.
  Property 'isActive' is missing in type 'User' but required in type '{ isActive: boolean; }'
*/