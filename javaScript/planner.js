//access the about me button
let aboutMeButton = document.getElementById('next-button');
//function to hide box a and show box b
let showAboutMe = () => {
    document.getElementsByClassName('a')[0].style.display = 'none';
    document.getElementsByClassName('b')[0].style.display = 'grid';
    document.getElementsByClassName('c')[0].style.display = 'none';
};
//add event listener for aboutMeButton with showAboutMe()
aboutMeButton.addEventListener('click', showAboutMe);

//access the goals button
let goalsButton = document.getElementById('next-button-two');
//function to hide box b and show box c
let showGoals = () => {
    document.getElementsByClassName('a')[0].style.display = 'none';
    document.getElementsByClassName('b')[0].style.display = 'none';
    document.getElementsByClassName('c')[0].style.display = 'grid';
};
//add event listener for goalsButton with showGoals()
goalsButton.addEventListener('click', showGoals);




//accessing box d with variable
let divBoxD = document.getElementById('bgImg');
//function to change backgroundImage of divBoxD
let changeBgImg = () => {
    divBoxD.style.border = "2px solid white";
    divBoxD.style.backgroundImage = "url('../imgs/DCPride22.JPG')";
    divBoxD.children[0].style.letterSpacing = '.6em';
    divBoxD.style.transitionDuration = "2s";
}; 
//addEventlistener mouseover divboxd and changebgimg
divBoxD.addEventListener('mouseover', changeBgImg);