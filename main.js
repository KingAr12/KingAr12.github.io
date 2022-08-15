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




        //manual import code that gets a random name from the elements stored in the arrays below

                const firstNameArr = ['Grognak', 'Jamoose', 'Pkola', 'King', 'R\'quell', 'Woy', 'Qelsh', 'Banister', 'Slader', 'Xinar', 'Langley', 'Joseph', 
                'Eduardo', 'Joaquin', 'Adam', '', 'Mecka', 'Griggori', 'Vascque', 'Serashi', 'Pilaf', 'Dlut', 'Geomat', 'Doguq', 'Ronia', 'Delfrene',
                'Tupsig', 'Vahlqa', 'Jayward', 'Frumtpon', 'Carliser'];
                const lastNameArr = ['Maiople', 'Killowog', 'Qoits', 'Arciaga', 'Sombersand', 'Ceod', 'Vopnar', 'Fozzy', 'Gizzard', 'Pomernan', 'Squiresome', 
                'Azurin', 'Acevado', 'Hill', 'Santiago', '', 'Shlecka', 'LaFlaum', 'Drangoe', 'Dain', 'Goldguard', 'Oivae', 'Pirgub', 'Wirestreak', 
                'Tourne', 'Kornerstied', 'Leugh', 'Vejwa', 'Woltnik', 'Guilderen', 'Dome'];
                const titleArr = ['The Terrible', 'The Great', 'The Divine Dragon', 'The Creator', 'The Perciever', 'Enormous Jopn', 'mK12', 
                'The Duke of Arsella', 'The ShapeShifting Reptile', 'Insane Plectr', 'The Knight', 'The Bard', 'Lustful Demon', 'Dream God', 'The Artist', '',
                'of Frecka', 'The Contanuus', 'Final Drekl', 'Forlorne', 'The Merchant', 'The Plunderer', '', 'of The Forgotten', 'The Maternal Ruler',
                'Mother of Jamoose', 'The Youngest', 'The Yeoman', 'The Rich', 'The Plunderer'];
                //array length of each vars above
                var firstNameArrLength = firstNameArr.length;
                var lastNameArrLength = lastNameArr.length;
                var titleArrLength = titleArr.length;
                //function to generate a message with randomized names and titles
                const getRandomFantasyName = (first, last, title1) => {
                    //getRandomIndex() of each array
                    const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)
                    //variables each containing array's getRandomIndex()
                    const firstNameArrIndex = getRandomIndex(firstNameArr);
                    const lastNameArrIndex = getRandomIndex(lastNameArr);
                    const titleArrIndex = getRandomIndex(titleArr);
                    //variables of randomly chosen names and titles
                    const firstName = firstNameArr[firstNameArrIndex];
                    const lastName = lastNameArr[lastNameArrIndex];
                    const title = titleArr[titleArrIndex];    
                    first = firstName;
                    last = lastName;
                    title1 = title;
                    //userInput.removeEventListener('click', getName);
                    return (first === '') ? `${last} ${title1}`
                    : (last === '')  ? `${first} ${title1}`
                    : (title1 === '') ? `${first} ${last}`
                    : `${first} ${last} ${title1}`;
                };

    
    //create varaible accesing id userInput
    let userInput = document.getElementById('button');
    //variable accessing p element of userInput
    let randomName = document.getElementById('userName');
    //function to show a random name
    let getName = () => {
        randomName.style.display = 'block';
        randomName.innerHTML = getRandomFantasyName()
    };
    //add event listener for userInput
    userInput.addEventListener('click', getName); 
    //function for mousedown and mouseup for margin effect
    let randomNamefocus = () => {
        randomName.style.marginRight = '1.5em';
    };
    let randomNameUnfocus = () => {
        randomName.style.marginRight = '2em';
    };
    //add event listener for userinput and focus()
    userInput.addEventListener('mousedown', randomNamefocus); 
    userInput.addEventListener('mouseup', randomNameUnfocus);




    //add latest p element in JSTest
    let newjsSTextTwo = document.createElement('p');
    newjsSTextTwo.id = 'JStext';
    newjsSTextTwo.innerHTML = 'appended!';
    //document.getElementById('JStexts').appendChild(newjsSTextTwo); 



    //access element with id input
    let userText = document.getElementById('input');
    //create func for input
    let clickToType = event => {
        //event.target.style.width = '14em';
        //event.target.style.height = '1.5em';
        event.target.style.fontSize = '140%'
    };
    //func to undo clickToType
    let resetClickToType = event => {   
        //event.target.style.width = '';
        //event.target.style.height = '';
        event.target.style.fontSize = '130%'
    }
    //create a mouseover event listener for userText that uses hover()
    userText.addEventListener('mousedown', clickToType);
    userText.addEventListener('mouseout', resetClickToType);

