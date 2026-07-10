document.addEventListener("DOMContentLoaded", () => {
	// Configuration: Total time for the countdown in seconds
	const TOTAL_TIME = 30;
	let timeRemaining = TOTAL_TIME;

	const timeDisplay = document.getElementById("timeDisplay");

	function updateTimer() {
		// 1. Calculate the textual display format MM:SS
		const minutes = Math.floor(timeRemaining / 60);
		const seconds = timeRemaining % 60;

		// Pad single digits with leading zeros
		const displayMin = String(minutes).padStart(2, "0");
		const displaySec = String(seconds).padStart(2, "0");
		timeDisplay.textContent = `${displayMin}:${displaySec}`;

		// 2. Optional: Add a text pulse animation class on each tick
		timeDisplay.classList.remove("pulse");
		void timeDisplay.offsetWidth; // Trigger a DOM reflow to restart the animation
		timeDisplay.classList.add("pulse");

		// 3. Handle countdown termination mechanics
		if (timeRemaining <= 0) {
			clearInterval(timerInterval);
			timeDisplay.textContent = "00:00";
			timeDisplay.style.color = "#eb3300"; // Turn text red when complete
		} else {
			timeRemaining--;
		}
	}

	// Initialize the loop immediately and repeat every 1000 milliseconds
	updateTimer();
	const timerInterval = setInterval(updateTimer, 1000);
});
