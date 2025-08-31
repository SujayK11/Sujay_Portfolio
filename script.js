// Accordion toggle
document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");
    if (button.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

// Projects Slider
const track = document.querySelector(".project-track");
const slides = document.querySelectorAll(".project-card");
let currentIndex = 0;

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length; // loop forward
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // loop backward
  updateSlide();
});

function updateSlide() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
