import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import docReady from "./docready";

docReady(() => {
    const amountInput = document.getElementById("input-amount-entry") as HTMLInputElement;
    const amountOnce = document.getElementById("input-amount-once") as HTMLInputElement;
    const amountRecurring = document.getElementById("input-amount-recurring") as HTMLInputElement;
    
    const qs25 = document.getElementById("btn-qs-25") as HTMLButtonElement;
    const qs50 = document.getElementById("btn-qs-50") as HTMLButtonElement;
    const qs100 = document.getElementById("btn-qs-100") as HTMLButtonElement;
    const qs250 = document.getElementById("btn-qs-250") as HTMLButtonElement;
    const qs1000 = document.getElementById("btn-qs-1000") as HTMLButtonElement;

    const qsBtns = Array.from(document.getElementById("amount-quick-select").children);
    
    const subOnce = document.getElementById("btn-donate-once") as HTMLButtonElement;
    const subOnceHidden = document.getElementById("btn-hidden-donate-once") as HTMLButtonElement;
    const subRecurring = document.getElementById("btn-donate-recurring") as HTMLButtonElement;
    const subRecurringHidden = document.getElementById("btn-hidden-donate-recurring") as HTMLButtonElement;

    const notyf = new Notyf({
        types: [{
            type: "error",
            duration: 5000,
            ripple: false,
            position: {
                x: "right",
                y: "top"
            },
            dismissible: true,
            icon: {
                className: "fas fa-exclamation-triangle",
                tagName: "i"
            }
        }]
    });

    amountInput.addEventListener("input", () => {
        let amount = amountInput.value.trim();
    
        // Trim any "$" that might be present at the beginning of the string
        if (/^\$+?/.test(amount)) {
            amount = /[0-9]+(?:\.[0-9]{1,2})?/.exec(amount)[0];
        }
        
        // Check to see whether or not the amount provided is one of the "quick select" options
        // There's undoubtedly better ways to structure this, but I'm just interested in making this work right now
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });
        
        switch(amount) {
            case "25": 
                qs25.classList.add("active");
                break;
            case "50": 
                qs50.classList.add("active");
                break;
            case "100": 
                qs100.classList.add("active");
                break;
            case "250": 
                qs250.classList.add("active");
                break;
            case "1000": 
                qs1000.classList.add("active");
                break;
        }
    
        // Reflect amount inputted into the other form entries
        amountOnce.value = amount;
        amountRecurring.value = amount;
    });

    // Quick Select button presses
    qs25.addEventListener("click", () => {
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });

        amountInput.value = "25";
        amountInput.dispatchEvent(new Event("input"));
    });
    
    qs50.addEventListener("click", () => {
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });

        amountInput.value = "50";
        amountInput.dispatchEvent(new Event("input"));
    });
    
    qs100.addEventListener("click", () => {
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });

        amountInput.value = "100";
        amountInput.dispatchEvent(new Event("input"));
    });
    
    qs250.addEventListener("click", () => {
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });

        amountInput.value = "250";
        amountInput.dispatchEvent(new Event("input"));
    });
    
    qs1000.addEventListener("click", () => {
        qsBtns.map(btn => {
            btn.classList.remove("active");
        });

        amountInput.value = "1000";
        amountInput.dispatchEvent(new Event("input"));
    });
    
    // Finally: submit button handlers
    subOnce.addEventListener("click", () => {
        if (!checkInput()) {
            return;
        }
        subOnceHidden.click();
    });
    
    subRecurring.addEventListener("click", () => {
        if (!checkInput()) {
            return;
        }

        subRecurringHidden.click();
    });

    const checkInput = (): boolean => {
        if (!amountInput.value) {
            amountInput.classList.remove("border-gray-300");
            amountInput.classList.remove("dark:border-gray-700");
            amountInput.classList.add("border-red");
            
            notyf.error("Please enter a donation amount!");
    
            setTimeout(() => {
                amountInput.classList.remove("border-red");
                amountInput.classList.add("border-gray-300");
                amountInput.classList.add("dark:border-gray-700");
            }, 3000);
    
            return false;
        } else {
            return true;
        }
    }
});