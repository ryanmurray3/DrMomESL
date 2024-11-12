document.addEventListener('DOMContentLoaded', () => {
    setupExercise4QuestionsWithPrepositions();
    setupMatchingGame('#after-you-read', '#submit-matching-game', '#reset-matching-game', '.matching-game select');
    setupDropdownExercise('#focused-practice', '#submit-exercise-2', '#reset-exercise-2', '#focused-practice select');
    setupDropdownExercise('#exercise-4', '#submit-exercise-4', '#reset-exercise-4', '#exercise-4 select');
    setupEditingExercise('#exercise-5', '#submit-exercise-5', '#reset-exercise-5', '#exercise-5 input[type="text"]');
    setupDropdownExercise('#exercise-6', '#submit-exercise-6', '#reset-exercise-6', '#exercise-6 select');
    setupExercise2PrepositionsInAddresses();
    setupReviewSections();
});

// Function to handle dropdown selection exercises
function setupDropdownExercise(sectionSelector, submitSelector, resetSelector, inputSelector) {
    const section = document.querySelector(sectionSelector);
    if (section) {
        const inputs = section.querySelectorAll(inputSelector);
        const submitButton = document.querySelector(submitSelector);
        const resetButton = document.querySelector(resetSelector);

        if (submitButton && resetButton) {
            submitButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    const correctAnswer = input.dataset.correct;

                    if (input.value !== '') {
                        input.style.backgroundColor = input.value.toLowerCase() === correctAnswer?.toLowerCase()
                            ? '#e6ffe6' // Correct - light green
                            : '#ffe6e6'; // Incorrect - light red
                    } else {
                        input.style.backgroundColor = '#ffcccb'; // Unanswered - light pink
                    }
                });
            });

            resetButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    input.value = '';
                    input.style.backgroundColor = '';
                });
            });
        }
    }
}

// Function to handle Exercise 4: Questions with Where and Prepositions
function setupExercise4QuestionsWithPrepositions() {
    setupDropdownExercise('#exercise-4', '#submit-exercise-4', '#reset-exercise-4', '#exercise-4 select');
}

// Function to handle Exercise 2: Prepositions in Addresses
function setupExercise2PrepositionsInAddresses() {
    setupDropdownExercise('#focused-practice-exercise-2', '#submit-exercise-2', '#reset-exercise-2', '#focused-practice-exercise-2 select');
}

// Function to handle matching exercises
function setupMatchingGame(sectionSelector, submitSelector, resetSelector, inputSelector) {
    const section = document.querySelector(sectionSelector);
    if (section) {
        const inputs = section.querySelectorAll(inputSelector);
        const submitButton = document.querySelector(submitSelector);
        const resetButton = document.querySelector(resetSelector);

        if (submitButton && resetButton) {
            // Submit button functionality
            submitButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    const correctAnswer = input.dataset.correct;
                    
                    if (input.value !== '') {
                        input.style.backgroundColor = input.value.toLowerCase() === correctAnswer?.toLowerCase()
                            ? '#e6ffe6' // Correct - light green
                            : '#ffe6e6'; // Incorrect - light red
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
    }
}


// Function to handle editing exercises
function setupEditingExercise(sectionSelector, submitSelector, resetSelector, inputSelector) {
    const section = document.querySelector(sectionSelector);
    if (section) {
        const inputs = section.querySelectorAll(inputSelector);
        const submitButton = document.querySelector(submitSelector);
        const resetButton = document.querySelector(resetSelector);

        if (submitButton && resetButton) {
            const correctAnswers = {
                q1: "where's",
                q2: "to",
                q3: "from",
                q4: "at",
                q5: "on"
            };

            submitButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    const correctAnswer = correctAnswers[input.id];
                    input.style.backgroundColor = input.value.trim().toLowerCase() === correctAnswer
                        ? '#e6ffe6' // Correct - light green
                        : '#ffe6e6'; // Incorrect - light red
                });
            });

            resetButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    input.value = '';
                    input.style.backgroundColor = '';
                });
            });
        }
    }
}

// Function to handle review sections
function setupReviewSections() {
    setupDropdownExercise('#review-a', '#submit-review-a', '#reset-review-a', '#review-a select');

    // Review B Section
    setupReviewInputs('#review-b', {
        b1: 'at',
        b2: 'in',
        b3: 'on',
        b4: 'across',
        b5: 'next to'
    }, '.exercise-b-buttons');

    // Review C Section
    setupReviewInputs('#review-c', {
        c1: 'No, it’s on the third floor.',
        c2: 'It’s on First Avenue. It’s between 8th and 9th Streets.',
        c3: 'Is it next to the post office?'
    }, '.exercise-c-buttons');
}

// Helper function to handle review inputs for different sections
function setupReviewInputs(sectionSelector, answers, buttonContainerSelector) {
    const inputs = document.querySelectorAll(`${sectionSelector} input`);
    const buttonContainer = document.querySelector(buttonContainerSelector);
    if (buttonContainer) {
        const [submitButton, resetButton] = buttonContainer.querySelectorAll('button');
        
        if (submitButton && resetButton) {
            submitButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    input.style.backgroundColor = input.value.trim().toLowerCase() === answers[input.id].toLowerCase()
                        ? '#c8e6c9' // Correct
                        : '#ffcdd2'; // Incorrect
                });
            });

            resetButton.addEventListener('click', () => {
                inputs.forEach(input => {
                    input.value = '';
                    input.style.backgroundColor = '';
                });
            });
        }
    }
}
