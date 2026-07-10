// src/js/slider.js
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

// Import essential Swiper styles natively into the build loop
import "swiper/css";

document.addEventListener("DOMContentLoaded", () => {
	new Swiper(".ministry-carousel", {
		// Unpack the autoplay engine package
		modules: [Autoplay],

		// Endless loop rendering
		loop: true,

		// Allow slides to size naturally based on card elements
		slidesPerView: "auto",
		spaceBetween: 24, // Matches standard Bootstrap gap-4 spacing

		// Transition time in ms (Higher = slower, smoother rolling velocity)
		speed: 6000,

		autoplay: {
			delay: 0, // Instant transition step triggers
			disableOnInteraction: false, // Keeps sliding after drag actions
			pauseOnMouseEnter: true, // YOUR HOVER REQUIREMENT
			reverseDirection: true, // YOUR LEFT-TO-RIGHT REQUIREMENT
		},
	});
});
