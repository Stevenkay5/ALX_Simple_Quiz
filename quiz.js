// 1. Function declaration
function checkAnswer() {

    // 2. Correct answer
    let correctAnswer = "4";

    // 3. Retrieve user's selected answer
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option selected, stop and show message
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    let userAnswer = selectedOption.value;

    // 4. Compare user answer with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// 5. Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
