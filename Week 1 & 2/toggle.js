// ------------------ Constants ------------------
const STORAGE_KEY = "theme"; // store "light" or "dark"

// ------------------ DOM ------------------
const themeToggle = document.getElementById("themeToggle");
const themeStatus = document.getElementById("themeStatus");
const themeIcon = document.getElementById("themeIcon");

// ------------------ Helpers ------------------
function getSavedTheme() {
  // returns "light" | "dark" | null
  return localStorage.getItem(STORAGE_KEY);
}

function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
}

function applyTheme(theme) {
  // theme: "light" | "dark"
  const isDark = theme === "dark";

  // 1) Switch body class
  document.body.classList.toggle("dark", isDark);

  // 2) Toggle switch state
  themeToggle.checked = isDark;

  // 3) Update icon/image
  themeIcon.textContent = isDark ? "🌙" : "🌞";

  // 4) Display theme status to user
  themeStatus.textContent = isDark ? "Dark Mode" : "Light Mode";
}

function getSystemThemeFallback() {
  // Optional: if no saved theme, use OS preference
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// ------------------ Event Logic ------------------
function setupEvents() {
  themeToggle.addEventListener("change", () => {
    const theme = themeToggle.checked ? "dark" : "light";
    applyTheme(theme);
    saveTheme(theme);
  });
}

// ------------------ Init ------------------
document.addEventListener("DOMContentLoaded", () => {
  const saved = getSavedTheme();
  const initialTheme = saved || getSystemThemeFallback(); // saved preference wins
  applyTheme(initialTheme);
  setupEvents();
});
