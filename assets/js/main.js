// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with persistence + system preference
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector(".theme-icon");

  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  apply(initial);

  toggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });
})();
