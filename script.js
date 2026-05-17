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

document.getElementById('year').textContent = new Date().getFullYear();
