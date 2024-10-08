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

