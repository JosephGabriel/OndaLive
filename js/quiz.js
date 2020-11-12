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
var questionScrore = document.getElementById("question-score");
var nextBtn = document.getElementById("next-btn");
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

function stokeSvg() {
  var width = 100,
    height = 100,
    timePassed = 0,
    timeLimit = 500;

  var fields = [
    {
      value: timeLimit,
      size: timeLimit,
      update: function () {
        return (timePassed = timePassed + 1);
      },
    },
  ];

  var nilArc = d3.svg
    .arc()
    .innerRadius(width / 3 - 10)
    .outerRadius(width / 3 - 5)
    .startAngle(0)
    .endAngle(2 * Math.PI);

  var arc = d3.svg
    .arc()
    .innerRadius(width / 3 - 10)
    .outerRadius(width / 3 - 5)
    .startAngle(0)
    .endAngle(function (d) {
      return (d.value / d.size) * 2 * Math.PI;
    });

  var svg = d3
    .select(".sidesss")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var field = svg
    .selectAll(".field")
    .data(fields)
    .enter()
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
    .attr("class", "field");

  var back = field
    .append("path")
    .attr("class", "path path--background")
    .attr("d", arc);

  var path = field.append("path").attr("class", "path path--foreground");

  var label = field.append("text").attr("class", "label").attr("dy", ".35em");

  (function update() {
    field.each(function (d) {
      (d.previous = d.value), (d.value = d.update(timePassed));
    });

    path.transition().ease("elastic").duration(500).attrTween("d", arcTween);

    if (timeLimit - timePassed <= 10) pulseText();
    else
      label.text(function (d) {
        return d.size - d.value;
      });

    if (timePassed <= timeLimit) setTimeout(update, 1000 - (timePassed % 1000));
    else destroyTimer();
  })();

  function pulseText() {
    back.classed("pulse", true);
    label.classed("pulse", true);

    if (timeLimit - timePassed >= 0) {
      label
        .style("font-size", "2rem")
        .attr("transform", "translate(0," + +0 + ")")
        .text(function (d) {
          return d.size - d.value;
        });
    }

    label
      .transition()
      .ease("elastic")
      .duration(900)
      .style("font-size", "2rem")
      .attr("transform", "translate(0," + -0 + ")");
  }

  function destroyTimer() {
    label
      .transition()
      .ease("back")
      .duration(700)
      .style("opacity", "0")
      .style("font-size", "2")
      .attr("transform", "translate(0," + -0 + ")")
      .each("end", function () {
        field.selectAll("text").remove();
      });

    path.transition().ease("back").duration(700).attr("d", nilArc);

    back
      .transition()
      .ease("back")
      .duration(700)
      .attr("d", nilArc)
      .each("end", function () {
        field.selectAll("path").remove();
      });
  }

  function arcTween(b) {
    var i = d3.interpolate(
      {
        value: b.previous,
      },
      b
    );
    return function (t) {
      return arc(i(t));
    };
  }
}

function progressSvg() {
  let circle = new CircularProgressBar("pie");
}

function progressSvg2() {
  let circle = new CircularProgressBar("pie2");
}

playQuiz.addEventListener("click", () => {
  quiz.classList.toggle("activeQ");
  document.getElementById("main").classList.toggle("ops");
});

close.addEventListener("click", () => {
  document.getElementById("main").classList.remove("ops");
  quiz.classList.remove("activeQ");
});

document.getElementById("quiz-close-btn").addEventListener("click", () => {
  document.getElementById("main").classList.remove("ops");
  quiz.classList.remove("activeQ");
});

document.getElementById("quiz-btn-close2").addEventListener("click", () => {
  document.getElementById("main").classList.remove("ops");
  quiz.classList.remove("activeQ");
});

for (let index = 0; index < buttons.length; index++) {
  buttons[index].addEventListener("click", () => {
    buttons[index].classList.add("active-btn");

    let btnIndex = index;

    if (buttons[index] != btnIndex) {
      buttons[btnIndex].classList.remove("active-btn");
    }
  });
}

nextBtn.addEventListener("click", () => {
  questionContainer.classList.add("hide");
  questionScrore.classList.remove("hide");
  timer.classList.add("hide");
  progressSvg();
});

document.getElementById("quiz-ranking").addEventListener("click", () => {
  document.getElementById("question-score").classList.add("hide");
  document.getElementById("quiz-ranking-sc").classList.remove("hide");
  progressSvg2();
});

// quizStartBtn.addEventListener("click", startGame);
quizStartBtn.addEventListener("click", () => {
  quizStart.classList.add("hide");
  questionContainer.classList.remove("hide");
  timer.classList.remove("hide");
  stokeSvg();
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
