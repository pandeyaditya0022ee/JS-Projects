let RandomNumber = parseInt((Math.random() * 100) + 1);

const submitButton = document.querySelector('#submit-btn');
const userInput = document.querySelector('#guess-input');
const previousGuesses = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const resultMessage = document.querySelector('#Message');
const StartOverButton = document.querySelector('.result');

const p = document.createElement('p');

let guessCount = 0;
let previousGuessesArray = [];

let playGame = true;

if(playGame) {
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        validateInput(userGuess);
        
    });

}
function validateInput(userGuess) {
    if(userGuess < 1 || userGuess > 100) {
        alert('Please enter a number between 1 and 100.');
    }
    else if(isNaN(userGuess)) {
        alert('Please enter a valid number.');
    }
    else {
        previousGuessesArray.push(userGuess);
        if(guessCount === 9) {
            cleanup(userGuess);
            displayMessage(`Game Over! The number was ${RandomNumber}.`);
            GameOver();
        } else {
            
            cleanup(userGuess);
            checkGuess(userGuess);
        }   
    }
}
function checkGuess(userGuess) {
    if(userGuess < RandomNumber) {
        displayMessage('Your guess is too low!');
    }
    else if(userGuess > RandomNumber) {
        displayMessage('Your guess is too high!');
    }
    else {
        displayMessage('Congratulations! You guessed the number!');
        GameOver();
    }
}
function cleanup(userGuess) {
    userInput.value = '';
    previousGuesses.innerHTML += `${userGuess}, `;
    guessCount++;
    remainingGuesses.innerHTML = `${10 - guessCount}`;
    
}
function displayMessage(message) {
    resultMessage.innerHTML = `<h3>${message}</h3>`;
}
function GameOver() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = '<button id="newGame">Start New Game</button>';
    StartOverButton.appendChild(p);

    
    playGame = false;
    newGame();

}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        e.preventDefault();
        RandomNumber = Math.floor((Math.random() * 100) + 1);
        playGame = true;
        guessCount = 1;
        previousGuessesArray = [];
        previousGuesses.innerHTML = '';
        remainingGuesses.innerHTML = '10';
        resultMessage.innerHTML = '';
        StartOverButton.style.display = 'none';
        userInput.removeAttribute('disabled');
        submitButton.removeChild('p');
    });
}