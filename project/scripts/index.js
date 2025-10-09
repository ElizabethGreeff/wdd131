document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("show");
        });
    }

    function showNextSlide() {
        if (slides.length === 0) return;
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(showNextSlide, 4000);

    // Bookmark button
    const bookmarkBtn = document.getElementById("btn-2");
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener("click", () => {
            alert("Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page!");
        });
    }

    // Visit counter
    const visitDisplay = document.getElementById("visit-count");
    let visits = Number(localStorage.getItem("visits")) || 0;
    visits++;
    localStorage.setItem("visits", visits);
    if (visitDisplay) {
        visitDisplay.textContent = `You've visited this site ${visits} time${visits > 1 ? "s" : ""}.`;
    }

    // Random animal fact
    const animalFacts = [
        "Parrots can mimic over 100 human words!",
        "Sloths only poop once a week.",
        "An elephant's trunk has over 40,000 muscles!",
        "Owls can rotate their heads up to 270 degrees."
    ];

    const randomFact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    const factDisplay = document.getElementById("animal-fact");
    if (factDisplay) {
        factDisplay.textContent = `🐾 Did you know? ${randomFact}`;
    }
});