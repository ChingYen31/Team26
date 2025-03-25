document.addEventListener("DOMContentLoaded", () => {
    // Typing Effect for Name
    const nameElement = document.getElementById("dynamic-name");
    const nameText = "Yi-Wei Lien";
    let i = 0;

    function typeEffect() {
        if (i < nameText.length) {
            nameElement.innerHTML += nameText.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();

    // Random Quotes Generator
    const quotes = [
        "Believe in yourself!",
        "Never stop learning.",
        "Hard work beats talent.",
        "Consistency is key.",
        "Dream big, work hard!"
    ];
    document.getElementById("new-quote").addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("random-quote").textContent = quotes[randomIndex];
    });

    // Filter Work Experience
    document.getElementById("search-experience").addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        const experiences = document.querySelectorAll("#experience-list p");

        experiences.forEach(exp => {
            if (exp.textContent.toLowerCase().includes(searchValue)) {
                exp.style.display = "block";
            } else {
                exp.style.display = "none";
            }
        });
    });

    // Feedback Form Handling   
    document.getElementById("feedback-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("feedback-response").textContent = `Thanks, ${name}! We appreciate your feedback.`;
            document.getElementById("feedback-form").reset();
        } else {
            document.getElementById("feedback-response").textContent = "Please fill out all fields.";
        }
    });
});
