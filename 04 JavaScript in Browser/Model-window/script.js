'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

//Function to open modal
const openModal = function () {
  //We are going to remove the hidden class so the model becomes visible
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModal);

//Function to close model
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Adding functionality to the crosee button
btnCloseModel.addEventListener('click', closeModal);

//Adding functionality out side the modal window
overlay.addEventListener('click', closeModal);

//Adding a keyboard event ; Note the keyboard event happens on the whole document

//The information of which key was pressed is stored in the event which is gonna occure as soon as any key is pressed. JS creates an object that store all the info about the key that was pressed
//we will be passing an parameter to the function genrally named as e, here we have written event. As soon as the event occure js will call this function with the event object as an argument
document.addEventListener('keydown', function (event) {
  //If we log out the event it will give the detail about the key pressed
  console.log(event);
  //As we see above that it log out as an object and in that object the key is a key for the value of which button was pressed
  console.log(event.key);
  //Now to add the function of closing when ESC key will be pressed
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
