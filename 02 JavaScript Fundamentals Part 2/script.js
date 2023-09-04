//From this point onwards we will use // for genral statements and /* */ for code that can be uncommented out for testing

//<---Ch 1 Activating Strict Mode-->

"use strict";

/*
//we use strict mode to write a secure JS code
//It is important that the 'use strict' should be the first line of code otherwise it won't work, note that comment are not counted here.
//we can also activate strict mode for a specific function or a block but there is no point of doing that so let's just activate it for the whole code 
//Strict mode helps us to avoide accidental errors and bugs in our code as it ristict certain things and it also introduce visible error in developer console where in other situations JS will Fail silently

//example : 

let hasDriversLicense = false;
const passTest = true;
//Below we will intensionally omit the s in the above variable name 
if(passTest) hasDriverLicense= true;
if (hasDriversLicense) console.log("I can Drive");


//Without Strict Mode Output will be nothing
//With Strict mode Output will be this error "ReferenceError: hasDriverLicense is not defined" as you can see the one where we omitted the s that is showing undefined using var, let or const this is how we catch the error.

//Strict mode will also throw an error if we try to use a reserved keyword as a variable.. Example

const interface = 'Hello';
const private = 545;

//output : SyntaxError: Unexpected strict mode reserved word 
*/

//<---Ch 2 Functions--->

/*
//A function is a piece of code that can be reused over and over again.
//The only works when we call them
//Function Declaration

function logger(){
    //function body
    console.log("My name is Sooraj");
}

//calling / running / invoking function
logger();
logger();
logger();

//Output:
//My name is Sooraj
//My name is Sooraj
//My name is Sooraj

//functions with parameters
function fruitProcessor(apples, oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

fruitProcessor(12,32); //what we are giving is called argument
//output: 12 32
//What happend to the juice that was returned you ask
//Well the juice was returned and now the fruitProcessor(12,32) has became the value that was returned so now we can console log that value like

const processedJuice = fruitProcessor(12,32);
console.log(processedJuice);
//or simply console.log(fruitProcessor(12,32));
//Output is 
//12 32 
//Juice with 12 apples and 32 oranges

//Note the arguments can be anything not just 12 and 32

//Functions are use to implement Dry code or Don't repeat yourself code
//console.log is a built in function
//return keyword will immediately exit the function that means no other statements will execute in that function after that 
*/

//<---Ch 3 Function Declarations Vs. Expressions--->

/*
//Function Declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(2000); 
console.log(age1)

//Annonamous Function / Function Expression 
const calcAge2 = function(birthYear) {
    return 2023 - birthYear;
}

// "function(birthYear) {return 2023 - birthYear;}" is an expression and we know expression produces a value and we are storing it in calcAge2 here. And calcAge2 will be the function

const age2 = calcAge2(2000);
console.log(age2);

//It is to be noted that in JS functions are just values and so it can be stored in variables

//MAJOR DIFFERENCE BETWEEN FUNCTION DECLARATION & FUNCTION EXPRESSION

//Function Declarations can be called before defining it

const say = sayWorld();

function sayWorld(){
    console.log("Hello World");
}

//Output: Hello World

//But the same is not true with Function Expressions

const say2 = sayWorld2();

const sayWorld2 = function(){
    console.log("Hello World");
}

//Output: ReferenceError: Cannot access 'sayWorld2' before initialization

//Which one to use ?
//It's totally on your personal choice just know how to use both
*/

//<---Ch 4 Arrow Functions (ES6 update)--->

/*
//Arrow Function
const calcAge3 = birthYear => 2023-birthYear; //we can omit the return keyword and curly brackets as there is only one line to execute.
const age3 = calcAge3(2000);
console.log(age3);

//const variable = parameter(s) => {....return value}; 

//A complex Arrow function(one parameter)
const yearUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

console.log(yearUntilRetirement(2000));

//A complex Arrow function(multiple parameter)
const yearUntilRetirement2 = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} Years`
}

console.log(yearUntilRetirement2(2000, "Sooraj"));

//MAJOR DIFFRENCE BETWEEN ARROW FUNCTION & OTHER 2 FUNCTIONS ABOVE IS THAT
//Arrow function do not get a 'this' keyword
//We will learn about 'this' keyword later
*/

//<---Ch 5 Functions calling other Functions--->

/*
//To understand this let us take the fruitProcessor example but this time the fruits is to cut in pieces

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples, oranges){
    const cutApples = cutFruitPieces(apples);
    const cutOranges = cutFruitPieces(oranges);

    const juice = `Juice with ${cutApples} pieces of apples and ${cutOranges} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(3,4));
*/

// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.

// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

// GOOD LUCK 😀

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//<---Ch 6 Introduction to Arrays--->

