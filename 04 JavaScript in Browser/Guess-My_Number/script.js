'use strict';

/*
//Selecting an element in javascript using document.querySelector
//Getting the text of the element using .textContent
//Remember multiple dots are executed from left to right
console.log(document.querySelector('.message').textContent);
//Output will be : Start guessing...
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// document.querySelector();
// TypeError: Failed to execute 'querySelector' on 'Document': 1 argument required, but only 0 present.

//We used value instead of textContent as there is no text present at the moment inside the .guess class
console.log(document.querySelector('.guess').value); 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Implementing Game logic

//Task 1: Dealing with the Check! button so that when ever we click that button something happens

// We are going to use the .addEventListener method to complete this task.
//The .addEventListener method in JavaScript enables you to assign a specific function, called an event handler, to an HTML element, defining how that element should respond when a particular event (such as a click, mouseover, or key press) occurs. This method essentially allows you to add interactivity to web pages by specifying what actions should be taken in response to user interactions with elements on the page, making it a fundamental tool for creating dynamic and responsive web applications.

//The `.addEventListener` method takes two arguments:

// 1. **Event Type (String):** The type of event you want to listen for, such as "click," "mouseover," "keydown," etc.

// 2. **Event Handler (Function):** The function that should be executed when the specified event occurs. This function is often referred to as the event handler or callback function.

// Here's a basic example of using `.addEventListener`:

// ```javascript
// element.addEventListener('click', function() {
//   // Your code to handle the click event goes here
// });
// ```

// In this example, `'click'` is the event type, and the anonymous function is the event handler. When the element is clicked, the provided function will be executed.
//Remember a Function is just a value and so it can be passed as an argument
/*
document.querySelector('.check').addEventListener('click', function () {
  //Here we will simple logging out the value whenever we click on the button
  //   console.log(document.querySelector('.guess').value);
*/
/*
  const guess = document.querySelector('.guess').value;

  // we did type conversion because whenever we get an input from the user interface it comes in string
  console.log(guess, typeof guess);

  //Why we haven't simply used this " const guess = Number(document.querySelector('.guess').value);" and added a sperate numGuess variable
*/
//Answer : In JavaScript, when you try to convert an empty string to a number using Number(), it results in the value 0. This is the default behavior of the Number() function. So, when there is no input in the "guess" input field, Number('') returns 0.
//This lead to the problem that when our box was empty and we clicked on the check button the result was zero and we needed to differntiate empty box with zero otherwise  if (!guess) this would have created an issue as it would take empty box === 0 as a faulty and the condition would be true so even if we type 0 in the box we would still be getting ❌ No Number
/*
  if (guess === '') {
    document.querySelector('.message').textContent = '❌ No Number';
  } else {
    // Convert the input to a number
    const numGuess = Number(guess);
    console.log(numGuess, typeof numGuess);
  }
});*/

//Above code is filled with explaination comments so we will rewrite the actual code below //

//<----Implementing the Game logic---->//

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.mysteryBox').style.backgroundColor = '#10c816';

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess, typeof guess);
  //When there is no input
  if (guess === '') {
    document.querySelector('.message').textContent = '❌ No Number';
  }
  //When player wins
  else if (Number(guess) === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#68b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.mysteryBox').style.backgroundColor = 'white';
    //Styles are applied inline
    //value should always be a string

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣💥You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // //When number is too high
  // else if (Number(guess) > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💣💥You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When Number is too Low
  // else if (Number(guess) < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💣💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//<--Reset Function-->
const x = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

//<--Implementing game reset button-->

document.querySelector('.again').addEventListener('click', x);

//<--Implementing game dificulties-->

//Easy Mode
document.querySelector('.easy').addEventListener('click', function () {
  const easyFun = function () {
    x();
    document.querySelector('.between').textContent = '(Between 1 and 20)';
    document.querySelector('.mysteryBox').style.backgroundColor = '#10c816';
  };
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  easyFun();
  document.querySelector('.again').addEventListener('click', easyFun);
});

//Medium Mode
document.querySelector('.medium').addEventListener('click', function () {
  const mediumFun = function () {
    x();
    document.querySelector('.between').textContent = '(Between 1 and 30)';
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.mysteryBox').style.backgroundColor = '#ebf30b';
  };
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  mediumFun();
  document.querySelector('.again').addEventListener('click', mediumFun);
});

//Hard Mode
document.querySelector('.hard').addEventListener('click', function () {
  const hardFun = function () {
    x();
    document.querySelector('.between').textContent = '(Between 1 and 50)';
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.mysteryBox').style.backgroundColor = '#be1717';
  };
  highscore = 0;
  document.querySelector('.highscore').textContent = highscore;
  hardFun();
  document.querySelector('.again').addEventListener('click', hardFun);
});

//<--DRY code-->

//We can use this function to make the code simple
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//We are not using the above function for now but this is an example to show how we can make long syntax into simple function
