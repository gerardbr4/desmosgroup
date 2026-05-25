// =====================================================
// DESMOS GROUP — Main JS
// =====================================================

// Header: fons sòlid en fer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Burger menu
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  nav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
nav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// Scroll reveal via IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeAll() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
observeAll();

// Renderitza el portfolio des de portfolio.js
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid || typeof portfolio === 'undefined' || !portfolio.length) return;

  grid.innerHTML = portfolio.map(e => `
    <article class="portfolio-card reveal">
      ${e.logo
        ? `<img src="${e.logo}" alt="Logo ${e.nombre}" class="portfolio-card__logo" loading="lazy" decoding="async">`
        : `<div class="portfolio-card__initial" aria-hidden="true">${e.nombre.charAt(0)}</div>`
      }
      <div class="portfolio-card__meta">
        <span class="portfolio-card__year">${e.año}</span>
        <span class="portfolio-card__badge">${e.sector}</span>
      </div>
      <h3 class="portfolio-card__name">${e.nombre}</h3>
      <p class="portfolio-card__tipo">${e.tipo}</p>
      ${e.descripcion ? `<p class="portfolio-card__desc">${e.descripcion}</p>` : ''}
      ${e.web ? `
        <a href="${e.web}" target="_blank" rel="noopener noreferrer" class="portfolio-card__link">
          Ver empresa
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </a>` : ''}
    </article>
  `).join('');

  // Observar les noves targetes per a l'animació
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
renderPortfolio();

// Spotlight border en portfolio cards
const portfolioGrid = document.getElementById('portfolio-grid');
if (portfolioGrid) {
  portfolioGrid.addEventListener('mousemove', e => {
    const card = e.target.closest('.portfolio-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
}

// Any actual al footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Formulari de contacte (Formspree)
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        if (success) {
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } else {
        btn.textContent = 'Error al enviar. Inténtalo de nuevo.';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Error al enviar. Inténtalo de nuevo.';
      btn.disabled = false;
    }
    // Restaurar botó si hi ha error
    if (btn.disabled && btn.textContent !== original) {
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 4000);
    }
  });
}
