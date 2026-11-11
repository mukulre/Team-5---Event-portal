// Welcome message
window.addEventListener("load", () => {
    console.log("Team 5 Event Portal Loaded Successfully");
});

// Explore Events button
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.getElementById("events").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Register buttons
const registerButtons = document.querySelectorAll(".event-card button");

registerButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Registration Successful!");
    });
});

// Footer year update
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Team 5 Event Portal. All Rights Reserved.`;
}