'use strict';

const button = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const body = document.querySelector('body');
const number = document.querySelector('.number')
const scoreTxt = document.querySelector('.score')
const highScoreTxt = document.querySelector('.highscore')
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

button.addEventListener('click', () => {
   let guessNumber = Number(guess.value) 

       // When there is no number selected
    if (!guessNumber) {
        message.textContent = '⛔ No number selected';

        //When player guesses right
    }else if(guessNumber === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        if (score > highScore) {
            highScore = score;
        }
        number.textContent = secretNumber;
        highScoreTxt.textContent = highScore;

        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';

        // When guess is wrong
    }else if(guessNumber !== secretNumber){
        if (score > 1) {
            message.textContent = guessNumber > secretNumber ?  '⛔ Too high!' : '⛔ Too low!';
            score--;
            scoreTxt.textContent = score;
        } else {
            message.textContent = '❌ You lost the game!';
            scoreTxt.textContent = 0;
        }
    }
})

againBtn.addEventListener('click', () =>{
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    message.textContent = 'Start guessing...';
    score = 20;
    scoreTxt.textContent = score;
    highScoreTxt.textContent = highScore;
    number.textContent = '?';
    guess.value = '';
    secretNumber = Math.trunc(Math.random()*20) + 1;
})


