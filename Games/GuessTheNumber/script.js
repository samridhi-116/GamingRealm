'use strict';
/*HighScores*/
let score = 0;
let hs = 0;
let a;
document.querySelector('#lefter').style.display = 'none';
document.querySelector('.again').addEventListener('click', function () {
  a = Math.ceil(Math.random() * 20);
  document.querySelector('.number').value = a;
  document.querySelector('.number').textContent = '?';
  document.querySelector('#lefter').style.display = 'block';
  document.querySelector('.again').textContent = 'Again!';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#330033';
  document.querySelector('.guess').value = '';
});
document.querySelector('.check').addEventListener('click', function () {
  const c = document.querySelector('.guess').value;
  console.log(c);
  if (!c) {
    document.querySelector('.message').textContent = 'No Number is Found';
    document.querySelector('body').style.backgroundColor = 'Blue';
  } else {
    if (c == a) {
      document.querySelector('.message').textContent = 'Correct Number😎.';
      document.querySelector('.number').textContent = a;
      document.querySelector('body').style.backgroundColor = 'Green';
      if (score > hs) {
        hs = score;
      } else {
        hs = hs;
      }
      console.log(` Your Highscore is ${hs}`);
      document.querySelector('.highscore').textContent = hs;
    } else if (c < 0) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        "Don't use Negative Numbers.";
      document.querySelector('body').style.backgroundColor = 'Brown';
      document.querySelector('body').style.Color = 'White';
    } else {
      score -= 1;
      document.querySelector('.score').textContent = score;

      if (Math.abs(c - a) <= 3) {
        document.querySelector('.message').textContent = 'You are very Close😬';
        document.querySelector('body').style.backgroundColor = 'Orange';
      } else if (Math.abs(c - a) <= 6 && Math.abs(c - a) > 3) {
        document.querySelector('.message').textContent =
          'You are Quite Close😯';
        document.querySelector('body').style.backgroundColor = 'Crimson';
      } else {
        document.querySelector('.message').textContent =
          'You are Far far away😣';
        document.querySelector('body').style.backgroundColor = 'Red';
      }
    }
    console.log(document.querySelector('.guess').value);
  }
});
