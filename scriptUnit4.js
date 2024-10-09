// Placeholder for future interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log("Unit 4 Workbook Loaded");

    // Example interactive behavior if needed later
    const conversationBlocks = document.querySelectorAll('.conversation');
    
    conversationBlocks.forEach((block) => {
        block.addEventListener('click', () => {
            block.style.backgroundColor = '#e0f7fa';
        });
    });
});

// Basic interactivity for the listening exercise
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('li');
            parent.style.backgroundColor = '#d0f0d0';  // Highlight when selected
        });
    });
});



document.getElementById('submit-button').addEventListener('click', checkAnswers);

function checkAnswers() {
    const correctAnswers = {
        'input-1': 'd',
        'input-2': 'e',
        'input-3': 'g',
        'input-4': 'c',
        'input-5': 'f',
        'input-6': 'a',
        'input-7': 'b'
    };

    let feedback = '';

    for (let id in correctAnswers) {
        // Ensure case-insensitive comparison and trim white spaces
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = correctAnswers[id].toLowerCase();

        if (userAnswer === correctAnswer) {
            feedback += `<p class="correct">Answer for question ${id.split('-')[1]} is correct!</p>`;
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(id).style.color = "white";
        } else {
            feedback += `<p class="incorrect">Answer for question ${id.split('-')[1]} is incorrect. The correct answer is ${correctAnswer}.</p>`;
            document.getElementById(id).style.backgroundColor = "red";
            document.getElementById(id).style.color = "white";
        }
    }

    document.getElementById('feedback').innerHTML = feedback;
}
// Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetAnswers);

function resetAnswers() {
    // Loop through all input fields and reset their values and styles
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach(input => {
        input.value = "";  // Clear the value
        input.style.backgroundColor = "";  // Reset background color
        input.style.color = "";  // Reset text color
    });

    // Clear the feedback section
    document.getElementById('feedback').innerHTML = "";
}

document.getElementById('submit-button-ex2').addEventListener('click', checkAnswersEx2);

function checkAnswersEx2() {
    const ex2correctAnswers = {
        'ex2-1': 'that',
        'ex2-2': 'those',
        'ex2-3': 'that',
        'ex2-4': 'that',
        'ex2-5': 'those',
        'ex2-6': 'that'
    };
    let feedback = '';

    for (let id in ex2correctAnswers) {
        // Ensure case-insensitive comparison and trim white spaces
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = ex2correctAnswers[id].toLowerCase();

        if (userAnswer === correctAnswer) {
            feedback += `<p class="correct">Answer for question ${id.split('-')[1]} is correct!</p>`;
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(id).style.color = "white";
        } else {
            feedback += `<p class="incorrect">Answer for question ${id.split('-')[1]} is incorrect. The correct answer is ${correctAnswer}.</p>`;
            document.getElementById(id).style.backgroundColor = "red";
            document.getElementById(id).style.color = "white";
        }
    }

}

// Add event listener to the reset button
document.getElementById('reset-button-ex2').addEventListener('click', resetAnswers);

function resetAnswers() {
    // Loop through all input fields and reset their values and styles
    const inputElements = document.querySelectorAll('input[type="text"]');
    inputElements.forEach(input => {
        input.value = "";  // Clear the value
        input.style.backgroundColor = "";  // Reset background color
        input.style.color = "";  // Reset text color
    });

}

document.getElementById('submit-button-ex3').addEventListener('click', checkPossessiveAnswers);
document.getElementById('reset-button-ex3').addEventListener('click', resetPossessiveAnswers);


const possessiveCorrectAnswers = {
    'answer-1': 'my',
    'answer-2': 'our',
    'answer-3': 'her',
    'answer-4': 'his',
    'answer-5': 'its',
    'answer-6': 'their'
};

