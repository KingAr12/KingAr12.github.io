//Three data types needed for a randomized fanasty name generator
const firstNameArr = ['Grognak', 'Jamoose', 'Pkola', 'King', 'R\'quell', 'Woy', 'Qelsh', 'Banister', 'Slader', 'Xinar', 'Langley', 'Joseph', 
'Eduardo', 'Joaquin', 'Adam', '', 'Mecka', 'Griggori', 'Vascque', 'Serashi', 'Pilaf', 'Dlut', 'Geomat', 'Doguq', 'Ronia', 'Delfrene',
'Tupsig', 'Vahlqa', 'Jayward', 'Frumtpon', 'Carliser'];

const lastNameArr = ['Maiople', 'Killowog', 'Qoits', 'Arciaga', 'Sombersand', 'Ceod', 'Vopnar', 'Fozzy', 'Gizzard', 'Pomernan', 'Squiresome', 
'Azurin', 'Acevado', 'Frietze', 'Santiago', '', 'Shlecka', 'LaFlaum', 'Drangoe', 'Dain', 'Goldguard', 'Oivae', 'Pirgub', 'Wirestreak', 
'Tourne', 'Kornerstied', 'Leugh', 'Vejwa', 'Woltnik', 'Guilderen', 'Dome'];

const titleArr = ['The Terrible', 'The Great', 'The Divine Dragon', 'The Creator', 'The Perciever', 'Enormous Jopn', 'mK12', 
'The Duke of Arsella', 'The ShapeShifting Reptile', 'Insane Plectr', 'The Knight', 'The Bard', 'Lustful Demon', 'Dream God', 'The Artist', '',
'of Frecka', 'The Contanuus', 'Final Drekl', 'Forlorne', 'The Merchant', 'The Plunderer', '', 'of The Forgotten', 'The Maternal Ruler',
'Mother of Jamoose', 'The Youngest', 'The Yeoman', 'The Rich', 'The Plunderer'];

//array length of each vars above
var firstNameArrLength = firstNameArr.length;

var lastNameArrLength = lastNameArr.length;

var titleArrLength = titleArr.length;

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

//function to generate a message with randomized names and titles
const getRandomFantasyName = (first, last, title1) => {
    first = firstName;
    last = lastName;
    title1 = title;
    return (first === '') ? `${last} ${title1}`
    : (last === '')  ? `${first} ${title1}`
    : (title1 === '') ? `${first} ${last}`
    : `${first} ${last} ${title1}`;
};

//create a getRandomAge func
const getRandomAge = () => Math.floor(Math.random() * 999);

//create morality array and a function returning a random morality trait



//make a character object and add a name property that has the value of getRandomFantasyName()
const characterTemplate = 
{
    name: getRandomFantasyName(),
    age: 0,
    setNewAge(num) {
        this.age = num
    }
}   

class character {
    constructor(name, age, morality) {
        this.name = name;
        this.age = age;
        this.morality = morality;
    }
}; 

const myCharacter = new character(getRandomFantasyName(), getRandomAge());

console.log(myCharacter)

//export functions
