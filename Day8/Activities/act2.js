//global variables
let minutes, seconds, timerInt;

// Execute code when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Attach event listeners to buttons
  document.getElementById('startBtn').addEventListener('click', startTimer);
  document.getElementById('resetBtn').addEventListener('click', resetTimer);
});

// Start the timer
async function startTimer() {
  // Retrieve user input
  minutes = parseInt(document.getElementById('timeInput').value);
  seconds = 0;

  // Validate input
  if (isNaN(minutes) || minutes < 1 || minutes > 60) {
    await showAlert("Please enter a valid time between 1 and 60 minutes.");
    return;
  }

  // Update initial display
  updateTimerDisplay();

  // Asynchronous interval to decrement time every second
  timerInt = setInterval(async () => {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      // Stop the interval and show an alert when time is up
      clearInterval(timerInt);
      await showAlert("Time is up!");
    }

    // Update timer display
    updateTimerDisplay();
  }, 1000);
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInt);
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  document.getElementById('timeInput').value = '';
}

// Update the timer display on the webpage
function updateTimerDisplay() {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Show an alert
async function showAlert(message) {
  return new Promise(resolve => {
    alert(message);
    resolve();
  });
}
