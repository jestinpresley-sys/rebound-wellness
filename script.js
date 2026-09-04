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

// Testimonial carousel
const quoteTrack = document.getElementById('quoteTrack');
if (quoteTrack) {
  const slides = quoteTrack.querySelectorAll('.quote-slide');
  const quotePrev = document.getElementById('quotePrev');
  const quoteNext = document.getElementById('quoteNext');
  const quoteDots = document.getElementById('quoteDots');
  let current = 0;

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    quoteTrack.style.transform = `translateX(-${current * 100}%)`;
    quoteDots.querySelectorAll('.quote-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
    });
  }

  if (slides.length > 1) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'quote-dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      quoteDots.appendChild(dot);
    });
    quotePrev.addEventListener('click', () => goToSlide(current - 1));
    quoteNext.addEventListener('click', () => goToSlide(current + 1));

    let touchStartX = 0;
    quoteTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    quoteTrack.addEventListener('touchend', (e) => {
      const delta = e.changedTouches[0].clientX - touchStartX;
      if (delta > 40) goToSlide(current - 1);
      else if (delta < -40) goToSlide(current + 1);
    }, { passive: true });
  } else {
    quotePrev.hidden = true;
    quoteNext.hidden = true;
    quoteDots.hidden = true;
  }
}
