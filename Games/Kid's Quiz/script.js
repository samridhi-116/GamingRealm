const quizDB = [
  {
    question: "Q1: What is the national bird of India?",
    a: "Hawk",
    b: "Owl",
    c: "Peacock",
    d: "Nightingale",
    ans: "ans3",
  },

  {
    question: "Q2: How many hours do we have in a day?",
    a: "28",
    b: "22",
    c: "24",
    d: "21",
    ans: "ans3",
  },

  {
    question: "Q3: Choose the correct set of vowels.",
    a: "a,e,i,o,u",
    b: "g,z,k,m,c",
    c: "l,f,x,y,w",
    d: "p,t,r,j,v",
    ans: "ans1",
  },

  {
    question: "Q4: How many continents are there in the world?",
    a: "5",
    b: "1",
    c: "2",
    d: "7",
    ans: "ans4",
  },

  {
    question: "Q5: What is the capital of india?",
    a: "Mumbai",
    b: "Jaipur",
    c: "Daman",
    d: "Delhi",
    ans: "ans4",
  },

  {
    question: "Q6: Which is the largest planet in our Solar system?",
    a: "Mars",
    b: "Saturn",
    c: "Jupiter",
    d: "Mercury",
    ans: "ans3",
  },

  {
    question: "Q7: How many years are there in one Century?",
    a: "100",
    b: "235",
    c: "200",
    d: "150",
    ans: "ans1",
  },

  {
    question: "Q8: Which bird lays the largest eggs?",
    a: "Hen",
    b: "Ostrich",
    c: "Eagle",
    d: "Vulture",
    ans: "ans2",
  },

  {
    question: "Q9: Which is the hardest substance available on earth?",
    a: "Diamond",
    b: "Gold",
    c: "Stone",
    d: "Wood",
    ans: "ans1",
  },

  {
    question: "Q10: Who was the first prime minister of India?",
    a: "Lal Bahadur Shastri",
    b: "Jawaharlal Nehru",
    c: "Atal Bihari Vajpayee",
    d: "Indira Gandhi",
    ans: "ans2",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

playBtn.addEventListener("click", () => {
  playBtn.classList.add("toHide");
  parentDiv.classList.remove("toHide");
});

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;

  answers.forEach((userAnswer) => {
    if (userAnswer.checked) {
      answer = userAnswer.id;
    }
  });
  return answer;
};

const deselectOption = () => {
  answers.forEach((userAnswer) => (userAnswer.checked = false));
};

submit.addEventListener("click", () => {
  const checkAnswer = getCheckAnswer();
  if (checkAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;

  deselectOption();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3> You scored ${score}/${quizDB.length} 🤝
      <button class="btn" onclick="location.reload()">Take me back</button>
      `;

    showScore.classList.remove("toHide");
  }
});
