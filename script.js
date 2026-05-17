const pillars = [
  ['Mental', 'Strengthen thought patterns that support clarity and resilience.'],
  ['Emotional', 'Process emotions with honesty, safety, and healthy expression.'],
  ['Physical', 'Restore energy through sustainable health and wellness rhythms.'],
  ['Financial', 'Build stewardship, stability, and confidence with resources.'],
  ['Relational', 'Cultivate boundaries and connections that honor your values.'],
  ['Time', 'Use your time with intention, focus, and grace.'],
  ['Spiritual', 'Deepen alignment with faith, identity, and purpose.'],
  ['Identity', 'Embrace who you are becoming with conviction and authority.']
];

const resources = [
  ['HER Reset Guide', 'A structured reset for women in burnout recovery.', '#'],
  ['Peace Protection Journal', 'Daily prompts to reclaim calm, clarity, and agency.', '#'],
  ['Reinvention Audio Series', 'Faith-rooted reflections for women in transition.', '#']
];

const pillarsGrid = document.getElementById('pillars-grid');
pillars.forEach(([title, description]) => {
  const card = document.createElement('article');
  card.className = 'pillar';
  card.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
  pillarsGrid.appendChild(card);
});

const resourcesGrid = document.getElementById('resources-grid');
resources.forEach(([title, description, link]) => {
  const item = document.createElement('article');
  item.className = 'resource';
  item.innerHTML = `<h3>${title}</h3><p>${description}</p><a href="${link}">Learn more</a>`;
  resourcesGrid.appendChild(item);
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }
    target.focus({ preventScroll: true });
  });
});

const revealElements = document.querySelectorAll('.reveal-up');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

const heroImage = document.querySelector('.hero-image');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroImage && !reduceMotion) {
  const handleParallax = () => {
    const top = window.scrollY;
    const shift = Math.max(-6, Math.min(14, top * 0.025));
    heroImage.style.setProperty('--parallax', `${shift}px`);
  };

  handleParallax();
  window.addEventListener('scroll', handleParallax, { passive: true });
}

document.getElementById('year').textContent = new Date().getFullYear();
