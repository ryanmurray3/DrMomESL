

function checkAnswers() {
  let answer1 = document.getElementById("q1").value.toLowerCase();
  let answer2 = document.getElementById("q2").value.toLowerCase();

  let feedbackElement = document.getElementById("feedback");
  let feedbackMessage = "";

  if (answer1 === "knife") {
    feedbackMessage += "Question 1 is correct!<br>";
  } else {
    feedbackMessage +=
      "Question 1 is incorrect. The correct answer is 'knife'.<br>";
  }

  if (answer2 === "forks") {
    feedbackMessage += "Question 2 is correct!<br>";
  } else {
    feedbackMessage +=
      "Question 2 is incorrect. The correct answer is 'forks'.<br>";
  }

  feedbackElement.innerHTML = feedbackMessage;
}

function checkQuizAnswers() {
  // Get the user's selected answers
  let q1Answer = document.querySelector('input[name="q1"]:checked');
  let q2Answer = document.querySelector('input[name="q2"]:checked');
  let q3Answer = document.querySelector('input[name="q3"]:checked');
  let q4Answer = document.querySelector('input[name="q4"]:checked');
  let q5Answer = document.querySelector('input[name="q5"]:checked');

  let feedback = "";
  let feedbackElement = document.getElementById("quizFeedback");

  // Reset feedback styling
  feedbackElement.style.color = "red"; // Default to red for incorrect answers

  // Validate Question 1 answer
  if (q1Answer) {
    if (q1Answer.value === "roommates") {
      feedback +=
        "<span style='color:green;'>Question 1 is correct!</span><br>";
    } else {
      feedback +=
        "Question 1 is incorrect. The correct answer is 'roommates'.<br>";
    }
  } else {
    feedback += "Please select an answer for Question 1.<br>";
  }

  // Validate Question 2 answer
  if (q2Answer) {
    if (q2Answer.value === "Brazil") {
      feedback +=
        "<span style='color:green;'>Question 2 is correct!</span><br>";
    } else {
      feedback +=
        "Question 2 is incorrect. The correct answer is 'Brazil'.<br>";
    }
  } else {
    feedback += "Please select an answer for Question 2.<br>";
  }
  // Validate Question 3
  if (q3Answer) {
    if (q3Answer.value === "glasses") {
      feedback +=
        "<span style='color:green;'>Question 3 is correct!</span><br>";
    } else {
      feedback +=
        "Question 3 is incorrect. The correct answer is 'They’re glasses'.<br>";
    }
  } else {
    feedback += "Please select an answer for Question 3.<br>";
  }

  // Validate Question 4
  if (q4Answer) {
    if (q4Answer.value === "oven") {
      feedback +=
        "<span style='color:green;'>Question 4 is correct!</span><br>";
    } else {
      feedback +=
        "Question 4 is incorrect. The correct answer is 'It’s an oven'.<br>";
    }
  } else {
    feedback += "Please select an answer for Question 4.<br>";
  }

  // Validate Question 5
  if (q5Answer) {
    if (q5Answer.value === "Portuguese") {
      feedback +=
        "<span style='color:green;'>Question 5 is correct!</span><br>";
    } else {
      feedback +=
        "Question 5 is incorrect. The correct answer is 'Portuguese'.<br>";
    }
  } else {
    feedback += "Please select an answer for Question 5.<br>";
  }

  // Display feedback
  feedbackElement.innerHTML = feedback;
}


// function checkExercise1() {
//   // You can implement similar logic for checking exercise answers based on user inputs.
// }

function checkAnswersEForm() {
    let feedbackElement = document.getElementById("feedbackExerciseForm");
    let feedbackExerciseForm = "";

    let q1 = document.getElementById("q1").value.toLowerCase();
    let q2 = document.getElementById("q2").value.toLowerCase();
    let q3 = document.getElementById("q3").value.toLowerCase();
    let q4 = document.getElementById("q4").value.toLowerCase();
    let q5 = document.getElementById("q5").value.toLowerCase();
    let q6 = document.getElementById("q6").value.toLowerCase();
    let q7 = document.getElementById("q7").value.toLowerCase();
    let q8 = document.getElementById("q8").value.toLowerCase();

    // Expected correct answers
    let correctAnswers = {
        q1: "a computer",
        q2: "a board",
        q3: "tables",
        q4: "windows",
        q5: "markers",
        q6: "erasers",
        q7: "chairs",
        q8: "a teacher"
    };

    // Checking the answers
    if (q1 === correctAnswers.q1 && q2 === correctAnswers.q2 && q3 === correctAnswers.q3 && q4 === correctAnswers.q4 &&
        q5 === correctAnswers.q5 && q6 === correctAnswers.q6 && q7 === correctAnswers.q7 && q8 === correctAnswers.q8) {
        feedbackExerciseForm = "<span style='color:green;'>All answers are correct! Well done!</span>";
    } else {
        feedbackExerciseForm = "Some answers are incorrect. Please check and try again.";
    }

    feedbackElement.innerHTML = feedbackExerciseForm;
}

