// Beginning Text
alert('Hello!');
alert('Starting Your Mars Adventure!');
alert('Preparing for Blast Off!');
alert('All Systems Go!');
alert('Blast Off!');


// Get a valid username
let username = prompt('Hi there. What\'s your name?');
while (!username) {
    username = prompt('Sorry, please enter a name.');
}
username = username.trim();

// Goal text
alert(`Hello ${username}, welcome to the Mars Adventure Game!`);
alert('Yesterday, you received a call from your good friend at NASA.');
alert('They need someone to go to Mars this weekend, and YOU\'VE been chosen!!');


// Get whether user is excited or not
let excited = prompt('Are you excited? Type Y or N');
excited = excited.toUpperCase();
excited = excited.trim();

while (!excited.startsWith('Y') && !excited.startsWith('N')) {
    excited = prompt('Sorry, please type in a valid response. Are you excited? Type Y or N');
    excited = excited.toUpperCase();
 }


// React to user being excited or not
if (excited.startsWith('Y')) {
    alert('I knew you\'d say that. It\'s so cool that you\'re going to Mars!');
}
else {
    alert('Well, it\'s too late to back out now. lol. lmao even');
}


// Start Packing
alert('It\s time to pack for your trip to Mars.');
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = +numSuitcases;

while (!numSuitcases) {
    numSuitcases = prompt('Please enter an integer number of suitcases to bring.');
    numSuitcases = +numSuitcases;
}

if (numSuitcases > 2) {
    alert('Woah! That\'s a lot of luggage. You\'ll need to pack more lightly.');
}
else {
    alert('Perfect. You\'ll certainly fit in the spaceship!');
}


// Get Companion Animal
alert('You\'re allowed to bring one companion animal with you.');
let companionType = prompt('What kind of companion animal would you like to bring?');
while (!companionType) {
    companionType = prompt('Sorry, please enter an animal type.');
}

let companionName = prompt('What is your companion\'s name?');
while (!companionName) {
    companionName = prompt('Sorry, please enter a name.');
}


// Fix animal / species capitalization

// CompanionName
/*
console.log(companionName[0]);
let firstNameLetter = companionName[0];
firstNameLetter = firstNameLetter.toUpperCase();
console.log(firstNameLetter);

let otherNameLetters = companionName.slice(1);
otherNameLetters = otherNameLetters.toLowerCase();
console.log(otherNameLetters);

companionName = firstNameLetter + otherNameLetters;


// CompanionType
console.log(companionType[0]);
let firstTypeLetter = companionType[0];
firstTypeLetter = firstTypeLetter.toUpperCase();
console.log(firstTypeLetter);

let otherTypeLetters = companionType.slice(1);
otherTypeLetters = otherTypeLetters.toLowerCase();
console.log(otherTypeLetters);

companionType = firstTypeLetter + otherTypeLetters;
// Print Animal Type + Name
*/

// Fix companionName capitalization
companionName = companionName.toLowerCase();
let firstNameLetterFixed = companionName[0].toUpperCase();
companionName = firstNameLetterFixed + companionName.slice(1);

// Fix companionType capitalization
companionType = companionType.toLowerCase();
let firstTypeLetterFixed = companionType[0].toUpperCase();
companionType = firstTypeLetterFixed + companionType.slice(1); 

alert(`Cool, so you\'re bringing ${companionName} the ${companionType}.`);


// Spaceship Decor
alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

// get decor choice
let decorChoice = prompt('What kind of decor would you like? Type A, B, or C');
decorChoice = decorChoice.toUpperCase();
while (decorChoice !== 'A' && decorChoice !== 'B' && decorChoice !== 'C') {
    decorChoice = prompt('Sorry, please type in a valid answer. What kind of decor would you like? Type A, B, or C');
    decorChoice = decorChoice.toUpperCase();
}

let decor;
// react to decor choice 
if (decorChoice === 'A') {
    decor = 'modern minimalist';
}
else if (decorChoice === 'B') {
    decor = 'retro space age';
}
else {
    decor = 'steampunk';
}


// Impress the User
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);


// Time for lift off
for (let i = 5; i > 0; i--) {
    alert(`${i}...`);
}
alert('*** LIFTOFF ***');