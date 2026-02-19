/*Create a generic function called wrapInArray that accepts any value and returns it inside an
array.*/

function wrapInArray<T>(value:T):T[]{
    return [value]
}
console.log(wrapInArray("yashraj"))
console.log(wrapInArray(132))


/*Create a generic interface PaginatedResponse<T> with properties:
items: T[]
total: number*/

interface User{
    id: number
    name: string
}
interface PaginatedResponse<T> {
    items: T[]
    total: number
}

const response:PaginatedResponse<User>={
    items:[
        {id:1,name:"yashraj"},
        {id:2,name:"hiren"}
    ],
    total:2
    
}