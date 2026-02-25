// Create abstract class Service<T> with abstract method execute() .
// Extend it with UserService .


abstract class Service<T>{

    abstract execute():string
}

class UserService extends Service<string>{
execute(): string {
    return "i am from UserService class with the help of abstract methods of service class"
}
}