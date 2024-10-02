document.addEventListener("DOMContentLoaded", () => {
    // Your future interactive scripts can be added here.
    console.log("Page Loaded and Ready");
});
document.addEventListener("DOMContentLoaded", () => {
    // Ready for any interactive script or additional logic
    console.log("Page Loaded Successfully");
});

        let currentWordElement = null;

        // Add event listeners to all red words
        document.querySelectorAll('.red').forEach(word => {
            word.addEventListener('click', function(event) {
                currentWordElement = event.target;
                const inputBox = document.getElementById('inputBox');
                inputBox.style.display = 'block';
                inputBox.style.top = event.pageY + 'px';
                inputBox.style.left = event.pageX + 'px';
                document.getElementById('correctWord').value = ''; // Reset the input box
            });
        });

        function submitCorrection() {
            const newWord = document.getElementById('correctWord').value;
            if (currentWordElement && newWord) {
                currentWordElement.textContent = newWord;
                currentWordElement.style.color = 'black'; // Change the color to indicate correction
                document.getElementById('inputBox').style.display = 'none';
            }
        }

        // Hide input box if clicking outside
        document.addEventListener('click', function(event) {
            const inputBox = document.getElementById('inputBox');
            if (!inputBox.contains(event.target) && event.target.className !== 'red') {
                inputBox.style.display = 'none';
            }
        });

        function checkExercise2Answers() {
            // Correct answers, currently set to 'temporary' for each input
            const correctAnswers = {
                "input-2-1": "she is",
                "input-2-2": "They are",
                "input-2-3": "It is",
                "input-2-4": "We are",
                "input-2-5": "He is",
                "input-2-6": "We are",
                "input-2-7": "She is",
                "input-2-8": "I am",
                "input-2-9": "It is"
            };
        
            // Iterate over each input and check the answer
            for (let key in correctAnswers) {
                const userInput = document.getElementById(key).value.trim();
                const feedbackElement = document.getElementById(key + "-feedback");
        
                // If feedback element doesn't exist, create it
                if (!feedbackElement) {
                    const inputElement = document.getElementById(key);
                    const newFeedbackElement = document.createElement("span");
                    newFeedbackElement.id = key + "-feedback";
                    inputElement.parentNode.appendChild(newFeedbackElement);
                }
        
                // Compare user input with correct answer and display feedback
                if (userInput.toLowerCase() === correctAnswers[key].toLowerCase()) {
                    document.getElementById(key + "-feedback").innerHTML = "<span style='color:green;'>Correct!</span>";
                } else {
                    document.getElementById(key + "-feedback").innerHTML = "<span style='color:red;'>Incorrect, try again.</span>";
                }
            }
        }
        
        function checkExercise3Answers() {
            // Store correct answers for each input field
            let correctAnswers = {
                "input-3-1": "it's", // contraction for "It is"
                "input-3-2": "isn't", // contraction for "It is not"
                "input-3-3": "they're", // contraction for "They are"
                "input-3-4": "she's", // contraction for "She is"
                "input-3-5": "they're", // contraction for "They are not"
                "input-3-6": "we're", // contraction for "We are"
                "input-3-7": "it's", // contraction for "It is"
                "input-3-8": "isn't", //contraction for "is not"
                "input-3-9": "he's", // contraction for "He is not"
                "input-3-10": "i'm" // contraction for "I am not"
            };
        
            // Loop through each input field and check the answer
            for (let id in correctAnswers) {
                let inputElement = document.getElementById(id);
                let feedbackElement = document.createElement('span');
                feedbackElement.id = `${id}-feedback`;
                
                // Clear any existing feedback
                if (document.getElementById(`${id}-feedback`)) {
                    document.getElementById(`${id}-feedback`).remove();
                }
        
                // Check if the input is correct
                if (inputElement.value.trim().toLowerCase() === correctAnswers[id]) {
                    feedbackElement.innerHTML = "<span color='green'>Correct!</span>";
                } else {
                    feedbackElement.innerHTML = "<span color='red'>Incorrect!</span>";
                }
        
                // Append feedback after the input element
                inputElement.parentNode.appendChild(feedbackElement);
            }
        }
        