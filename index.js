const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slides = document.querySelectorAll(".carousel-slide img");

let currentIndex = 0;

nextButton.addEventListener("click", () => {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].style.display = "block";
});

prevButton.addEventListener("click", () => {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].style.display = "block";
});
