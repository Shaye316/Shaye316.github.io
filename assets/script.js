const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
function updateActiveSection() {
  const active = sections.filter(section => section.getBoundingClientRect().top <= 120).at(-1) || sections[0];
  sectionLinks.forEach(link => {
    const selected = active && link.getAttribute('href') === `#${active.id}`;
    link.classList.toggle('active', Boolean(selected));
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
if (sections.length) {
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();
}
