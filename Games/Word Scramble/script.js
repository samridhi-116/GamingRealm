const msg = document.querySelector(".msg"),
  guess = document.querySelector("input"),
  btn = document.querySelector(".btn");
let play = false,
  newWords = "",
  randWords = "";
let sWords = [
  "setting",
  "ball",
  "mobile",
  "emotion",
  "businesswoman",
  "magic",
  "sports",
  "country",
  "songs",
  "weather",
  "text",
  "honeycomb",
  "restaurant",
  "vaccine",
  "behaviour",
  "bottle",
  "volcano",
  "idol",
  "successful",
];

const createNewWords = () => {
  let ranNum = Math.floor(Math.random() * sWords.length);
  let newTempSwords = sWords[ranNum];
  return newTempSwords;
};
const scrambleWords = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));

    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
btn.addEventListener("click", function () {
  if (!play) {
    play = true;
    btn.innerHTML = "Guess";
    guess.classList.toggle("hidden");
    newWords = createNewWords();
    randWords = scrambleWords(newWords.split("")).join("");
    msg.innerHTML = `Jumbled Word : 
    ${randWords}`;
  } else {
    let userGuess = guess.value;
    if (userGuess === newWords) {
      play = false;
      msg.innerHTML = `Bull's Eye , It is Correct`;
      btn.innerHTML = "Start Again";
      guess.classList.toggle("hidden");
      guess.value = "";
    } else {
      msg.innerHTML = `Incorrect! Try guessing it again : ${randWords}`;
    }
  }
});
