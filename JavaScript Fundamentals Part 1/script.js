//From this point onwards we will use // for genral statements and /* */ for code that can be uncommented out for testing

// <---ch 02 Hello world--->
// Console code

/*
alert("Hello World");

let js = 'amazing'

if (js === 'amazing') alert("JavaScript is Fun")
     //Runs

js = 'boring'

if (js === 'amazing') alert("JavaScript is Fun")
    // Not Run 

48+8+23-10
output 61   
*/

//<---ch 03 Intro to JS--->
//What is JavaScript?
//JavaScript is a HIGH-LEVEL, OBJECT-ORIENTED, MULTI-PARADIGM PROGRAMMING LANGUAGE

//<---ch 04 Linking JS--->

//One way to write JS is to write in HTML Body or Head inside script tag
//Sencond way is to link this external file at the end of HTML body and genrally we name it as script.js file name 
//Test

/*
let js = 'amazing';
if(js === 'amazing') alert("JS is Fun");
*/

//<---ch 05 Values and Variable--->

/*
let js = "amazing";
console.log(40+20+30+10);

console.log("Moody") //Printing Value
console.log(23);

let firstName = "Sooraj"; //Variable Declaration
console.loglog(firstName);
*/

//Naming Variable Convention

// 1) camelCase
// 2) cannot start with a number but can start with _ or $
// 3) variable name can only contain letters, numbers, underscore and dollar sign 
// 4) coonot be a reserveded JS keyword
// 5) should not start with a uppercase letter
// 6) constants should all be in uppercase 
// 7) variable name must be descriptive


//<---ch 06 Data Types--->

// Values are of two types : Objects and Primitive

/*
//objects
let me = {
    name1:'sooraj'
};

//primitive
let firstName2 =  'sooraj';
let age = 22;
*/

//The 7 primitive data types

// 1) Number : Floating point numbers -> used for decimals and integers
// let age = 23; 
// In JS all integers and floats are simply Numbers unlike other programming lang
// 2) String : Sequence of characters -> used for text
// let firstName  = 'Sooraj';
// the string value must be in "" or it will be confused with variable
// 3) Boolean : Logical type that can only be true or false -> used for decision taking
// let fullAge = true;
// 4) Undefined : Value taken by a variable that is not yet defined('empty value')
// let children;
// 5) Null : Also means 'empty' value
// we will fo throught it in details later
// 6) Symbol(ES2015) : Value that is unique and cannot be changed [Not useful for now]
// 7) BigInt(ES2020) : Larger integers that the Number type can hold


// JavaScript has dynamic typing : We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
//Note : Value has type , not variable

/*
let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof JavaScriptIsFun);
//Output : boolean
console.log(typeof 23);
//Output : number
console.log(typeof 'sooraj');
//Output : string

JavaScriptIsFun = 'Yes';
console.log(typeof JavaScriptIsFun);
//Output : string ; that is dynamic typing

let year;
console.log(year);
//Output : undefined
console.log(typeof year);
//Output : undefined
//undefined is both value and type

year = 2022;
console.log(typeof year);
//Output : number

//Error im typeof operator
console.log(typeof null)
//Output : object
//This is a bug as null is just null not an object although this error is not corrected for legacy reasons
*/

//<---ch 07 let, const and var--->

/*
let age = 20;
age = 30; //reassigning or variable mutation

const BIRTHYEAR =  2000;
// BIRTHYEAR = 1992 
//Above will give an error : Assignment to constant variable.
//that's why BIRTHYEAR is immutable

// const JOB;
//Above will give an error :  Missing initializer in const declaration

//Old way of defining the variable var
var job = 'programmer'
job = 'teacher'

//Use of var should be avoided due to certain issues will be discused later

//variable should not be define without any of these three as it will create problem with the scopes
*/

//<---ch 08 Basic Operators--->

