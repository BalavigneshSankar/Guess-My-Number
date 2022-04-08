'use strict';
const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const gameInfo = function (selector, messageContent) {
  document.querySelector(selector).textContent = messageContent;
};

let secretNumber = randomNumber();

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    gameInfo('.message', '🚩 No number guessed!');
  } else if (guess === secretNumber) {
    gameInfo('.number', secretNumber);
    gameInfo('.message', '👍 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      gameInfo('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      gameInfo('.score', score);
      gameInfo(
        '.message',
        guess > secretNumber ? '🙄 Too high!' : '🙄 Too low!'
      );
    } else {
      gameInfo('.score', 0);
      gameInfo('.message', '💥 You lost the game!');
    }
  }
});

//   else if (guess > secretNumber) {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '🙄 Too high!';
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }
//   } else {
//     if (score > 1) {
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.message').textContent = '🙄 Too low!';
//     } else {
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  secretNumber = randomNumber();
  gameInfo('.number', '?');
  gameInfo('.message', 'Start guessing...');
  score = 20;
  gameInfo('.score', score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
