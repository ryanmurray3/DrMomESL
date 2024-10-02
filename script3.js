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
        
        function checkExercise4Answers() {
            // Store correct answers for each input field
            let correctAnswers = {
                "input-4-3-1": "I am not hot.",
                "input-4-3-1a": "I'm not hot.",
                "input-4-3-2": "She is not from peru.",
                "input-4-3-2b": "She isn't from peru.",
                "input-4-3-3": "They are not students.",
                "input-4-3-3c": "They aren't students.",
                "input-4-3-4": "We are not at a restaurant.",
                "input-4-3-4d": "We aren't at a restaurant.",
                "input-4-3-5": "I am not a teacher.",
                "input-4-3-5e": "I'm not a teacher.",
                "input-4-3-6": "It is not boring.",
                "input-4-3-6f": "It isn't boring.",
                "input-4-3-7": "These are not good chairs.",
                "input-4-3-7g": "These aren't good chairs.",
                "input-4-3-8": "Jenny is not my sister.",
                "input-4-3-8h": "Jenny isn't my sister."
            };
        
             // Loop through each input field and check the answer
        for (let id in correctAnswers) {
            let inputElement = document.getElementById(id);
            
            // Check if the input is correct
            if (inputElement.value.trim() === correctAnswers[id]) {
                // Correct answer: Set background to green and text color to white
                inputElement.style.backgroundColor = "green";
                inputElement.style.color = "white";
            } else {
                // Incorrect answer: Set background to red and text color to white
                inputElement.style.backgroundColor = "red";
                inputElement.style.color = "white";
            }
        
            }
        }

        function resetExercise4Answers() {
            // Get all input fields within Exercise 4
            let inputElements = document.querySelectorAll('#exercise-4 .input-exercise');
        
            // Loop through each input field and reset its value and styles
            inputElements.forEach(input => {
                input.value = "";  // Clear the value
                input.style.backgroundColor = "";  // Reset background color
                input.style.color = "";  // Reset text color
            });
        }
        
        function checkExercise7Answers() {
            // Correct answers for the inputs
            const correctAnswers = {
                'input-7-1A': "The food is good.",
                'input-7-1B': "You’re right.",
                'input-7-2A': "My cousin is from Tokyo. She’s a student.",
                'input-7-2B': "I’m from Tokyo. I am not a student.",
                'input-7-3A': "Seattle is a big city in Washington.",
                'input-7-3B': "No, it isn’t. Seattle is in Washington.",
                'input-7-4A': "The people are friendly here.",
                'input-7-4B': "I know. They’re great.",
                'input-7-5A': "Sydney is a great city.",
                'input-7-5B': "Yes. It is beautiful."
            };
        
            // Loop through each input field and check the answers
            for (const [inputId, correctAnswer] of Object.entries(correctAnswers)) {
                let inputElement = document.getElementById(inputId);
                if (inputElement) {
                    if (inputElement.value.trim() === correctAnswer) {
                        inputElement.style.backgroundColor = "green";
                        inputElement.style.color = "white";
                    } else {
                        inputElement.style.backgroundColor = "red";
                        inputElement.style.color = "white";
                    }
                }
            }
        }
        
        function resetExercise7Answers() {
            // Get all input fields within Exercise 7
            let inputElements = document.querySelectorAll('#exercise-7 .exercise-7-input');
            
            // Loop through each input field and reset its value and styles
            inputElements.forEach(input => {
                input.value = "";  // Clear the value
                input.style.backgroundColor = "";  // Reset background color
                input.style.color = "";  // Reset text color
            });
        }
        