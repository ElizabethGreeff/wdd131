document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("show");
    });

    function showNextSlide() {
    if (slides.length === 0) return; 
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
    }

    setInterval(showNextSlide, 4000);

    const bookmarkBtn = document.getElementById("btn-2");
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener("click", function () {
            alert("Press Ctrl + D (Windows) or Cmd + D (Mac) to bookmark this page!");
        });
    }
});