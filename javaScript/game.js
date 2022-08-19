

/*player movement
actual game */

        //access user id to a variable
        let playerCharacter = document.getElementById('user');
        //make a jump function for playerCharacter
        let jumpUp = () => {
            playerCharacter.style.top = '5em';
        }
        //add event listener for document key down jump()
        document.addEventListener('keydown', jumpUp);
        //make a fall function for playerCharacter
        let fallDown = () => {
            playerCharacter.style.top = '17.6em';
        }
        //add event listener for document key up fallDown()
        document.addEventListener('keyup', fallDown);

        //access element with id jump-button
        let jumpButton = document.getElementById('jump-button');
        //attach jumpUp and fallDown to jumpButton with event listeners mousedown and mouseup respectively
        jumpButton.addEventListener('mousedown', jumpUp);
        jumpButton.addEventListener('mouseup', fallDown);
        //for touch screens
        jumpButton.addEventListener('touchstart', jumpUp);
        jumpButton.addEventListener('touchend', fallDown);

/*practice javascript trinkets*/

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