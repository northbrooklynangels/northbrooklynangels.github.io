import MicroModal from "micromodal";

import docReady from "./docready";

// Self-hosted fonts (Bebas Neue is loaded in icons.scss)
import "@fontsource-variable/montserrat";
// Campaign layout fonts. These are best guesses from the Thanksgiving mockup; swap them here and in tailwind.config.js if they're wrong
import "@fontsource-variable/fraunces";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource-variable/caveat";

import "../css/main.scss";

docReady(() => {
    MicroModal.init();

    // Hamburger menu toggle
    document.getElementById("mobile-nav-toggle").addEventListener("click", () => {
        let nav = document.getElementById("mobile-nav");
        let navToggle = document.getElementById("mobile-nav-toggle");
        let navClose = document.getElementById("mobile-nav-glyph-close");
        let navHamburger = document.getElementById("mobile-nav-glyph-hamburger");

        let hiddenState = navToggle.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        nav.classList.toggle("hidden");
        navToggle.setAttribute("aria-expanded", expandedState);
        navClose.classList.toggle("hidden");
        navClose.classList.toggle("block");
        navHamburger.classList.toggle("hidden");
        navHamburger.classList.toggle("block");
        navClose.setAttribute("aria-hidden", hiddenState);
        navHamburger.setAttribute("aria-hidden", hiddenState);
    });
    
    let desktopToggle = document.getElementById("desktop-dark-toggle") as HTMLInputElement;
    let mobileToggle = document.getElementById("mobile-dark-toggle") as HTMLInputElement;

    // Set dark mode checkbox status
    if (document.querySelector("html").classList.contains("dark")) {
        desktopToggle.checked = true;
        desktopToggle.setAttribute("aria-checked", "true");
        mobileToggle.checked = true;
        mobileToggle.setAttribute("aria-checked", "true");
    } else {
        desktopToggle.checked = false;
        desktopToggle.setAttribute("aria-checked", "false");
        mobileToggle.checked = false;
        mobileToggle.setAttribute("aria-checked", "false");
    }

    let updateDarkMode = () => {
        let desktopToggle = document.getElementById("desktop-dark-toggle") as HTMLInputElement;
        let mobileToggle = document.getElementById("mobile-dark-toggle") as HTMLInputElement;

        let rootHtml = document.querySelector('html');
        rootHtml.classList.toggle("dark");

        let checkedState = rootHtml.classList.contains("dark");
        let checkedStateAria = checkedState ? "true" : "false";

        localStorage.darkMode = checkedStateAria;

        desktopToggle.checked = checkedState;
        desktopToggle.setAttribute("aria-checked", checkedStateAria);
        mobileToggle.checked = checkedState;
        mobileToggle.setAttribute("aria-checked", checkedStateAria);
    };

    document.getElementById("desktop-dark-toggle").addEventListener("click", updateDarkMode);
    document.getElementById("mobile-dark-toggle").addEventListener("click", updateDarkMode);

    // About Us dropdowns
    document.getElementById("desktop-nav-about-us").addEventListener("click", () => {
        let button = document.getElementById("desktop-nav-about-us");
        let dropdown = document.getElementById("desktop-nav-about-us-dropdown");
        let chevron = document.getElementById("desktop-nav-about-us-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.getElementById("mobile-nav-about-us").addEventListener("click", () => {
        let button = document.getElementById("mobile-nav-about-us");
        let dropdown = document.getElementById("mobile-nav-about-us-dropdown");
        let chevron = document.getElementById("mobile-nav-about-us-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.addEventListener("click", event => {
        // @ts-ignore This is valid JavaScript; the TS type definitions just don't support that, for some reason. Not sure why.
        if (!event.target.matches("#desktop-nav-about-us")) {
            let dropdown = document.getElementById("desktop-nav-about-us-dropdown");
        
            if (!dropdown.classList.contains("hidden")) {
                let button = document.getElementById("desktop-nav-about-us");
                let chevron = document.getElementById("desktop-nav-about-us-chevron");

                button.setAttribute("aria-expanded", "false");
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
                dropdown.classList.add("hidden");
            }
        }
    });

    // Get Involved dropdowns
    document.getElementById("desktop-nav-get-involved").addEventListener("click", () => {
        let button = document.getElementById("desktop-nav-get-involved");
        let dropdown = document.getElementById("desktop-nav-get-involved-dropdown");
        let chevron = document.getElementById("desktop-nav-get-involved-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.getElementById("mobile-nav-get-involved").addEventListener("click", () => {
        let button = document.getElementById("mobile-nav-get-involved");
        let dropdown = document.getElementById("mobile-nav-get-involved-dropdown");
        let chevron = document.getElementById("mobile-nav-get-involved-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.addEventListener("click", event => {
        // @ts-ignore This is valid JavaScript; the TS type definitions just don't support that, for some reason. Not sure why.
        if (!event.target.matches("#desktop-nav-get-involved")) {
            let dropdown = document.getElementById("desktop-nav-get-involved-dropdown");
        
            if (!dropdown.classList.contains("hidden")) {
                let button = document.getElementById("desktop-nav-get-involved");
                let chevron = document.getElementById("desktop-nav-get-involved-chevron");

                button.setAttribute("aria-expanded", "false");
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
                dropdown.classList.add("hidden");
            }
        }
    });

    // Event dropdowns
    document.getElementById("desktop-nav-events").addEventListener("click", () => {
        let button = document.getElementById("desktop-nav-events");
        let dropdown = document.getElementById("desktop-nav-events-dropdown");
        let chevron = document.getElementById("desktop-nav-events-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.getElementById("mobile-nav-events").addEventListener("click", () => {
        let button = document.getElementById("mobile-nav-events");
        let dropdown = document.getElementById("mobile-nav-events-dropdown");
        let chevron = document.getElementById("mobile-nav-events-chevron");

        chevron.classList.toggle("fa-chevron-down");
        chevron.classList.toggle("fa-chevron-up");
        dropdown.classList.toggle("hidden");

        let hiddenState = button.getAttribute("aria-expanded");
        let expandedState = hiddenState === "false" ? "true" : "false";

        button.setAttribute("aria-expanded", expandedState);
    });
    document.addEventListener("click", event => {
        // @ts-ignore This is valid JavaScript; the TS type definitions just don't support that, for some reason. Not sure why.
        if (!event.target.matches("#desktop-nav-events")) {
            let dropdown = document.getElementById("desktop-nav-events-dropdown");
        
            if (!dropdown.classList.contains("hidden")) {
                let button = document.getElementById("desktop-nav-events");
                let chevron = document.getElementById("desktop-nav-events-chevron");

                button.setAttribute("aria-expanded", "false");
                chevron.classList.remove("fa-chevron-up");
                chevron.classList.add("fa-chevron-down");
                dropdown.classList.add("hidden");
            }
        }
    });
});

// Copy buttons (site/layouts/partials/sections/donate.html). The button's text flips to a status message for a couple of seconds
docReady(() => {
    document.querySelectorAll<HTMLButtonElement>("button[data-copy]").forEach(button => {
        const originalLabel = button.innerHTML;
        let resetTimer: number;

        const showStatus = (status: string) => {
            button.textContent = status;
            window.clearTimeout(resetTimer);
            resetTimer = window.setTimeout(() => { button.innerHTML = originalLabel; }, 2000);
        };

        button.addEventListener("click", () => {
            // The clipboard API only exists on HTTPS (and localhost)
            if (!navigator.clipboard) {
                showStatus("Couldn't copy");
                return;
            }

            navigator.clipboard.writeText(button.dataset.copy).then(
                () => showStatus("Copied!"),
                () => showStatus("Couldn't copy")
            );
        });
    });
});

// Calculate scrollbar-less vw unit. Really thought this was a solved problem already...
// Taken from here: 
// https://www.terluinwebdesign.nl/en/css/viewport-relative-fluid-responsive-web-design/#excluding-scrollbar-from-viewport-width-css-100vw-minus-scrollbar-width
docReady(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
        document.documentElement.style.setProperty(
            "--scrollbarWidth",
            scrollbarWidth + "px"
        );
    } else {
        document.documentElement.style.setProperty(
            "--scrollbarWidth",
            "0px"
        );
    }
});