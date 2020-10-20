const amountInput = $("#input-amount-entry");
const amountOnce = $("#input-amount-once");
const amountRecurring = $("#input-amount-recurring");

const qs25 = $("#btn-qs-25");
const qs50 = $("#btn-qs-50");
const qs100 = $("#btn-qs-100");
const qs250 = $("#btn-qs-250");
const qs1000 = $("#btn-qs-1000");

const subOnce = $("#btn-donate-once");
const subOnceHidden = $("#btn-hidden-donate-once");
const subRecurring = $("#btn-donate-recurring");
const subRecurringHidden = $("#btn-hidden-donate-recurring");

amountInput.on("input", () => {
    let amount = amountInput.val().trim();

    // Trim any "$" that might be present at the beginning of the string
    if (/^\$+?/.test(amount)) {
        amount = /[0-9]+(?:\.[0-9]{1,2})?/.exec(amount)[0];
    }
    
    // Check to see whether or not the amount provided is one of the "quick select" options
    // There's undoubtedly better ways to structure this, but I'm just interested in making this work right now
    $("#amount-quick-select button").removeClass("active");
    
    switch(amount) {
        case "25": 
        qs25.addClass("active");
        break;
        case "50": 
        qs50.addClass("active");
        break;
        case "100": 
        qs100.addClass("active");
        break;
        case "250": 
        qs250.addClass("active");
        break;
        case "1000": 
        qs1000.addClass("active");
        break;
    }

    // Reflect amount inputted into the other form entries
    amountOnce.val(amount);
    amountRecurring.val(amount);
});

// Quick Select button presses
qs25.on("click", () => {
    $("#amount-quick-select button").removeClass("active");

    amountInput.val("25");
    amountInput.trigger("input");
});

qs50.on("click", () => {
    $("#amount-quick-select button").removeClass("active");

    amountInput.val("50");
    amountInput.trigger("input");
});

qs100.on("click", () => {
    $("#amount-quick-select button").removeClass("active");

    amountInput.val("100");
    amountInput.trigger("input");
});

qs250.on("click", () => {
    $("#amount-quick-select button").removeClass("active");

    amountInput.val("250");
    amountInput.trigger("input");
});

qs1000.on("click", () => {
    $("#amount-quick-select button").removeClass("active");

    amountInput.val("1000");
    amountInput.trigger("input");
});

// Finally: submit button handlers
subOnce.on("click", () => {
    subOnceHidden.trigger("click");
});

subRecurring.on("click", () => {
    subRecurringHidden.trigger("click");
});