/*JS codes for index.html and style.css*/

    //create anonymous funcs for basic interaction
    //create hover func



    //generates a random number between 0 and 100
    const getRandomNumber = () => Math.round(Math.random() * 100);
    //create a variable that contains Date obj
    let today = new Date();
    //function to return month with numbers as arguments
    let month = numOfMonth => {
        switch (numOfMonth) {
            case 0: 
                return 'Jan';
                break;
            case 1:
                return 'Feb';
                break;
            case 2:
                return 'Mar';
                break;
            case 3:
                return 'Apr';
                break;
            case 4:
                return 'May';
                break;
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
                break;
            case 7:
                return 'Aug';
                break;
            case 8:
                return 'Sep';
                break;
            case 9:
                return 'Oct';
                break;
            case 10:
                return 'Nov';
                break;
            case 11:
                return 'Dec';
                break;
            default:
                return 'Not Working';
                break;
        }
    };
    //simple date text
    let currentDate = `${today.getFullYear()} ${month(today.getMonth())} ${today.getDate()}`; 



    //remove an element from JStexts
    let date = document.getElementById('date');
    //document.getElementById('JStexts').removeChild(removeElement);

    //add button interactivity
    let dateButton = document.getElementById('dateButton');



    //creates a new p element
    let newjsSText = document.createElement('button');
    //sets new element's id to JStext
    newjsSText.id = 'button';
    //sets content inside new p 
    newjsSText.innerHTML = 'Return';

    

    //function to change innerHTML of removeElement to currentDate
    let clickButton = () => {
        date.innerHTML = currentDate;
        //document.getElementById('JStexts').appendChild(newjsSText);
        if (date.innerHTML == currentDate) {
            dateButton.style.display = 'none';
        }
    };
    


    //add event listeners for date button
    //dateButton.addEventListener('click', clearButton);
    dateButton.onclick = clickButton;

    //function to remove event listener clear button
    //let restoreButton = () => dateButton.removeEventListener('click', clickButton);
    //add event listener for newJsText to restore dateButton
    //newjsSText.addEventListener('click', restoreButton);




        

