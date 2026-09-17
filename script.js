const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  const html = document.documentElement;

  const isDark = html.dataset.theme === 'dark';

  html.dataset.theme = isDark ? 'light' : 'dark';
});