/*
//First Data Structure

const friend1 = 'Ruben';
const friend2 = 'Oggy';
const friend3 = 'Prj Rocks';

//All can be store in one Array
//1st Way of declaring an Array
const friends = ['Ruben', 'Oggy', 'Prj Rocks'];
console.log(friends);

//2nd Way of declaring an Array
const years = new Array(1991, 1982, 2000, 2004);
//Array() is an inbult function and we use new keyword before it otherwise it's not gonna work
console.log(years);

//Arrays indexing starts with 0
//If we want to print out the 1st item of an array then
console.log(friends[0]);
//Output: Ruben

//the length of an Array
console.log(friends.length);
//Output: 3
// .length is the property which we will learn more about in objects

//Last element of an array
console.log(years[years.length-1]);
//Output: 2004

//Replacing element in an Array
friends[2] = 'Subhamita';
console.log(friends);

//Since array is not the primitive value that's why it is mutable even if it is stored in const variable, What we cannot do is redeclaring the variable 

// friends = ["bob"]; X

//Array can store different types of elements
const firstName = 'Sooraj';
const sooraj = [firstName, 'Prasad', 2037 - 1991, 'teacher', friends];
console.log(sooraj);
console.log(sooraj.length);

// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const years2 = [1990, 1967, 2002, 2010, 2018];
  
  //calcAge(years2) this won't work
  const age1 = calcAge(years2[0]);
  const age2 = calcAge(years2[1]);
  const age3 = calcAge(years2[years.length - 1]);
  console.log(age1, age2, age3);
  
  const ages = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
  console.log(ages);
  */

//<---Ch 7 Basic Array Operations (Methods)--->

/*
const friends = ['Ruben', 'Oggy', 'Prj Rocks'];

//Adding element to the last of an Array
friends.push('Subhamita');
console.log(friends);

//push is also a function and it returns the lenght of the Array and this can be proved like
const newlength = friends.push();
console.log(newlength);
//Output: 4 ; as we didn't push any item this time 

//Adding element to the start of an Array
const newlength2 = friends.unshift("Raj");
console.log(friends);
console.log(newlength2);
//And just like push() , unshift() also return lenght of the Array

//Removing element from the last of an Array
const removedElement = friends.pop();
console.log(friends);
console.log(removedElement);
//pop() function return the element that was removed

//Removing element from the start of an Array
const removedElement2 = friends.shift();
console.log(friends);
console.log(removedElement2);
//return the removed element

//Returning the index of an element
console.log(friends.indexOf("Ruben"));
//Output: 0
console.log(friends.indexOf("Bob"));
//Output: -1

//Checking if the element is present in an Array or not
console.log(friends.includes("Ruben"));
//Output: true
console.log(friends.includes("Bob"));
//Output: false
//It uses a strict checking so to test
friends.push(23);
console.log(friends.includes("23"));
//Output: false
console.log(friends.includes(23));
//Output: true

//use case of includes method
if(friends.includes("Prj Rocks")){
    console.log("You have a friend called Prajjal")
}
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

//<---Ch 8 Introduction to Objects--->

/*
//Array - Only values with index
const moodyArray = [
    'Sooraj',
    'Prasad',
    2023-2000,
    'teacher',
    ['Ruben','Oggy','Prajjal']
];

//Object - Key-Value Pair (keys are also called properties)
//(Simple Way to create an Object)
const moodyObject = {
    firstName : 'Sooraj',
    lastName : 'Prasad',
    age : 2023-2000,
    job : 'teacher',
    friends : ['Ruben','Oggy','Prajjal']
};

//The order of the value now don't matters when we are trying to retive them
*/

//<---Ch 9 Dot Vs. Bracket Notation--->

/*
const moodyObject = {
    firstName : 'Sooraj',
    lastName : 'Prasad',
    age : 2023-2000,
    job : 'teacher',
    friends : ['Ruben','Oggy','Prajjal']
};

console.log(moodyObject);

//To get a property from an Object there are two ways.
//Dot notation 
console.log(moodyObject.lastName);
//Bracket notation
console.log(moodyObject['lastName']);
//DIIFERNCE between dot and bracket notation is that in bracket notation you can put any expression but not in dot notation

const nameKey = "Name";
console.log(moodyObject['first'+nameKey]);

//console.log(moodyObject.'first'+nameKey); X

const interestedIn = prompt('What do you want to know about Moody? Choose between firstName, lastName, age, job, and friends');

if (moodyObject[interestedIn]) {
    console.log(moodyObject[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }

  //Adding Properties using dot and bracket notation
  moodyObject.location = 'India';
  moodyObject['email'] = 'xyz@yahoo.in';
  console.log(moodyObject);
  */

//<---Ch 10 Object Methods--->

