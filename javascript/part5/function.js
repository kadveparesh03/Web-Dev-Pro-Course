// function makeTea (typeofTea){
//     return`Make ${typeofTea}`
//     console.log(test);   
// }
let TeaOrder=makeTea("Lemon Tea");
// console.log(TeaOrder)

function orderTea (typeType){
    function confirmOrder(chai){
        return `Order Confirmed for chai`;
    }
    return confirmOrder()
}

let orderConfirmation= orderTea("chai")
// console.log(orderConfirmation)

const calculateTotal= (price,quantity)=>{
    return price * quantity
}

let totalCost=calculateTotal(499,100)
// console.log(totalCost)

// Higher Order Function and nested functions in javascript


function makeTea(typeofTea){
    return `maketea:${typeofTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}

let order=processTeaOrder(makeTea)
// console.log(order);


function CreateTeaMaker(){
    return function(TeaType){
        return`Making ${TeaType}`
    }
}

let teaMaker=CreateTeaMaker();

console.log(teaMaker("Green Tea"));