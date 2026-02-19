/*Create a function updateField that takes:
object
key
value
Ensure the value type matches the key type.
Try assigning wrong type and observe the error.
*/

function updateField<T,K extends keyof T>(obj:T,key:K,value:T[K]){

    obj[key]=value;

}
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Yashraj",
  age: 22
};

updateField(user, "name", "Rahul");
updateField(user, "age", 30);       
updateField(user, "age", "hello");



