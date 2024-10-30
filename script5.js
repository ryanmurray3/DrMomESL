function checkAnswers() {
  const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "a",
    q4: "b",
    q5: "b",
  };

  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  for (let question in correctAnswers) {
    let selectedAnswer = document.querySelector(
      `input[name="${question}"]:checked`
    );
    let labels = document.querySelectorAll(`input[name="${question}"] + label`);

    labels.forEach((label) => {
      label.style.color = ""; // Reset color
    });

    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[question]) {
        score++;
        document.querySelector(
          `label[for="${selectedAnswer.id}"]`
        ).style.color = "green";
      } else {
        document.querySelector(
          `label[for="${selectedAnswer.id}"]`
        ).style.color = "red";
      }
    }
  }

  document.getElementById(
    "result"
  ).textContent = `You got ${score} out of ${totalQuestions} correct.`;
}

function checkAnswersEx3() {
  const correctAnswers = {
    "ex3-1": "c",
    "ex3-2": "d",
    "ex3-3": "e",
    "ex3-4": "f",
    "ex3-5": "b",
    "ex3-6": "g",
    "ex3-7": "h",
    "ex3-8": "a",
  };

  let correctCount = 0;
  let wrongCount = 0;

  for (let question in correctAnswers) {
    let inputElement = document.getElementById(question);
    if (inputElement.value.trim().toLowerCase() === correctAnswers[question]) {
      inputElement.style.color = "green";
      correctCount++;
    } else {
      inputElement.style.color = "red";
      wrongCount++;
    }
  }

  document.getElementById(
    "result"
  ).textContent = `You got ${correctCount} correct and ${wrongCount} wrong.`;
}

function resetAnswers() {
  const inputs = document.querySelectorAll(".input-ex3");
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("result").textContent = "";
}

function checkWhoWhatAnswers() {
  const correctAnswers = {
    Twoq1: "who",
    Twoq2: "what",
    Twoq3: "what",
    Twoq4: "who",
    Twoq5: "who",
    Twoq6: "who",
  };

  let correctCount = 0;
  let wrongCount = 0;

  for (let question in correctAnswers) {
    let inputElement = document.getElementById(question);
    if (inputElement) {
      // Check if the element exists
      if (
        inputElement.value.trim().toLowerCase() === correctAnswers[question]
      ) {
        inputElement.style.color = "green";
        correctCount++;
      } else {
        inputElement.style.color = "red";
        wrongCount++;
      }
    }
  }

  document.getElementById(
    "whoWhatResult"
  ).textContent = `You got ${correctCount} correct and ${wrongCount} wrong.`;
}

function resetWhoWhatAnswers() {
  const inputs = document.querySelectorAll(".who-what-input"); // Use a more specific class for who-what inputs
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("whoWhatResult").textContent = "";
}

function checkFillInTheBlanks() {
  const correctAnswers = {
    q1: "who's",
    q2: "is",
    q3: "what's",
    q4: "she's",
    q5: "he's",
    q6: "he isn't",
    q7: "he's",
    q8: "that's",
  };

  let correctCount = 0;
  let wrongCount = 0;

  for (let question in correctAnswers) {
    let inputElement = document.getElementById(question);
    if (inputElement) {
      // Check if the element exists
      if (
        inputElement.value.trim().toLowerCase() === correctAnswers[question]
      ) {
        inputElement.style.color = "green";
        correctCount++;
      } else {
        inputElement.style.color = "red";
        wrongCount++;
      }
    }
  }

  document.getElementById(
    "fillInResult"
  ).textContent = `You got ${correctCount} correct and ${wrongCount} wrong.`;
}

function resetFillInTheBlanks() {
  const inputs = document.querySelectorAll(".fill-in-the-blank-input"); // Use a more specific class for fill-in-the-blank inputs
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("fillInResult").textContent = "";
}