function checkPossessiveAnswers() {
    let possessiveFeedback = '';

    for (let id in possessiveCorrectAnswers) {
        const selectedOption = document.querySelector(`#${id} .option.selected`);
        const correctAnswer = possessiveCorrectAnswers[id];
        
        if (selectedOption) {
            const userAnswer = selectedOption.getAttribute('data-answer');
            
            if (userAnswer === correctAnswer) {
                possessiveFeedback += `<p class="correct">Answer for question ${id.split('-')[1]} is correct!</p>`;
                selectedOption.style.backgroundColor = "green";
                selectedOption.style.color = "white";
            } else {
                possessiveFeedback += `<p class="incorrect">Answer for question ${id.split('-')[1]} is incorrect. The correct answer is ${correctAnswer}.</p>`;
                selectedOption.style.backgroundColor = "red";
                selectedOption.style.color = "white";
            }
        } else {
            possessiveFeedback += `<p class="incorrect">Answer for question ${id.split('-')[1]} is missing. Please select an answer.</p>`;
        }
    }

    document.getElementById('feedback-ex3').innerHTML = possessiveFeedback;
}

// Add a reset button to clear the answers
function resetPossessiveAnswers() {
    // Loop through all selected options and remove selected class, reset background and color
    const selectedOptions = document.querySelectorAll('.option.selected');
    selectedOptions.forEach(option => {
        option.classList.remove('selected');
        option.style.backgroundColor = '';
        option.style.color = '';
    });

    // Clear the feedback section
    document.getElementById('feedback-ex3').innerHTML = '';
}


// Add click event listeners to all the options for possessive exercise
const possessiveOptions = document.querySelectorAll('.option');
possessiveOptions.forEach(option => {
    option.addEventListener('click', function () {
        // Remove selected class from sibling options
        const siblings = this.parentElement.querySelectorAll('.option');
        siblings.forEach(sibling => sibling.classList.remove('selected'));

        // Add selected class to the clicked option
        this.classList.add('selected');
    });
});

// Add event listeners for submit and reset buttons
document.getElementById('submit-button-ex4').addEventListener('click', checkPossessiveAdjectivesEx4);
document.getElementById('reset-button-ex4').addEventListener('click', resetPossessiveAdjectivesEx4);

// Correct answers for Exercise 4
const possessiveAdjectivesAnswersEx4 = {
    'input-ex4-1': 'my',
    'input-ex4-2': 'his',
    'input-ex4-3': 'their',
    'input-ex4-4': 'our',
    'input-ex4-5': 'my',
    'input-ex4-6': 'his',
    'input-ex4-7': 'our',
    'input-ex4-8': 'her',
    'input-ex4-9': 'his'
};

// Function to check answers for Exercise 4
function checkPossessiveAdjectivesEx4() {
    let feedbackEx4 = '';

    for (let id in possessiveAdjectivesAnswersEx4) {
        const userAnswer = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswer = possessiveAdjectivesAnswersEx4[id];

        if (userAnswer === correctAnswer) {
            feedbackEx4 += `<p class="correct">Answer for input ${id.split('-')[2]} is correct!</p>`;
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(id).style.color = "white";
        } else {
            feedbackEx4 += `<p class="incorrect">Answer for input ${id.split('-')[2]} is incorrect. The correct answer is ${correctAnswer}.</p>`;
            document.getElementById(id).style.backgroundColor = "red";
            document.getElementById(id).style.color = "white";
        }
    }

    // document.getElementById('feedback-ex4').innerHTML = feedbackEx4;
}

// Function to reset answers for Exercise 4
function resetPossessiveAdjectivesEx4() {
    // Loop through all input fields and reset their values and styles
    const inputElements = document.querySelectorAll('#more-possessive-adjectives-section input[type="text"]');
    inputElements.forEach(input => {
        input.value = "";  // Clear the value
        input.style.backgroundColor = "";  // Reset background color
        input.style.color = "";  // Reset text color
    });

    // Clear the feedback section
    // document.getElementById('feedback-ex4').innerHTML = "";
}

// JavaScript for Review Exercise A

// Add event listeners for submit and reset buttons

document.getElementById('submit-button-A').addEventListener('click', checkReviewExerciseA);
document.getElementById('reset-button-A').addEventListener('click', resetReviewExerciseA);

