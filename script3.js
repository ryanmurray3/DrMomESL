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