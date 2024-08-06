//CARROUSEL
const slides = document.querySelectorAll('#hero .slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

slides[currentSlide].classList.add('active');
setInterval(nextSlide, 5000);


//Recargar al darle click en el logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    location.reload();
});