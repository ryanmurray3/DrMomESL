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