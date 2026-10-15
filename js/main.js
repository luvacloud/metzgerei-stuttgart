const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');
const nav = document.querySelector('nav');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    if (nav) nav.classList.toggle('nav-open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Menü öffnen');
      if (nav) nav.classList.remove('nav-open');
    });
  });
}

const hero = document.querySelector('.hero');

if (nav && hero) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      nav.classList.add('nav-dark');
    } else {
      nav.classList.remove('nav-dark');
    }
  });
}
