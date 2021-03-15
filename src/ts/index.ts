import "../css/main.scss";

import docReady from "./docready";

docReady(function() {
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
    window.addEventListener("click", event => {
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
});