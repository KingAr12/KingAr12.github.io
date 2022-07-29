//generates a random number between 0 and 100
const getRandomNumber = () => Math.round(Math.random() * 100);



//add button interactivity
let dateButton = document.getElementById('button');
//function to change innerHTML of removeElement to currentDate
let clickButton = () => removeElement.innerHTML = currentDate;
//add event listener for date button
dateButton.addEventListener('click', clickButton);


//remove an element from JStexts
let removeElement = document.getElementById('JStexts').children[1];
//document.getElementById('JStexts').removeChild(removeElement);



//create a variable that contains Date obj
let today = new Date();
//simple date text
let currentDate = `${today.getFullYear()} ${today.getMonth()} ${today.getDate()}`; 



//creates a new p element
let newjsSText = document.createElement('p');
//sets new element's id to JStext
newjsSText.id = 'JStext'
//sets content inside new p 
newjsSText.innerHTML = currentDate;
//append new element to parent  
//document.getElementById('JStexts').appendChild(newjsSText); 



//add latest p element in JSTest
let newjsSTextTwo = document.createElement('p');
newjsSTextTwo.id = 'JStext';
newjsSTextTwo.innerHTML = 'appended!';
//document.getElementById('JStexts').appendChild(newjsSTextTwo); 



//Accessing the first child element of .projects class
let projectHeader = document.getElementsByClassName('projects')[0].children[0];
//projectHeader.style.backgroundColor = 'red';