/*
// Math operators
const now = 2037;
const ageSooraj = now - 1991;
const ageSarah = now - 2018;
console.log(ageSooraj, ageSarah);

console.log(ageSooraj * 2, ageSooraj / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Sooraj';
const lastName = 'Prasad';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageSooraj > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//typeof operator
console.log(typeof ageSooraj)
*/

//<---ch 09 Operators Precedence--->

/*
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 , right to left
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

//Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
let markWeight = 78;
let markHeight = 1.69;
let JohnWeight = 92;
let johnHeight = 1.95;


// markWeight = 95;
// markHeight = 1.88;
// JohnWeight = 85;
// johnHeight = 1.76;


const BMIMark = markWeight  / markHeight ** 2;
const BMIJohn = JohnWeight / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

//////////////////////////////////
// let variable can be stored in const even if that has no defined value
/*
let test;
const TEST = test;
console.log(TEST)
//Output : Undefined
*/

// <---ch 10 Strings and Template Literals(``)--->

/*
const firstName = 'Sooraj';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
// above two same result
*/

// <---ch 11 Taking Decision: If/Else Statements--->

/*
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}
*/

//<--ch 12 Type Conversion and Coercion--->
 
/*
//Type conversion : when we manually change the type
//Type coercion : when js automatically do the type change


//Type Conversion
const inputYear = '2000';
console.log(inputYear + 18); // Type Coercion
//Output : 200018
console.log(Number(inputYear), inputYear);
//Output : 2000 "2000"
console.log(Number(inputYear) + 18);
//Output : 2018
console.log(Number('Sooraj'));
//Output : NaN (Not a Number)
console.log(typeof NaN);
//Output : number (As it is a number but an invalid one)
console.log(String(23), 23);
//Output : 23 in white that's a string and 23 in purple that's a number


//Type Coercion
// '+' is used for string concatination
console.log('I am' + 23 + ' years old');
//Output: I am 23 years old
console.log('23'-'10'-3);
//Output: 10
console.log('23'/'2');
//Output: 11.5

let n = '1' + 1; //11
n -= 1
console.log(n);
//Output : 10
*/

//<--ch 13 Truthy and Falsy Values--->

/*
//Falsy values are those values that are not actual false but will become false once we try to type convert them into boolean

//5 falsy values : 0, '', undefined , null, NaN (false not needed to be include)
//other than these all are truthy value
console.log(Boolean(0)); //falsy
console.log(Boolean(undefined));// falsy
console.log(Boolean('Jonas'));//truthy
console.log(Boolean({}));//truthy (empty object)
console.log(Boolean(''));//falsy

const money = 100;
//below is type coercion
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}
//Output : Don't spend it all ;)

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

//Output : Height is UNDEFINED
//Although the height is defined we will still get that output and that's an issue although this can be solve using logical operators
*/

//<---ch 14 Equality Operators: == vs. === --->

/*
// === : It's the strict equality operator that check both values are true or not without and type coercion, on the other hand
// the not of the above is !== (strict not)
// == : It's the loose equality operator which check both values are true or not and it does allows type coercion
// the not of the above is != (loose not)
//Eg. 18 === 18 :  true
//    18 === '18' : false
//    18 == 18 :  true
//    18 =='18' : true

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');
*/

//<--ch 15 Boolean Logic--->

//The AND, OR & Not operators : play with true and false

//<---ch 16 Logical Operators--->

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
*/

//<---ch 17 The switch statement--->

/*
const day = 'friday'; //prompt("What's your day?");

//It does the strict comparision

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
*/

//<--ch 18 Statements and Expressions--->

/*
//Expression : a piece of code that produces a value
3 + 4
1991
true && false && !false

//Statement : a bigger piece of code that get excuted and which does not produce a value of it's own. 

if (23 > 10) {
  const str = '23 is bigger'; //'23 is bigger' is a expression
}

//in templete literals we can only put expressions inside the {}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

//me will still be an expression as it gets replaced by the value
*/

//<---ch 19 The Conditional (Ternary) Operator --->

/*
const age = 23;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/