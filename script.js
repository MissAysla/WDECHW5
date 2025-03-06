// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Portfolio Carousel
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselContainer = document.querySelector('.carousel-container');
let index = 0;

nextBtn.addEventListener('click', () => {
    if (index < carouselContainer.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carouselContainer.children.length - 1;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100 + '%';
    carouselContainer.style.transform = `translateX(${offset})`;
}
