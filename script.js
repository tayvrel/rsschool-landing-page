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