/*Creat an array of possible words for the game */
var wordOptions = ["panther", "sailboat", "apple", "microwave", "skateboard", "lion", "missouri", "spain", "basketball", "accountant", "policeman", "doctor"];

// Generate random word from above array
var computerWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];

var wordLength = computerWord.length;

// display guessesLeft on screen 
var guessesLeft = document.getElementById("guesses-left");

var alreadyGuessedArray = [];
var alreadyGuessed = document.getElementById("guesses-displayed")


// Empyt array to fill with underscores depending on computerWord length
var underscoreArray =[];
var makeUnderscoreLetters;

// create a function that makes _ _ _ _ for the word
// function makeUnderscoreLetters(){
for (var i = 0; i<computerWord.length; i++) {
	underscoreArray[i]= "_";
}

underscoreLetters = underscoreArray.join(" ");

// makeUnderscoreLetters();

console.log(computerWord);
console.log(typeof(computerWord));
console.log(wordLength);

// place the new string created in the above function on site so users know length of word
var wordSpaces = document.getElementById("word-spaces");
wordSpaces.textContent = underscoreLetters;

var noCounter = 0;
var remainingLetters = wordLength;
console.log(remainingLetters);


// Get users guess
document.onkeyup = function(event) {
		var userGuess = event.key; 
		guessRight = false;
		noCounter =0;
		for (var j=0; j < wordLength; j++){
			if (computerWord[j] === userGuess) {
				underscoreArray[j] = userGuess;
				underscoreLetters = underscoreArray.join(" ");
				wordSpaces.textContent = underscoreLetters;
				remainingLetters --;
				guessRight = false;
				console.log(remainingLetters);
			} 
			else {
				noCounter++;
			}
		}
		if (noCounter === wordLength) {
			guessesLeft.textContent -=1;
			alreadyGuessedArray.push(userGuess);
			alreadyGuessed.textContent = alreadyGuessedArray;
			noCounter = 0;
		}
		if (guessesLeft.textContent < 1) {
			alert("Sorry, you loose...");
		}
		if (remainingLetters < 1) {
			alert("YAY you won!");
		}
	};