function checkExercise4() {
    let item1 = document.getElementById("item1").value.toLowerCase();
    let item2 = document.getElementById("item2").value.toLowerCase();
    let item3 = document.getElementById("item3").value.toLowerCase();
    let item4 = document.getElementById("item4").value.toLowerCase();
    let item5 = document.getElementById("item5").value.toLowerCase();
    let item6 = document.getElementById("item6").value.toLowerCase();
    let item7 = document.getElementById("item7").value.toLowerCase();
    
    let feedback = "";
    let feedbackElement = document.getElementById("exercise4Feedback");

    if (item1 === "an eraser" && item2 === "pens" && item3 === "notebooks" && item4 === "dictionary" && item5 === "apples" && item6 === "orange" && item7 === "banana") {
        feedback = "<span style='color:green;'>All answers are correct!</span>";
    } else {
        feedback = "Check your answers. Some are incorrect.";
    }
    feedbackElement.innerHTML = feedback;
}

function checkExercise5() {
    let proper1 = document.getElementById("proper1").value;
    let proper2 = document.getElementById("proper2").value;
    let proper3 = document.getElementById("proper3").value;
    let proper4 = document.getElementById("proper4").value;
    let proper5 = document.getElementById("proper5").value;
    
    let feedback = "";
    let feedbackElement = document.getElementById("exercise5Feedback");

    if (proper1 === "My friend is Maria." && proper2 === "Mona is from Egypt." && proper3 === "This is Al. He's a teacher. He's from London" && proper4 === "She's from Sao Paulo" && proper5 === "Seattle is a city. It's in the United States.") {
        feedback = "<span style='color:green;'>All answers are correct!</span>";
    } else {
        feedback = "Check your capitalization or punctuation. Did you type the entire sentence(s)";
    }
    feedbackElement.innerHTML = feedback;
}

function checkExercise6() {
    let edit1 = document.getElementById("edit1").value;
    let edit2 = document.getElementById("edit2").value;
    let edit3 = document.getElementById("edit3").value;
    let edit4 = document.getElementById("edit4").value;
    let edit5 = document.getElementById("edit5").value;
    let edit6 = document.getElementById("edit6").value;

    let feedback = "";
    let feedbackElement = document.getElementById("exercise6Feedback");

    if (edit1 === "apples" && edit2 === "Canada" && edit3 === "an orange" && edit4 === "bananas" && edit5 === "a toaster" && edit6 === "people") {
        feedback = "<span style='color:green;'>All answers are correct!</span>";
    } else {
        feedback = "There are still mistakes. Please review your corrections.";
    }
    feedbackElement.innerHTML = feedback;
}

document.getElementById('exerciseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formElements = event.target.elements;
    let output = "Submitted sentences:\n\n";

    for (let i = 0; i < formElements.length - 1; i++) {
        if (formElements[i].value) {
            output += `${formElements[i].previousElementSibling.innerText} ${formElements[i].value}\n`;
        }
    }

    alert(output);
});

document.getElementById('grammarFormA').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Part A form submitted!");
});

document.getElementById('grammarFormB').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Part B form submitted!");
});

// Answer key for validation
const answersPartA = {
    plural_spoon: "spoons",
    plural_class: "classes",
    plural_man: "men",
    plural_teacher: "teachers",
    plural_orange: "oranges"
};

const answersPartB = ["a pineapple", "bananas", "apples", "an eraser", "a notebook"];

const answersPartC = {
    correction1: "an apple",
    correction2: "forks",
    correction3: "an oven",
    correction4: "people",
    correction5: "knives"
};

// Validation for Part A
document.getElementById('pluralForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let scoreA = 0;
    for (let key in answersPartA) {
        let userAnswer = document.getElementById(key).value.toLowerCase().trim();
        if (userAnswer === answersPartA[key]) {
            scoreA++;
        }
    }
    alert(`Part A score: ${scoreA} out of 5`);
});

// Validation for Part B
document.getElementById('shoppingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let scoreB = 0;
    for (let i = 1; i <= 5; i++) {
        let userAnswer = document.getElementById(`item${i}`).value.toLowerCase().trim();
        if (userAnswer === answersPartB[i-1]) {
            scoreB++;
        }
    }
    alert(`Part B score: ${scoreB} out of 5`);
});

// Validation for Part C
document.getElementById('correctionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let scoreC = 0;
    for (let key in answersPartC) {
        let userAnswer = document.getElementById(key).value.toLowerCase().trim();
        if (userAnswer === answersPartC[key]) {
            scoreC++;
        }
    }
    alert(`Part C score: ${scoreC} out of 5`);
});