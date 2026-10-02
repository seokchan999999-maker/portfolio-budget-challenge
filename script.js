const themeButton = document.getElementById('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch {}
if (savedTheme === 'dark' || savedTheme === 'light') document.documentElement.dataset.theme = savedTheme;
function isDark() { return document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : systemTheme.matches; }
function updateLabel() {
  themeButton.textContent = isDark() ? '라이트 모드' : '다크 모드';
  themeButton.setAttribute('aria-label', isDark() ? '밝은 화면으로 바꾸기' : '어두운 화면으로 바꾸기');
}
themeButton.addEventListener('click', () => {
  const nextTheme = isDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try { localStorage.setItem('portfolio-theme', nextTheme); } catch {}
  updateLabel();
});
systemTheme.addEventListener('change', updateLabel);
updateLabel();
