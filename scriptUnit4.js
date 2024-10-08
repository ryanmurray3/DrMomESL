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
        'input-1': 'c',
        'input-2': 'e',
        'input-3': 'g',
        'input-4': 'b',
        'input-5': 'f',
        'input-6': 'a',
        'input-7': 'd'
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


