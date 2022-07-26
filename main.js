const getRandomNumber = () => Math.round(Math.random() * 100);

let today = new Date();

let currentDate = `${today.getDate()} ${today.getMonth()} ${today.getFullYear()}`; 

document.getElementById('JStext').innerHTML = currentDate;

