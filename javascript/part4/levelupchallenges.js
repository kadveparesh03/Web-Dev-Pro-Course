//  1. Write a `for` loop that through the array 1 [ " green tea" , "black tea", " chai", "oolang tea"]` and stops the loop when it finds " chai". 
// Stores all teas before "chai " in a new array named `SelectedTeas` . 

let teas= [ " green tea" , "black tea", "chai", "oolang tea"];
let SelectedTeas=[];

for (let i = 0; i < teas.length; i++) {
    if(teas[i]=== "chai"){
        break;

    }
    SelectedTeas.push(teas[i]);    
}

// console.log(SelectedTeas);

// 2. Write a `for` loop that loops through tje arrau `[ "London", "New YOrk", "Paris","Berlin"]` and skips "Paris".replaceStore the other cities in a new array named `visitedCities`. 

// let cities=[ "London", "New YOrk", "Paris","Berlin"];
// let visitedCities=[];

// for (let i = 0; i < cities.length; i++) {
//     if(cities[i]==="Paris" || cities[i]==="Paris"){
//         continue;
//     }
//     visitedCities.push(cities[i])

// }


// console.log(visitedCities);

//3 . Use a 1for-g loop to iterate through the array `[1,2,3,4,5]` and  stop when the number `4` is found. Store the numbers before `4` in an array named `smallNumbers`.

let numbers=[1,2,3,4,5]
let smallNumbers=[]

for(const num of numbers){
    if (num ===4 ) {
        break;
        
    }
    smallNumbers.push(num);
}


// console.log(smallNumbers);

// 4. Use a `for=of ` loop to iterate through the array 1["chai", "green tea", "black tea"] and skip "herbal tea" . 
// store tje other teas in an array named `preferredTeas`

let teaTyeps= ["chai", "green tea", "black tea"]
let preferredTeas=[]

for(const tea of teaTyeps){
    if(tea=== "herbal tea" ){
        continue;
    }
    preferredTeas.push(tea);
}
// console.log(preferredTeas);


// 5.  use a `for-in ` loop through an aobject containing city populatuions
// stop the loop when the   population cities populations of `berliln` is found and store all previous cities populations in a new object named `cityPopulations`.

let citiesPopulation= {
    "London": 890000,
    "New York": 8400000,
    "Paris": 220000,
    "Berlin":350000
}

let citynewPopulation={}

for(const city in citiesPopulation){
citynewPopulation[city]= citiesPopulation[city];
if (city == "Berlin") {
    break;
    
}
citynewPopulation[city]=citiesPopulation[city];
    
}

// console.log(citynewPopulation);

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));


let WorldCIties= {
    "London": 890000,
    "New York": 8400000,
    "Paris": 220000,
    "Berlin":350000
};

let largestCities= {}

for (const city in WorldCIties){
    if ( WorldCIties[city] <30000){
        continue
    }
    // largestCities[city]= WorldCIties[city]
}

/* 
7. Write a `forEach` loop that iterates through the array ["earl grey","green tea", "chai", "oolang tea"] stop the loop when "chai" is found , and store all previous tea types in an array named `availableTeas` */

let TeaCollection = ["earl grey","green tea", "chai", "oolang tea"]
let availableTeas=[]

TeaCollection.forEach(function(tea) {
    if (tea === 'chai') {
        return;
        
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);


// 8. Write a `foreach ` loop that iterates through the array ["Berlin", "tokyo", "Sydney", "Paris"] skip the "Sydney" and store the other cities on a new array named `traveledCities`

let myWorldCIties= ["Berlin", "tokyo", "Sydney", "Paris"]
let traveledCities =[]

myWorldCIties.forEach(city => {
    if(city=== "Sydney"){
        return
    }
    traveledCities.push(city)
    
});

// console.log(traveledCities);

// 9. Write a `for` loop that iterates through the array [2,5,7,9]. skip the value `7` and multiply the rest by 2. Store the results in a new array `doubledNumberes`. 

let mynumber =[2,5,7,9]
let doubledNumberes=[]

for (let i = 0; i < mynumber.length; i++) {
    if (numbers[i]===7){
        continue
    }
    doubledNumberes.push(numbers[i] *2)    
}

console.log(doubledNumberes);


// 10. Use a `for-of` loop to iterate through array ` ["chai", "greentea","blacktea","jasmine tea", herbal tea"]` and stop when the length of the current tea name is gretor than 10.
// Store the teas iterated over in an array named `shortTeas`

let myteas=["chai", "greentea","blacktea","jasmine tea", "herbal tea"]

let shortTeas=[]

for(const tea of myteas){
    if (tea.length > 10){
        break;
    }
    shortTeas.push(tea)
}

console.log(shortTeas);
