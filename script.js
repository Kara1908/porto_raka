// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");
  });

  // Tutup nav saat salah satu link diklik (di mobile)
  nav.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      nav.classList.remove("nav--open");
    }
  });
}

// Dark mode toggle dengan localStorage
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.querySelector(".theme-toggle__icon");

const setThemeIcon = () => {
  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☀️";
  } else {
    themeIcon.textContent = "🌙";
  }
};

// Cek preferensi awal
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  document.body.classList.add("dark");
}
setThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", currentTheme);
    setThemeIcon();
  });
}

// Reveal on scroll (fade/slide ringan)
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

revealElements.forEach((el) => observer.observe(el));

// Form kontak (mock)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();

    // simulasi kirim
    formStatus.textContent = "Mengirim pesan...";
    formStatus.style.color = "var(--color-text-soft)";

    setTimeout(() => {
      formStatus.textContent = `Terima kasih, ${name || "teman"}! Pesan Anda berhasil dikirim (simulasi). Saya akan segera menghubungi Anda kembali.`;
      formStatus.style.color = "var(--color-primary)";
      contactForm.reset();
    }, 900);
  });
}

// Tahun dynamic di footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