// Function to check answers for review-exercise-A
function checkReviewExerciseA() {
    const correctAnswersA = {
        'input-A-1': 'that',
        'input-A-2': 'those',
        'input-A-3': 'that',
        'input-A-4': 'that',
        'input-A-5': 'those'
    };

    let feedbackA = '';

    for (let id in correctAnswersA) {
        const userAnswerA = document.getElementById(id).value.trim().toLowerCase();
        const correctAnswerA = correctAnswersA[id].toLowerCase();

        if (userAnswerA === correctAnswerA) {
            feedbackA += `<p class='correct'>Answer for question ${id.split('-')[2]} is correct!</p>`;
            document.getElementById(id).style.backgroundColor = 'green';
            document.getElementById(id).style.color = 'white';
        } else {
            feedbackA += `<p class='incorrect'>Answer for question ${id.split('-')[2]} is incorrect. The correct answer is ${correctAnswerA}.</p>`;
            document.getElementById(id).style.backgroundColor = 'red';
            document.getElementById(id).style.color = 'white';
        }
    }

    document.getElementById('feedback-A').innerHTML = feedbackA;
}

// Function to reset review-exercise-A
function resetReviewExerciseA() {
    const inputElementsA = document.querySelectorAll('.review-exercise-A input[type="text"]');
    inputElementsA.forEach(input => {
        input.value = '';
        input.style.backgroundColor = '';
        input.style.color = '';
    });
    document.getElementById('feedback-A').innerHTML = '';
}

// JavaScript for Review Exercise B

document.getElementById('submit-button-B').addEventListener('click', checkReviewExerciseB);
document.getElementById('reset-button-B').addEventListener('click', resetReviewExerciseB);

// Function to check answers for review-exercise-B
// Add event listener for the submit button
document.getElementById('submit-button-B').addEventListener('click', checkReviewExerciseB);

function checkReviewExerciseB() {
    const correctAnswersB = {
        'answer-B-1': 'He',
        'answer-B-2': 'Her',
        'answer-B-3': 'your',
        'answer-B-4': "They're",
        'answer-B-5': "It's"
    };

    let feedbackB = '';

    for (let id in correctAnswersB) {
        const selectedOptionB = document.querySelector(`#${id} .option.selected`);
        const correctAnswerB = correctAnswersB[id];

        if (selectedOptionB) {
            const userAnswerB = selectedOptionB.getAttribute('data-answer');

            if (userAnswerB === correctAnswerB) {
                feedbackB += `<p class='correct'>Answer for question ${id.split('-')[2]} is correct!</p>`;
                selectedOptionB.style.backgroundColor = 'green';
                selectedOptionB.style.color = 'white';
            } else {
                feedbackB += `<p class='incorrect'>Answer for question ${id.split('-')[2]} is incorrect. The correct answer is ${correctAnswerB}.</p>`;
                selectedOptionB.style.backgroundColor = 'red';
                selectedOptionB.style.color = 'white';
            }
        } else {
            feedbackB += `<p class='incorrect'>Answer for question ${id.split('-')[2]} is missing. Please select an answer.</p>`;
        }
    }

    document.getElementById('feedback-B').innerHTML = feedbackB;
}

// Add click event listeners to all the options to mark them as selected
const optionsB = document.querySelectorAll('.review-exercise-B .option');
optionsB.forEach(option => {
    option.addEventListener('click', function () {
        // Remove selected class from sibling options
        const siblings = this.parentElement.querySelectorAll('.option');
        siblings.forEach(sibling => sibling.classList.remove('selected'));

        // Add selected class to the clicked option
        this.classList.add('selected');
    });
});

// Add event listener for the reset button
document.getElementById('reset-button-B').addEventListener('click', resetReviewExerciseB);

function resetReviewExerciseB() {
    // Reset all options by removing 'selected' class and styles
    const optionsB = document.querySelectorAll('.review-exercise-B .option');
    optionsB.forEach(option => {
        option.classList.remove('selected');
        option.style.backgroundColor = '';  // Reset background color
        option.style.color = '';  // Reset text color
    });

    // Clear feedback
    document.getElementById('feedback-B').innerHTML = '';
}


// Function to reset review-exercise-B
function resetReviewExerciseB() {
    const optionElementsB = document.querySelectorAll('.review-exercise-B .option');
    optionElementsB.forEach(option => {
        option.classList.remove('selected');
        option.style.backgroundColor = '';
        option.style.color = '';
    });
    document.getElementById('feedback-B').innerHTML = '';
}

