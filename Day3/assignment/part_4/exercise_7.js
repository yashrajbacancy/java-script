const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};
user.greet();


//the output is Hello,undefined because an arrow functions don't have their own this keyword.and here this is act like it's global scope not an object scope so it's refer to the undefined not an alex.