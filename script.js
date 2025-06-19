document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.style.getPropertyValue('--bg') === '#111111';
  root.style.setProperty('--bg', isDark ? '#ffffff' : '#111111');
  root.style.setProperty('--text', isDark ? '#111111' : '#ffffff');
});

// Initialize the brand swiper
const swiper = new Swiper('.brand-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
});

// Brand Kit selection logic
const cards = document.querySelectorAll(".kit-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    // Deselect all cards
    cards.forEach(c => {
      c.classList.remove("selected");
      const check = c.querySelector(".check");
      check.classList.remove("selected-check");
      check.textContent = "";
    });

    // Select clicked card
    card.classList.add("selected");
    const check = card.querySelector(".check");
    check.classList.add("selected-check");
    check.textContent = "✔";
  });
});

const testimonialSwiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,             // Show exactly one
  spaceBetween: 0,
  loop: false,
  centeredSlides: false,        // Don't center (forces full width)
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue('--bg').trim();

  if (currentBg === '#ffffff') {
    root.style.setProperty('--bg', '#111111');
    root.style.setProperty('--text', '#ffffff');
    toggle.textContent = '🌞';
  } else {
    root.style.setProperty('--bg', '#ffffff');
    root.style.setProperty('--text', '#111111');
    toggle.textContent = '🌙';
  }
});
