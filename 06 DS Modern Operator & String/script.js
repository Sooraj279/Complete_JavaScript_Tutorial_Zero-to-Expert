//<---Ch 1 Destructuring Arrays-->
//Destructuring is an ES6 feature and it's basically a way of unpacking values from an array or an object into separate variables or simply to break a complex data structure down into a smaller data structure like a variable.

"use strict";

const restaurant = {
  name: "Indian Masale",
  location: "xyz street Indian",
  categories: ["Indian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Tikka", "Bread", "Kofte", "Salad"],
  mainMenu: ["Naan", "Panner", "Noodles", "Pizza"],
};

//Practice Example

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//// same thing destructured below
const [x, y, z] = arr;
console.log(x, y, z);
