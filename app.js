const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let ativarSlide = 0;

function mostrarSlide(index) {
    slides.forEach(slide => slide.style.display = "none");
    slides[index].style.display = "block";
}

mostrarSlide(ativarSlide);

prevButton.addEventListener("click", () => {
    ativarSlide = (ativarSlide - 1 + slides.length) % slides.length;
    mostrarSlide(ativarSlide);
});

nextButton.addEventListener("click", () => {
    ativarSlide = (ativarSlide + 1) % slides.length;
    mostrarSlide(ativarSlide);
});