/*
  const moodyObject = {
  firstName : 'Sooraj',
  lastName : 'Prasad',
  birthYear : 2000,
  job : 'teacher',
  friends : ['Ruben','Oggy','Prajjal'],
  hasDriverLicense : true,
  //We will add a function as a key value pair
 
  // calcAge : function(birthYear){
  //   return 2023 - birthYear;
  // }
  
  //calcAge stores a function value
  //Now we will use 'this' keyword
 
  // calcAge : function(){
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // }
  

  //We will store the value in a new property to avoid calculation everytime
  calcAge : function(){
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  //Now moodyObject has a new key pair added when the above function is run2
  getSummay : function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriverLicense?"has":"do not have"} a driver licence.`
  }
};

//Above is similar to function expression just that in above calcAge is now a property
// const calcAge = function(birthYear){
//   return 2023 - birthYear;
// } 

//Here is how we can call that function only when there is a parameter
//Dot notation
// console.log(moodyObject.calcAge(2000));
//Bracket notation
// console.log(moodyObject['calcAge'](2000));

//Now as we can notice that the birthYear is already defined in the object itself then there is no need to send that as a parameter but the question is then how do we use that and the ans is 'this' keyword

//We comment out the function with parameter and we will look how we use 'this' keyword

console.log(moodyObject.calcAge());
//'this' is equal to the object calling the method or the object on which method is called
//why to use this keyword why can't just type moodyObject.birthYear instead?
//Simply because that will violate don't repeat yourself principal and if we change the name of the object then it must be changed everywhere

//Now as we know we can call moodyObject.calcAge() multiple times but then there is a calculation everytime so what we will do is create a property inside the function of moodyObject and store the value inside 
//So now we can call
console.log(moodyObject.age);

//Note : without calling moodyObject.calcAge() the moodyObject.age will give undefined because then that would not have been calculated inside the object

//Challege
//"Jonas is a 46-year old teacher, and he has a driver's licence"

// console.log(`${moodyObject.firstName} is a ${moodyObject.age}-year old ${moodyObject.job}, and he ${moodyObject.hasDriverLicense?"has":"do not have"} a driver licence.`)

//we created a function inside the object to solve the above challenge
console.log(moodyObject.getSummay());

//Remember we called methods on Arrays as well, it's because they are also a special kind of objects and that's why they have method like push(), pop() etc.
*/

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

//<---Ch 11 Iteration : The For Loop--->

/*
//Loop will run until the condition is true
for(let x = 1; x <= 10; x++){
  console.log(`Now the value is ${x}`)
}
*/

//<---Ch 12 Looping Array, Breaking and Continuing--->

/*
const moodyArray = [
  'Sooraj',
  'Prasad',
  2023-2000,
  'teacher',
  ['Ruben','Oggy','Prajjal'] //type is object
];

for(let i = 0; i < moodyArray.length; i++){
  console.log(moodyArray[i], typeof moodyArray[i])
}

//If I want to create an Array just with the type of the items present in the above Array then

const typeArray = [];

for(let i = 0; i < moodyArray.length; i++){
  // typeArray[i] = typeof moodyArray[i];
  //Same top and bottom
  typeArray.push(typeof moodyArray[i]);
}

console.log(typeArray);

//Calculating birth year using Array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//Continue and Break
//Continue is like if the condition match then move on, just like what you should do when find red flags in your partner

console.log("--Only String--")
for (let i = 0; i < years.length; i++) {
  if(typeof moodyArray[i] !== 'string') continue;
  console.log(moodyArray[i], typeof moodyArray[i]);
}

console.log("--Break With Number--")
for (let i = 0; i < years.length; i++) {
  if(typeof moodyArray[i] === 'number') break;
  console.log(moodyArray[i], typeof moodyArray[i]);
}
*/

//<---Ch 13 Looping Backwards and Loops in Loops--->

/*
const moodyArray = [
  'Sooraj',
  'Prasad',
  2023-2000,
  'teacher',
  ['Ruben','Oggy','Prajjal'] //type is object
];

//Backwards

for(let i = (moodyArray.length - 1); i>= 0; i--){
  console.log(moodyArray[i]);
}

//Loop in Loop

//getting items of inner array
console.log("--Friends--")
for(let i = 0; i < moodyArray.length; i++){
  if(typeof moodyArray[i] !== 'object') continue
  for(let j = 0; j< moodyArray[i].length; j++){
    console.log(moodyArray[i][j]);
  }
}

//another example
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/

//<---Ch 14 The While Loop & Do while loop--->

/*
let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

//While condition do not satisfies
//Imagin you have a dice and you do not stop rolling it until it's 6

//These two are the two math inbuilt functions used
console.log(Math.trunc(8.73465));
console.log(Math.random());

let dice = Math.trunc(Math.random() * 6) + 1;

//Solution with While loop

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a ${dice} Loop is about to end...`);
}
//Problem with the above code is that if the value of dice is 6 before entering the loop then the loop will never even run once

//I improvised the code using do while that means  the code will run atlest once even if the 1st number itself is 6

do {
  console.log(`You rolled a ${dice}`);
  if (dice === 6) {
    console.log('Loop is about to end...');
    break;
  }
  else dice = Math.trunc(Math.random() * 6) + 1;
  
} while (dice !== 6)
*/

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

//<---END OF FUNDAMENTALS PART 2--->
