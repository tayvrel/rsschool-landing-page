
// slider
const slider = document.querySelector('.slider');
const track = slider.querySelector('.slider__track');
const slides = [...slider.querySelectorAll('.slider__slide')];

const prevButton = slider.querySelector('.slider__button--prev');
const nextButton = slider.querySelector('.slider__button--next');

let currentIndex = 0;

function getGap() {
  return parseFloat(getComputedStyle(track).gap) || 0;
}

function getSlideWidth() {
  return slides[0].getBoundingClientRect().width;
}

function getStep() {
  return getSlideWidth() + getGap();
}

function getVisibleSlides() {
  const slideWidth = getSlideWidth();
  const gap = getGap();
  return Math.max(1,
    Math.floor(
      (slider.clientWidth + gap) / (slideWidth + gap)
    )
  );
}

function getMaxIndex() {
  return Math.max(0,
    slides.length - getVisibleSlides()
  );
}

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * getStep()}px)`;
}

nextButton.addEventListener('click', () => {
  const maxIndex = getMaxIndex();
  if (currentIndex < maxIndex) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSlider();
});

prevButton.addEventListener('click', () => {
  const maxIndex = getMaxIndex();
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }
  updateSlider();
});

window.addEventListener('resize', () => {
  const maxIndex = getMaxIndex();
  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }
  updateSlider();
});

updateSlider();

//counter
const counter = document.querySelector('#counter');
const counterContainer = document.querySelector('.about__counter');

const target = 50;
const duration = 1400;

function startCounter() {
  const startTime = performance.now();
  function updateCounter(currentTime) {
    const progress = Math.min(
      (currentTime - startTime) / duration,
      1
    );
    const currentValue = Math.floor(progress * target);
    counter.textContent = currentValue;
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
      counterContainer.classList.add('is-finished');
    }
  }
  requestAnimationFrame(updateCounter);
}

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounter();
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5
  }
);

counterObserver.observe(counter);