function checkExercise4Answers() {
  const correctAnswers = {
    q1: {
      answerA: "is steve from portland?",
      answerB: "no, he's not.",
    },
    q2: {
      answerA: "is she a server?",
      answerB: "yes, she is.",
    },
    q3: {
      answerA: "are they nurses?",
      answerB: "no, they're doctors.",
    },
    q4: {
      answerA: "who is that man?",
      answerB: "he's my teacher.",
    },
    q5: {
      answerA: "are mark and kathy married?",
      answerB: "no, they aren't.",
    },
  };

  let correctCount = 0;
  let totalQuestions = Object.keys(correctAnswers).length * 2;

  for (let question in correctAnswers) {
    let userAnswerA = document
      .getElementById(`${question}-answer-a`)
      .value.trim()
      .toLowerCase();
    let userAnswerB = document
      .getElementById(`${question}-answer-b`)
      .value.trim()
      .toLowerCase();
    let correctAnswerA = correctAnswers[question].answerA;
    let correctAnswerB = correctAnswers[question].answerB;

    if (userAnswerA === correctAnswerA) {
      document.getElementById(`${question}-answer-a`).style.color = "green";
      correctCount++;
    } else {
      document.getElementById(`${question}-answer-a`).style.color = "red";
    }

    if (userAnswerB === correctAnswerB) {
      document.getElementById(`${question}-answer-b`).style.color = "green";
      correctCount++;
    } else {
      document.getElementById(`${question}-answer-b`).style.color = "red";
    }
  }

  document.getElementById(
    "exercise4Result"
  ).textContent = `You got ${correctCount} out of ${totalQuestions} correct.`;
}

function resetExercise4Answers() {
  const inputs = document.querySelectorAll(".answer-input");
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("exercise4Result").textContent = "";
}

function checkMatchingAnswersReview() {
  const correctAnswers = {
    matchq1: "d",
    matchq2: "c",
    matchq3: "e",
    matchq4: "a",
    matchq5: "b",
  };

  let correctCount = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  for (let question in correctAnswers) {
    // Extracting the correct input element using the right ID
    let userAnswer = document.getElementById(question);

    // Ensure the element is found before trying to read its value
    if (userAnswer) {
      let userAnswerValue = userAnswer.value.trim().toLowerCase();
      if (userAnswerValue === correctAnswers[question]) {
        userAnswer.style.color = "green";
        correctCount++;
      } else {
        userAnswer.style.color = "red";
      }
    }
  }

  document.getElementById(
    "matchingResult"
  ).textContent = `You got ${correctCount} out of ${totalQuestions} correct.`;
}

function resetMatchingAnswersReview() {
  const inputs = document.querySelectorAll(".match-input");
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("matchingResult").textContent = "";
}

function checkConversationAnswers() {
  const correctAnswers = {
    convq1: "who",
    convq2: "what",
    convq3: "who",
    convq4: "what",
    convq5: "who",
  };

  let correctCount = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  for (let question in correctAnswers) {
    // Extracting the correct input element using the right ID
    let userAnswerElement = document.getElementById(question);

    // Ensure the element is found before trying to read its value
    if (userAnswerElement) {
      // Get the value from the input field
      let userAnswerValue = userAnswerElement.value.trim().toLowerCase();

      // Replace multiple spaces with a single space and then trim
      userAnswerValue = userAnswerValue.replace(/\s+/g, " ");

      // Log the user input and the expected correct answer
      console.log(
        `Question: ${question}, User Answer: "${userAnswerValue}", Correct Answer: "${correctAnswers[question]}"`
      );

      if (userAnswerValue === correctAnswers[question]) {
        userAnswerElement.style.color = "green";
        correctCount++;
      } else {
        userAnswerElement.style.color = "red";
      }
    }
  }

  document.getElementById(
    "conversationResult"
  ).textContent = `You got ${correctCount} out of ${totalQuestions} correct.`;
}

function resetConversationAnswers() {
  const inputs = document.querySelectorAll(".conv-input");
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("conversationResult").textContent = "";
}

function checkCorrectionAnswers() {
  const correctAnswers = {
    correctq1: "is",
    correctq2: "she's",
    correctq3: "is",
    correctq4: "i'm",
  };

  let correctCount = 0;
  let totalQuestions = Object.keys(correctAnswers).length;

  for (let question in correctAnswers) {
    // Extracting the correct input element using the right ID
    let userAnswerElement = document.getElementById(question);

    // Ensure the element is found before trying to read its value
    if (userAnswerElement) {
      let userAnswerValue = userAnswerElement.value.trim().toLowerCase();

      if (userAnswerValue === correctAnswers[question]) {
        userAnswerElement.style.color = "green";
        correctCount++;
      } else {
        userAnswerElement.style.color = "red";
      }
    }
  }

  document.getElementById(
    "correctionResult"
  ).textContent = `You got ${correctCount} out of ${totalQuestions} correct.`;
}

function resetCorrectionAnswers() {
  const inputs = document.querySelectorAll(".correct-input");
  inputs.forEach((input) => {
    input.value = "";
    input.style.color = "";
  });
  document.getElementById("correctionResult").textContent = "";
}
