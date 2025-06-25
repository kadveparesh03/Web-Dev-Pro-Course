document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("time");
    const progressBar = document.getElementById("progress-bar");
  
    const questions = [
      {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'Hamlet'?",
        choices: [
          "Charles Dickens",
          "Jane Austen",
          "William Shakespeare",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let timeLeft = 10;
  
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
  
    restartBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resultContainer.classList.add("hidden");
      startQuiz();
    });
  
    function startQuiz() {
      startBtn.classList.add("hidden");
      resultContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      showQuestion();
    }
  
    function showQuestion() {
      nextBtn.classList.add("hidden");
      questionText.textContent = questions[currentQuestionIndex].question;
      choicesList.innerHTML = "";
      updateProgressBar();
      resetTimer();
  
      questions[currentQuestionIndex].choices.forEach((choice) => {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => selectAnswer(li, choice));
        choicesList.appendChild(li);
      });
    }
  
    function selectAnswer(selectedLi, choice) {
      clearInterval(timer);
      const correctAnswer = questions[currentQuestionIndex].answer;
      const allChoices = document.querySelectorAll("#choices-list li");
  
      allChoices.forEach((li) => {
        li.classList.add("disabled");
        if (li.textContent === correctAnswer) {
          li.classList.add("correct");
        } else if (li === selectedLi && choice !== correctAnswer) {
          li.classList.add("wrong");
        }
      });
  
      if (choice === correctAnswer) {
        score++;
      }
  
      nextBtn.classList.remove("hidden");
    }
  
    function showResult() {
      clearInterval(timer);
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      scoreDisplay.textContent = `${score} out of ${questions.length}`;
      updateProgressBar(100);
    }
  
    function resetTimer() {
      clearInterval(timer);
      timeLeft = 10;
      timerDisplay.textContent = timeLeft;
  
      timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
  
        if (timeLeft <= 0) {
          clearInterval(timer);
          autoSelect();
        }
      }, 1000);
    }
  
    function autoSelect() {
      const allChoices = document.querySelectorAll("#choices-list li");
      allChoices.forEach((li) => {
        li.classList.add("disabled");
        if (li.textContent === questions[currentQuestionIndex].answer) {
          li.classList.add("correct");
        }
      });
      nextBtn.classList.remove("hidden");
    }
  
    function updateProgressBar(percentOverride = null) {
      const percent =
        percentOverride !== null
          ? percentOverride
          : Math.floor(((currentQuestionIndex + 1) / questions.length) * 100);
      progressBar.style.width = `${percent}%`;
    }
  });
  