let caar = {
    make:"Toyota",
    model:"Camry",
    year:"2023",

    start: function(){
        return `${this.make} car got started in ${this.year}`;

    },
}

// console.log(caar.start())

function Person(name,age){
    this.name =name
    this.age =age
}
let john = new Person("john Doe",20)
// console.log(john.name)

function Animal(type){
    this.type=type
}
Animal.prototype.speak= function(){
    return `${this.type}makes a sound`
}

Array.prototype.hitesh =function(){
    return `Custom method ${this}` 
}


let myArray= [1,2,3,];
// console.log(myArray.type)

//Encapsulation

class BankAccout{
    #balance=0;

    deposit(amount){
        this.#balance +=amount
        return this.#balance;
    }
    getBalance(){
        return `$ ${this.#balance}`;
    }
}

let account = new BankAccout()
// console.log(account.getBalance())

//Abstraction

class Coffeemachine{
    start(){
        return `Starting the machine...`
    }
    brewCoffee(){
        return `Brewing coffee`;
    }
    pressStartButton(){
        let msg1=this.start();
        let msg2=his.brewCoffee()
        return `${msg1} + ${msg2}`
    }
}

let mymachine= new Coffeemachine()
// console.log(mymachine.start());
// console.log(mymachine.brewCoffee())
// console.log((mymachine.start))

// Polymorphism

// class Bird{
//     fly(){
//         return `flying...`

//     }
// }

// class Penguin extends Bird{
//     fly(){
//         return `Penguins can't fly`;
//     }
// }

// let bird =new bird();
// let penguin= new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());

class Calculator{
    add(a,b){
        return a+b
    }
}

// let minicalc = new Calculator()
// console.log(minicalc.add(2,3))

// console.log(Calculator.add(2,3))

//Getters and setters

class employee{
    #salary;
    constructor(name,salary){
        if (salary<0) {
            throw new Error("Salary cannot be in negative");
            
            
        }
        this.name=name;
        this.#salary=salary;
    }
    get salary(){
        return` You are not allowed to see salary`;
    }
    set salary(value){
        if (value<0) {
            console.error("Invalid salary")
        } else{
            this._salary=value;
        }
    }
}

let emp= new employee("Alice",-50000)
console.log(emp._salary);
emp.salary=-600000;