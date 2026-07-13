// ============================================================
// Footer year
// ============================================================
document.getElementById("year").textContent = new Date().getFullYear();

// ============================================================
// Theme toggle (persistence + system preference)
// ============================================================
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

// ============================================================
// Scroll-reveal with stagger
// ============================================================
(function () {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Auto-tag section content so each block reveals with a stagger.
  document.querySelectorAll(".section").forEach(function (section) {
    const kids = section.querySelectorAll(
      ".section-title, .prose, .timeline-item, .skill-group, .hero-actions"
    );
    kids.forEach(function (el, i) {
      el.setAttribute("data-reveal", "");
      el.style.transitionDelay = i * 70 + "ms";
    });
  });

  const revealables = document.querySelectorAll("[data-reveal]");

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealables.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Stagger the hero items on load
  document.querySelectorAll(".hero [data-reveal]").forEach(function (el, i) {
    el.style.transitionDelay = 120 + i * 90 + "ms";
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealables.forEach((el) => observer.observe(el));
})();

// ============================================================
// Typing effect for the role/title
// ============================================================
(function () {
  const el = document.getElementById("typed");
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const roles = [
    "Software Engineer",
    "Cloud Architect",
    "Backend Developer",
    "Azure Certified",
    "Integration Specialist",
  ];

  if (prefersReduced) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    el.textContent = current.slice(0, charIndex);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex === current.length) {
      delay = 1600;              // pause at full word
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  }
  tick();
})();
