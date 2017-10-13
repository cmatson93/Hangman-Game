
// One run of the game.
//================================================================================
function gameStart() {
/*Creat an array of possible words for the game */
	var wordOptions = ["panther", "computer", "paycheck", "backpack", "africa", "lightbulb", "venus", "sailboat", "apple", "microwave", "skateboard", "lion", "missouri", "spain", "basketball", "accountant", "policeman", "doctor"];

	// display guessesLeft on screen 
	var guessesLeft = document.getElementById("guesses-left");
	console.log(guessesLeft.textContent);


	var alreadyGuessedArray = [];
	var alreadyGuessed = document.getElementById("guesses-displayed")

	// Empyt array to fill with underscores depending on computerWord length
	var underscoreArray =[];
	var makeUnderscoreLetters;

	var noCounter = 0;
	var remainingLetters = 1
	var winCount = document.getElementById("total-wins");


	// create function to choose word
	// Generate random word from above array
	var computerWord = wordOptions[Math.floor(Math.random()* wordOptions.length)];

	// Count that words length. 
	var wordLength = computerWord.length;
	remainingLetters = wordLength;

	// Make _ _ _ _ for the word
	for (var i = 0; i<computerWord.length; i++) {
		underscoreArray[i]= "_";
	}
	underscoreLetters = underscoreArray.join(" ");

	// place the new string created in the above code on site so users know length of word
	var wordSpaces = document.getElementById("word-spaces");
	wordSpaces.textContent = underscoreLetters;

	var alreadyGuessedCorrect = [];

	// Get users guess
	document.onkeyup = function(event) {
		var userGuess = event.key; 
		noCounter =0;
		console.log(computerWord);
		var correctGuesses = [];
		for (var j=0; j < wordLength; j++){
			if (computerWord[j] === userGuess) {
				underscoreArray[j] = userGuess;
				underscoreLetters = underscoreArray.join(" ");
				wordSpaces.textContent = underscoreLetters;
				if (correctGuesses.indexOf([userGuess]) === -1) {
					remainingLetters --;
				}
				correctGuesses.push(userGuess);
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
			guessesLeft.textContent = 9;
			alreadyGuessed.textContent = "";
			alert("Press spacebar to play agian.")
			callGame();
		}
		if (remainingLetters < 1) {
			alert("YAY you won!");
			guessesLeft.textContent =9;
			alreadyGuessed.textContent = "";
			alert("Press spacebar to play agian.")
			winCount.textContent ++;
			callGame();
		}
	};
}

// call game to start 
//========================================================================
function callGame() {
	document.onkeyup = function(event) {
		var x = event.keyCode;
		if (x == 32) {
			gameStart();
		}	
	}
}

callGame();

// create hangman image 
//=======================

// function createHangman() {
// 	var addImage = document.getElementById("images");
// 	if 
// }















