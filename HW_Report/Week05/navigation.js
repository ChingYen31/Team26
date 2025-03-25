document.addEventListener("DOMContentLoaded", () => {
    const navButtons = document.querySelectorAll(".nav-btn");

    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            showSection(button.getAttribute("data-section"));
        });
    });

    function showSection(sectionId) {
        document.querySelectorAll(".section").forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(sectionId).classList.add("active");
    }

    // Dark Mode Toggle
    const darkModeButton = document.getElementById("toggle-dark-mode");
    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
