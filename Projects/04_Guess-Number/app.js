// const randomNumber = Math.floor(Math.random() * 100 + 1); 
// const form = document.querySelector('form')
// console.log(randomNumber);


// form.addEventListener('submit', function() {
//     const input = parseInt(document.querySelector('#guessField').value);  

//     const result = document.querySelector('.lowOrHi')
// })
const randomNumber = Math.floor(Math.random() * 100 + 1); 

const submit = document.querySelector('#subt')

const input = document.querySelector('#guessField')

const guesses = document.querySelector('.guesses')

const lives = document.querySelector('.lastResult')

const finalResult = document.querySelector('.lowOrHi')

const startOver = document.querySelector('resultParas')

const p = document.querySelector('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(input.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    // will check if guess is alphabets only
    if(NaN(guess)) {
        alert("Please enter a valid number");
    }
    else if (guess < 1) {
        alert("Please enter a number more than 1");
    } 
    else if(guess > 100) {
        alert("Please enter a number less than 100.")
    }
    else {
       prevGuess.push(guess)
       if(numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${randomNumber}`)
        endGame()
       }
       else {
        displayGuess(guess)
        checkGuess(guess)
       } 
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right.`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Too Low`)
    }
    else {
        displayMessage(`Number is Too High`)
    }
}

function displayGuess(guess) {
    input.value = ''
    guesses.innerHTML += `${guess}`
    numGuess++;
    
}

function displayMessage(message) {

}


function newGame() {

}

function endGame() {

}