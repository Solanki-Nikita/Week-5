const STORAGE_KEY = "Theme";

const themeToggle = document.getElementById("themeToggle")
const themeStatus = document.getElementById("themeStatus");
const themeIcon = document.getElementById("themeIcon");


function getSavedTheme(){
  return localStorage.getItem(STORAGE_KEY);
}

function saveTheme(theme){
  localStorage.setItem(STORAGE_KEY, theme);
}

function applyTheme(theme){
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle.checked = isDark;
  themeIcon.textContent = isDark ? "🌙" : "🌞";
  themeStatus.textContent = isDark ? "Dark Mode" : "Light Mode";
}


  function getSystemThemeFallback(){
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme : dark)").matches;
    return prefersDark ? "dark" : "light";
  }
   

  function setupEvents(){
    themeToggle.addEventListener("change", () => {
      const theme = themeToggle.checked ? "dark" : "light";
      applyTheme(theme);
      saveTheme(theme);
    });
  }

document.addEventListener("DOMContentLoaded", () => {
   const saved = getSavedTheme();
   const initialTheme = saved || getSystemThemeFallback();
   applyTheme(initialTheme);
   setupEvents();
});