// Mobile drawer toggle
const toggle = document.getElementById('navToggle');
const rail = document.getElementById('rail');

if (toggle && rail) {
  toggle.addEventListener('click', () => {
    const isOpen = rail.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // close drawer after tapping a link (mobile)
  rail.querySelectorAll('.rail-link').forEach(link => {
    link.addEventListener('click', () => {
      rail.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Active section highlight in rail nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.rail-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
