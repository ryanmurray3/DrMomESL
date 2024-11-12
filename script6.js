// JavaScript File for Interactive Web Page

// Add interactivity to the exercises

document.addEventListener('DOMContentLoaded', () => {
    // Handle click events for comprehension questions
    const comprehensionItems = document.querySelectorAll('#after-you-read ul li');
    comprehensionItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on: ${item.textContent}`);
        });
    });

    // Toggle visibility for conversation examples
    const conversationExamples = document.querySelectorAll('.conversation-example, .conversation-editing, .example-conversation');
    conversationExamples.forEach(example => {
        example.addEventListener('click', () => {
            example.classList.toggle('highlight');
        });
    });

    // Add a function to validate Exercise 4 inputs
    const exercise4Inputs = document.querySelectorAll('#focused-practice .exercise input');
    document.querySelector('#focused-practice').addEventListener('submit', (e) => {
        e.preventDefault();
        exercise4Inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = 'green';
            }
        });
    });

    // Toggle answers for Exercise 6 - Listening
    const exercise6Answers = document.querySelectorAll('#communication-practice .exercise ul li');
    exercise6Answers.forEach(answer => {
        answer.addEventListener('click', () => {
            answer.classList.toggle('highlight-answer');
        });
    });

    // Highlight selected answers in Exercise 8 - Guess Where It Is
    const exercise8Items = document.querySelectorAll('#focused-practice .exercise8-item');
    exercise8Items.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });
});

// Additional utility functions
function highlightElement(element) {
    element.style.backgroundColor = '#ff0';
}

function removeHighlight(element) {
    element.style.backgroundColor = '';
}

// Example interaction with form input fields
const exerciseInputs = document.querySelectorAll('.exercise input[type="text"]');
exerciseInputs.forEach(input => {
    input.addEventListener('focus', () => {
        highlightElement(input);
    });
    input.addEventListener('blur', () => {
        removeHighlight(input);
    });
});

// JavaScript File for Matching Game, Interactive Exercises, and Exercise 2 Functionality

document.addEventListener('DOMContentLoaded', () => {
    // Matching game functionality for comprehension exercise A
    const matchItems = document.querySelectorAll('.match-item');
    const matchSelects = document.querySelectorAll('.matching-game select');
    const submitButton = document.querySelector('#submit-matching-game');

    submitButton.addEventListener('click', () => {
        matchItems.forEach((item, index) => {
            const select = matchSelects[index];
            const correctAnswer = select.dataset.correct;

            if (select.value === correctAnswer) {
                item.style.backgroundColor = '#e6ffe6'; // Correct - light green
            } else {
                item.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
            }
        });
    });

    // Interactive exercise B: Collect and compare answers
    const exerciseBAnswers = document.querySelectorAll('.exercise-b input');
    const exerciseBButton = document.querySelector('#submit-exercise-b');

    exerciseBButton.addEventListener('click', () => {
        let userAnswers = [];
        exerciseBAnswers.forEach(answer => {
            userAnswers.push(answer.value.trim());
        });
        alert('Your answers: ' + userAnswers.join(', '));
    });

    // Exercise 2: Prepositions in Addresses functionality
    const exercise2Selects = document.querySelectorAll('#focused-practice select');
    const exercise2SubmitButton = document.querySelector('#submit-exercise-2');
    const exercise2ResetButton = document.querySelector('#reset-exercise-2');

    // Submit button functionality
    exercise2SubmitButton.addEventListener('click', () => {
        exercise2Selects.forEach(select => {
            if (select.value !== '') {
                if (select.value === select.dataset.correct) {
                    select.style.backgroundColor = '#e6ffe6'; // Correct - light green
                } else {
                    select.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
                }
            } else {
                select.style.backgroundColor = '#ffcccb'; // Unanswered - light pink
            }
        });
    });

    // Reset button functionality
    exercise2ResetButton.addEventListener('click', () => {
        exercise2Selects.forEach(select => {
            select.value = '';
            select.style.backgroundColor = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Exercise 4: Questions with Where and Prepositions functionality
    const exercise4Selects = document.querySelectorAll('#exercise-4 select');
    const exercise4SubmitButton = document.querySelector('#submit-exercise-4');
    const exercise4ResetButton = document.querySelector('#reset-exercise-4');

    // Submit button functionality for Exercise 4
    exercise4SubmitButton.addEventListener('click', () => {
        exercise4Selects.forEach(select => {
            if (select.value !== '') {
                if (select.value === select.dataset.correct) {
                    select.style.backgroundColor = '#e6ffe6'; // Correct - light green
                } else {
                    select.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
                }
            } else {
                select.style.backgroundColor = '#ffcccb'; // Unanswered - light pink
            }
        });
    });

    // Reset button functionality for Exercise 4
    exercise4ResetButton.addEventListener('click', () => {
        exercise4Selects.forEach(select => {
            select.value = '';
            select.style.backgroundColor = '';
        });
    });

    // Exercise 5: Editing functionality
    const exercise5Inputs = document.querySelectorAll('#exercise-5 input');
    const exercise5SubmitButton = document.querySelector('#submit-exercise-5');
    const exercise5ResetButton = document.querySelector('#reset-exercise-5');

    const correctAnswers = {
        q1: "where's",
        q2: "to",
        q3: "from",
        q4: "at",
        q5: "on"
    };

    // Submit button functionality for Exercise 5
    exercise5SubmitButton.addEventListener('click', () => {
        exercise5Inputs.forEach(input => {
            const correctAnswer = correctAnswers[input.id];
            if (input.value.trim().toLowerCase() === correctAnswer) {
                input.style.backgroundColor = '#e6ffe6'; // Correct - light green
            } else {
                input.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
            }
        });
    });

    // Reset button functionality for Exercise 5
    exercise5ResetButton.addEventListener('click', () => {
        exercise5Inputs.forEach(input => {
            input.value = '';
            input.style.backgroundColor = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Exercise 6: Listening Matching Game functionality
    const exercise6Selects = document.querySelectorAll('#exercise-6 select');
    const exercise6SubmitButton = document.querySelector('#submit-exercise-6');
    const exercise6ResetButton = document.querySelector('#reset-exercise-6');

    // Submit button functionality for Exercise 6
    exercise6SubmitButton.addEventListener('click', () => {
        exercise6Selects.forEach(select => {
            if (select.value !== '') {
                if (select.value === select.dataset.correct) {
                    select.style.backgroundColor = '#e6ffe6'; // Correct - light green
                } else {
                    select.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
                }
            } else {
                select.style.backgroundColor = '#ffcccb'; // Unanswered - light pink
            }
        });
    });

    // Reset button functionality for Exercise 6
    exercise6ResetButton.addEventListener('click', () => {
        exercise6Selects.forEach(select => {
            select.value = '';
            select.style.backgroundColor = '';
        });
    });
});

// JavaScript for Section A
function checkAnswersA() {
    const answers = document.querySelectorAll('#review-a select');
    const correctAnswers = ['in', 'in', 'at', 'from', 'on'];
    answers.forEach((select, index) => {
        if (select.value === correctAnswers[index]) {
            select.style.backgroundColor = '#c8e6c9';
        } else {
            select.style.backgroundColor = '#ffcdd2';
        }
    });
}
function resetAnswersA() {
    const answers = document.querySelectorAll('#review-a select');
    answers.forEach(select => {
        select.value = '';
        select.style.backgroundColor = '#fff';
    });
}

// JavaScript for Section B
function checkAnswersB() {
    const answers = {
        b1: 'at',
        b2: 'in',
        b3: 'on',
        b4: 'across',
        b5: 'next to'
    };
    for (let key in answers) {
        const input = document.getElementById(key);
        if (input.value.trim().toLowerCase() === answers[key]) {
            input.style.backgroundColor = '#c8e6c9';
        } else {
            input.style.backgroundColor = '#ffcdd2';
        }
    }
}
function resetAnswersB() {
    const inputs = document.querySelectorAll('#review-b input');
    inputs.forEach(input => {
        input.value = '';
        input.style.backgroundColor = '#fff';
    });
}

// JavaScript for Section C
function checkAnswersC() {
    const answers = {
        c1: 'Is your apartment on the second floor?',
        c2: 'It’s on First Avenue. It’s between 8th and 9th Streets.',
        c3: 'Is it next to the post office?'
    };
    for (let key in answers) {
        const input = document.getElementById(key);
        if (input.value.trim().toLowerCase() === answers[key].toLowerCase()) {
            input.style.backgroundColor = '#c8e6c9';
        } else {
            input.style.backgroundColor = '#ffcdd2';
        }
    }
}
function resetAnswersC() {
    const inputs = document.querySelectorAll('#review-c input');
    inputs.forEach(input => {
        input.value = '';
        input.style.backgroundColor = '#fff';
    });
}


