
//theme switching
const themeToggle = document.querySelector('#themeToggle');
const html = document.documentElement;
const choosedTheme = localStorage.getItem('theme');

if (choosedTheme) {
  html.dataset.theme = choosedTheme;
}

themeToggle.addEventListener('click', () => {
  const isDark = html.dataset.theme === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  html.dataset.theme = newTheme;
  localStorage.setItem('theme', newTheme);
});

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__link');

function openMenu() {
  burger.classList.add('header__burger--open');
  nav.classList.add('header__nav--open');

  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Закрыть меню');

  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  burger.classList.remove('header__burger--open');
  nav.classList.remove('header__nav--open');

  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Открыть меню');

  document.body.style.overflow = '';
}

burger.addEventListener('click', () => {
  const isOpen = nav.classList.contains('header__nav--open');

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 769) {
    closeMenu();
  }
});