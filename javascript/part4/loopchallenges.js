// 1. WRite the while loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable names "Sum"

// let sum =0
// let i=1

// while(i<=5){
//     sum +=i;
//     i++;
// }
// // console.log(sum);

// 2. Write a "while" that counts down from 5 to 1 and stores the number in an array named "coutdown". 

// let coutdown =[]
// let j= 5;

// while (j>=1) {
//     coutdown.push(j);
//     j--;
// }
// console.log(coutdown);

// // 3. Write a "do while" loop that prompts a user to enter their favourite tea type until they enter "stop". store each tea type in an array named "TeaCollection"

// let TeaCollection = []
// let tea

// do {
//     tea=prompt(`Enter your favourite tea (type "stop" to finish)`)

//     if (tea!== "stop") {
//         TeaCollection.push(tea)
        
//     }
// } while (tea !== "stop");

// console.log();

// 4. write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'. 

// let total=0
// let k=1;

// do{
//     total +=k;
//     k++;

// }while (k<=3);

// 5. Write a `for` loop that multiplies each element in the arrya `[2,4,6]` 
// by 2 and stores the results in a new array named `multipliedNumbers`

// let multipliedNumbers=[];
// let numbers= [2,4,6]

// for (let l=0 ; l<numbers.length; l++ ){
//     // takenumbers=numbers[l]*2;
//     // multipliedNumbers.push(takenumbers);
//     multipliedNumbers.push(numbers[l]*2)
// }

// console.log(multipliedNumbers);


// 6. Write a `for` loop that lists all the cities in the array ["Paris","New york", "tokyo", "London"]` and stores each city in a new array named ` citylist`. .

let cities =["Paris","New york", "tokyo", "London"];
let cityList=[];

for (let c = 0; c < cities.length; c++) {
    const element = cities[c];
    cityList.push(myCity);
    
}

console.log(cityList);
