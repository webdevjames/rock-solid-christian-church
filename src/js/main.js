// Import custom CSS
import "@fontsource-variable/inter";
import "../scss/styles.scss";

// Import necessary BS elements (not all)
import { Collapse } from "bootstrap";
import { Offcanvas } from "bootstrap";

// Intersection observer for Header only
const hero = document.querySelector(".hero");
const header = document.querySelector("#header");
const flyoutMenu = document.querySelector(".mobile-drawer-glass");

const observerOptions = {
	root: null,
	rootMargin: "-125px 0px 0px 0px",
	threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// If the hero div is no longer intersecting (scrolled past)
		if (!entry.isIntersecting) {
			header.classList.add("scrolled");
			flyoutMenu.classList.add("scrolled");
		} else {
			header.classList.remove("scrolled");
			flyoutMenu.classList.remove("scrolled");
		}
	});
}, observerOptions);

observer.observe(hero);

// Plugins
import "./countdown.js";
import "./slider.js";
import "./animations.js";
