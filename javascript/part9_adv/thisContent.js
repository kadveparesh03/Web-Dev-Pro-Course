const person ={
    name : "hitesh",
    greet(){
        console.log(`HI I am ${this.name}`)
    },
};

person.greet();

const greetFunction=person.greet;
greetFunction();

const boundGreet= person.greet.bind({name:"John"});
boundGreet();

//bind call and apply

