const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  const html = document.documentElement;

  const isDark = html.dataset.theme === 'dark';

  html.dataset.theme = isDark ? 'light' : 'dark';
});


const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slider__slide');

const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

let currentSlide = 0;

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateSlider();
});

prevButton.addEventListener('click', () => {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateSlider();
});