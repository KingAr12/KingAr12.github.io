//accessing box d with variable
let divBoxD = document.getElementById('bgImg');
//function to change backgroundImage of divBoxD
let changeBgImg = () => {
    divBoxD.style.border = "2px solid white";
    divBoxD.style.backgroundImage = "url('../imgs/DCPride22.JPG')";
    divBoxD.children[0].style.letterSpacing = '.6em';
}; 
//addEventlistener mouseover divboxd and changebgimg
divBoxD.addEventListener('mouseover', changeBgImg);