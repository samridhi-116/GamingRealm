"use strict";

let P1Score = 0;
let P2Score = 0;
let rolled;
let current = 0;
let added;
let flag = 1;
let score = 0;
//Mechanism//
document.querySelector(".btn--new").addEventListener("click", function () {
  P1Score = 0;
  P2Score = 0;
  current = 0;
  flag = 0;
  document.getElementById("classlol").textContent = "";
  document.getElementById("score--1").textContent = P2Score;
  document.getElementById("score--0").textContent = P1Score;
  document.getElementById("current--1").textContent = current;
  document.getElementById("current--0").textContent = current;
  console.log(P1Score, P2Score, current);
});
document.querySelector(".btn--roll").addEventListener("click", function () {
  rolled = Math.floor(Math.random() * 6) + 1;
  console.log(rolled);
  //Rolling dice images//
  if (rolled === 1) {
    //Code Goes Here//
    if (P1Score >= 100) {
      alert("Player 1 Wins");
    } else if (P2Score >= 100) {
      alert("Player 2 Wins");
    } else {
      document.getElementById("dice").src = "dice-1.png";
      current = 0;
      if (flag === 0) {
        document.getElementById("current--0").textContent = current;
        document.getElementById("player2").classList.add("player--active");
        document.getElementById("player1").classList.remove("player--active");
        flag = 1;
      } else {
        document.getElementById("current--1").textContent = current;
        document.getElementById("player1").classList.add("player--active");
        document.getElementById("player2").classList.remove("player--active");
        flag = 0;
      }
    }
    console.log(flag);
    //Completely different thing//
  } else if (rolled === 2) {
    document.getElementById("dice").src = "dice-2.png";
    current = current + 2;
  } else if (rolled === 3) {
    document.getElementById("dice").src = "dice-3.png";
    current = current + 3;
  } else if (rolled === 4) {
    document.getElementById("dice").src = "dice-4.png";
    current = current + 4;
  } else if (rolled === 5) {
    document.getElementById("dice").src = "dice-5.png";
    current = current + 5;
  } else {
    document.getElementById("dice").src = "dice-6.png";
    current = current + 6;
  }
  if (flag === 0) {
    document.getElementById("current--0").textContent = current;
  } else {
    document.getElementById("current--1").textContent = current;
  }
});
//Side selection mechanism//
document.querySelector(".btn--hold").addEventListener("click", function () {
  score = score + current;
  current = 0;
  if (P1Score >= 100) {
    alert("Player 1 Wins");
  } else if (P2Score >= 100) {
    alert("Player 2 Wins");
  } else {
    if (flag === 0) {
      P1Score += score;
      score = 0;
      console.log(`P1Score is ${P1Score}`);
      document.getElementById("score--0").textContent = P1Score;
      flag = 1;
      document.getElementById("player2").classList.add("player--active");
      document.getElementById("player1").classList.remove("player--active");
      score = 0;
    } else {
      P2Score += score;
      score = 0;
      flag = 0;
      console.log(`P2Score is ${P2Score}`);
      document.getElementById("score--1").textContent = P2Score;
      document.getElementById("player1").classList.add("player--active");
      document.getElementById("player2").classList.remove("player--active");
    }
    score = 0;
  }
});
