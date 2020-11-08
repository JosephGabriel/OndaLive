var playQuiz = document.getElementById("playQuiz");
var timer = document.getElementById("timer");
var quiz = document.getElementById("quiz");
var quizStart = document.getElementById("quiz-start");
var quizStartBtn = document.getElementById("quiz-start-btn");
var close = document.getElementById("close-bbtn");
var buttons = document.getElementsByClassName("btn-answer");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var questionContainer = document.getElementById("question-container");
var shuffledQuestion, currentIndexQuestion;

var questions = [
  {
    question: "Quanto é 2 + 2",
    answers: [
      { text: "4", correct: true, points: 14 },
      { text: "5", correct: false, points: 0 },
      { text: "6", correct: false, points: 0 },
    ],
  },
  {
    question: "Quanto é 4 + 2",
    answers: [
      { text: "4", correct: true, points: 14 },
      { text: "5", correct: false, points: 0 },
      { text: "6", correct: false, points: 0 },
    ],
  },
  {
    question: "Quanto é 6 + 7",
    answers: [
      { text: "4", correct: true, points: 14 },
      { text: "5", correct: false, points: 0 },
      { text: "6", correct: false, points: 0 },
    ],
  },
];

playQuiz.addEventListener("click", () => {
  quiz.classList.toggle("activeQ");
});

close.addEventListener("click", () => {
  quiz.classList.remove("activeQ");
});

for (var index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    timer.classList.add("hide");
    questionContainer.classList.add("hide");
  });
}

// quizStartBtn.addEventListener("click", startGame);
quizStartBtn.addEventListener("click", () => {
  quizStart.classList.add("hide");
  questionContainer.classList.remove("hide");
  timer.classList.remove("hide");
});

function startGame() {
  shuffledQuestion = questions.sort(() => Math.random() - 0.5);
  currentIndexQuestion = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentIndexQuestion]);
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    answerButtons.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  // Array.from(answerButtons.children).forEach((button) => {
  //   setStatusClass(button, button.dataset.correct);
  // });
  // if (shuffledQuestions.length > currentQuestionIndex + 1) {
  //   nextButton.classList.remove("hide");
  // } else {
  //   startButton.innerText = "Restart";
  //   startButton.classList.remove("hide");
  // }
  currentIndexQuestion++;
  setNextQuestion();
}
