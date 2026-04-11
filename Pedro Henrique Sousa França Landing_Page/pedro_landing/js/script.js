document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

  const form = document.querySelector('#proposalForm');
  const message = document.querySelector('#formMessage');

  if (form && message) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      message.style.display = 'block';
      form.reset();
      message.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
