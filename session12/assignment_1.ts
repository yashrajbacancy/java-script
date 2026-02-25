// Create a type IsNumber<T> .

type isNumber<T>=T extends number ? true:false
type A=isNumber<number>
type B = isNumber<string>


// Create a type ExtractEmail<T> that extracts email type if present.


interface User {
id: string
name: string
email: string
role: "ADMIN" | "CUSTOMER"
isActive: boolean
}


type ExtractEmail<T>=T extends{email:infer U} ? U:never
type C=ExtractEmail<User>






