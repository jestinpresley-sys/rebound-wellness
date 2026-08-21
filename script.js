// Sticky nav background on scroll (pages with a dark hero start transparent)
const nav = document.getElementById('nav');
if (nav && !nav.classList.contains('nav--solid')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  });
}

// Mobile menu
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
if (burger && mobileMenu) {
  burger.addEventListener('click', () => mobileMenu.classList.add('is-open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('is-open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('is-open')));
}

// Contact form (static demo, no backend)
const form = document.getElementById('contactForm');
const formPanel = document.getElementById('formPanel');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formPanel.classList.add('is-sent');
    formNote.classList.add('is-visible');
  });
}

// Newsletter signup (static demo, no backend)
const newsletterForm = document.getElementById('newsletterForm');
const newsletterWrap = document.getElementById('newsletterWrap');
const newsletterNote = document.getElementById('newsletterNote');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterWrap.classList.add('is-sent');
    newsletterNote.classList.add('is-visible');
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
