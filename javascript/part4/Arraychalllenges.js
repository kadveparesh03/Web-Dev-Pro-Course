/* declare am array matchMedia,e "tea falvours" that contains the stirng "Greeen Tea ", "BLack tea " and "oolong tea",
Acces the first element of  the array and store it in a vaiable named 'firstTea' */

let teaFlavors = ["Green tea", "Black Tea", "OOlaang Tea"]

let teaFl= new Array ( "Green tea", "Black Tea", "OOlaang Tea" );

const firstTea = teaFlavors[0]

/*
2.  Declare an array names "Cities" containing "London ", "Tokyo", "Paris" ,and "New york". 
access the third element in the array and store it in a variable names "FavouriteCity". */ 

let Cities= ["London ","Tokyo", "Paris" , "New york"]

const FavouriteCity= Cities[3]

// console.log(FavouriteCity);


/* 
3.  you have an Array names 'TeaTypes' containing "herbal tea", "white tea", and " masala chai " ., 
Change the second element of the array to "Jasmine Tea" 
*/

let TeaTypes= ["herbal tea", "white tea",  " masala chai "]

TeaTypes[1]= "Jasmine Tea"



// console.log(TeaTypes);

/*
4. Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney".
add "Berlin " to the array using the ' push' method. 
*/

let citiesVisited= ["Mumbai" , "Sydney"]

// citiesVisited[citiesVisited.length]="Berlin"

citiesVisited.push("Berlin")

// console.log(citiesVisited);

/* 
5. You have an array named 'TeaOrders' with 'chai', 'iced tea', 'matcha', and 'earl grey' . 
Remove the last element of the array using the pop method and store it in a variable names 'lastOrder'. 
*/

let TeaOrders= ["chai", "iced tea", "matcha", "earl grey"];
const lastorder = TeaOrders.pop();
// console.log(TeaOrders);
// console.log(lastorder);

/* 
6. you have an array names popularities 'popular tea' containing "greenTea" , "oolang tea", and "chai ".
Create a soft copy of this array  names "softcopyTeas".
*/

let popularTeas = ["greenTea" , "oolang tea","chai "]
let softcopyTeas= popularTeas

// console.log(softcopyTeas);
// console.log(popularTeas);

/*
7. 
you  have an array names 'topcities' containig "berlin ", "singapore", and "New york "
create a hard copy og this array and named "HardCopyCities"
*/

let topCities= ["Berlin", "Singapore","Newyork"]
let HardCopyCities =[...topCities]
let HardCopyCi
// ties= topCities.slice();
topCities.pop()
// console.log(HardCopyCities);


/*
8. You have two arrays: "eupopeanCIties" containinng "PAris" and "rome","Asian Cities " containing "TOkyo " and "Bangkok" 
merege these two arrays into a new array names "WorldCIties"
*/

let eupopeanCIties =["Paris", "Rome"]
let AsianCities = ["Tokyo", "bangkok"]

let WorldCIties= eupopeanCIties.concat(AsianCities)



// console.log( WorldCIties);

/*
9. You have an array named "teaMenu " containing "masala chai", "oolang Tea" "green Tea" , "earl grey" .
Find the length of the array and store it in a variable named "menulength". 
*/

let teaMenu=["masala chai", "oolang Tea" ,"green Tea" , "earl grey"]

let menulength= teaMenu.length;
// console.log(menulength);

/*
10. You have an array named "citybucketlist" containing "Kyoto","london", "cape Town" ,"vancouver" 
check if "London" is in the array and store the result in a variable named "isLondonInList"
 */

let citybucketlist = ["Kyoto","london", "cape Town" ,"vancouver"]

let isLondonInList= citybucketlist.includes("london");
console.log(isLondonInList);




