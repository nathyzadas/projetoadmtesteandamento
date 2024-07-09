let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contrastButton').addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });

    document.getElementById('fontSizeButton').addEventListener('click', function() {
        var currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
        var newFontSize = currentFontSize * 1.1; // Aumenta o tamanho em 10%
        document.body.style.fontSize = newFontSize + 'px';
    });
});
