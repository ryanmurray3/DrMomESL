// JavaScript File for Interactive Web Page

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

    // Handle submission and reset for exercises
    setupExercise('#focused-practice', '#submit-exercise-2', '#reset-exercise-2', '#focused-practice select');
    setupExercise('#exercise-4', '#submit-exercise-4', '#reset-exercise-4', '#exercise-4 select');
    setupExercise('#exercise-5', '#submit-exercise-5', '#reset-exercise-5', '#exercise-5 input[type="text"]');
    setupExercise('#exercise-6', '#submit-exercise-6', '#reset-exercise-6', '#exercise-6 select');
    setupReviewSection();
});

function setupExercise(sectionSelector, submitSelector, resetSelector, inputSelector) {
    const section = document.querySelector(sectionSelector);
    const inputs = section.querySelectorAll(inputSelector);
    const submitButton = document.querySelector(submitSelector);
    const resetButton = document.querySelector(resetSelector);

    // Submit button functionality
    submitButton.addEventListener('click', () => {
        inputs.forEach(input => {
            const correctAnswer = input.dataset.correct;

            if (input.value !== '') {
                if (input.value.toLowerCase() === correctAnswer?.toLowerCase()) {
                    input.style.backgroundColor = '#e6ffe6'; // Correct - light green
                } else {
                    input.style.backgroundColor = '#ffe6e6'; // Incorrect - light red
                }
            } else {
                input.style.backgroundColor = '#ffcccb'; // Unanswered - light pink
            }
        });
    });

    // Reset button functionality
    resetButton.addEventListener('click', () => {
        inputs.forEach(input => {
            input.value = '';
            input.style.backgroundColor = '';
        });
    });
}

function setupReviewSection() {
    // JavaScript for Unit 6 Review Section A
    const reviewASelects = document.querySelectorAll('#review-a select');
    const reviewASubmitButton = document.querySelector('#submit-review-a');
    const reviewAResetButton = document.querySelector('#reset-review-a');

    reviewASubmitButton.addEventListener('click', () => {
        const correctAnswers = ['in', 'in', 'at', 'from', 'on'];
        reviewASelects.forEach((select, index) => {
            if (select.value === correctAnswers[index]) {
                select.style.backgroundColor = '#c8e6c9'; // Correct
            } else {
                select.style.backgroundColor = '#ffcdd2'; // Incorrect
            }
        });
    });

    reviewAResetButton.addEventListener('click', () => {
        reviewASelects.forEach(select => {
            select.value = '';
            select.style.backgroundColor = '#fff';
        });
    });

    // JavaScript for Unit 6 Review Section B
    const reviewBInputs = document.querySelectorAll('#review-b input');
    const reviewBSubmitButton = document.querySelector('#submit-review-b');
    const reviewBResetButton = document.querySelector('#reset-review-b');

    reviewBSubmitButton.addEventListener('click', () => {
        const answers = {
            b1: 'at',
            b2: 'in',
            b3: 'on',
            b4: 'across',
            b5: 'next to'
        };
        reviewBInputs.forEach(input => {
            if (input.value.trim().toLowerCase() === answers[input.id]) {
                input.style.backgroundColor = '#c8e6c9'; // Correct
            } else {
                input.style.backgroundColor = '#ffcdd2'; // Incorrect
            }
        });
    });

    reviewBResetButton.addEventListener('click', () => {
        reviewBInputs.forEach(input => {
            input.value = '';
            input.style.backgroundColor = '#fff';
        });
    });

    // JavaScript for Unit 6 Review Section C
    const reviewCInputs = document.querySelectorAll('#review-c input');
    const reviewCSubmitButton = document.querySelector('#submit-review-c');
    const reviewCResetButton = document.querySelector('#reset-review-c');

    reviewCSubmitButton.addEventListener('click', () => {
        const answers = {
            c1: 'Is your apartment on the second floor?',
            c2: 'It’s on First Avenue. It’s between 8th and 9th Streets.',
            c3: 'Is it next to the post office?'
        };
        reviewCInputs.forEach(input => {
            if (input.value.trim().toLowerCase() === answers[input.id].toLowerCase()) {
                input.style.backgroundColor = '#c8e6c9'; // Correct
            } else {
                input.style.backgroundColor = '#ffcdd2'; // Incorrect
            }
        });
    });

    reviewCResetButton.addEventListener('click', () => {
        reviewCInputs.forEach(input => {
            input.value = '';
            input.style.backgroundColor = '#fff';
        });
    });
}
