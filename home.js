let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

// Auto slide every 4 seconds
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 4000);

// Arrow buttons
document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});
