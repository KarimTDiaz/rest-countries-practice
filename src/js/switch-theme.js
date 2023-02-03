const body = document.body;
const themeIconElement = document.getElementById('switch-theme-icon');
const themeTextElement = document.getElementById('switch-theme-text');

const switchTheme = () => {
  body.classList.toggle('light');
  themeIconElement.src = 'assets/images/moon-svgrepo-com.svg';
  themeTextElement.textContent = 'Dark Mode';
  if (body.classList.contains('light')) return;
  themeIconElement.src = 'assets/images/sun-svgrepo-com.svg';
  themeTextElement.textContent = 'Light Mode';
};

export { switchTheme };
