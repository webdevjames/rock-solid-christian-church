// Import custom CSS
import "@fontsource-variable/inter";
import "../scss/styles.scss";

// Import necessary BS elements (not all)
import { Collapse } from "bootstrap";
import { Offcanvas } from "bootstrap";
import { Tooltip } from "bootstrap";

// Initialize BS tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));

// Intersection observer for Header only
const sentinel = document.querySelector("#page-top-sentinel");
const header = document.querySelector("#header");

const headerObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			// If the sentinel is NOT visible, it means the user has scrolled down
			if (!entry.isIntersecting) {
				header.classList.add("scrolled");
			} else {
				header.classList.remove("scrolled");
			}
		});
	},
	{ rootMargin: "20px 0px 0px 0px" },
); // Fires exactly 20px into the scroll!

headerObserver.observe(sentinel);

// Plugins
import "./countdown.js";
import "./slider.js";
import "./animations.js";
