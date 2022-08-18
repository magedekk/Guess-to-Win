'use strict';

/*
console.log(document.querySelector( '.message' ).textContent);
document.querySelector( '.message' ).textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// determine the secret number randomly between 1 & 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// declare the "score" as a variable
let score = 20;

// declare the "highscore" as a variable
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Display the random number in place of the "?"
document.querySelector('.number').textContent = secretNumber;

// Add event listener "click" on Check button to show the number input on the console log
document.querySelector('.check').addEventListener('click', function () {
  // change the output from string to a Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    // document.querySelector( '.message' ).textContent = ' ⛔ No number!';
    displayMessage('⛔ No number!');

    // when player win
  } else if (guess === secretNumber) {
    // document.querySelector( '.message' ).textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');

    //change the background to green when player win
    document.querySelector(' body ').style.backgroundColor = '#60b347';

    // Change the number style to be double width
    document.querySelector('.number').style.width = '30rem';

    // updating highscore with score when player win
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector( '.message' ).textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low' ;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low');

      // Decrease the score by 1 as the guess is wrong
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector( '.message' ).textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //when the guess is too hight
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector( '.message' ).textContent = '📈 Too high!';
  //     // Decrease the score by 1 as the guess is wrong
  //     score --;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector( '.message' ).textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector( '.message' ).textContent = '📈 Too low';
  //     // Decrease the score by 1 as the guess is wrong
  //     score --;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector( '.message' ).textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...!';
  displayMessage('Start guessing...!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
