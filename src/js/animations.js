// src/js/animations.js

document.addEventListener("DOMContentLoaded", () => {
	const animationTargets = document.querySelectorAll(".reveal-fade-up");

	// 1. Configuration options for the observer
	const observerOptions = {
		root: null, // Uses the browser viewport as the container frame
		rootMargin: "0px", // No boundary expansion offsets
		threshold: 0.3, // Triggers when 15% of the element is visible on screen
	};

	// 2. Define the observer's action callback
	const scrollObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			// If the element enters the viewport threshold zone
			if (entry.isIntersecting) {
				// Add our active visibility class
				entry.target.classList.add("reveal-visible");

				// Stop observing this item so the animation only plays ONCE
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// 3. Register all target items into the tracker engine
	animationTargets.forEach((target) => scrollObserver.observe(target));
});
