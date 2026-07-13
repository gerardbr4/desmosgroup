async function loadPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  if (grid.children.length > 0) return; // Ja renderitzat server-side per PHP

  try {
    const res = await fetch(
      'https://desmosgroup.com/wp-json/wp/v2/empresa?_embed&per_page=100&orderby=date&order=desc'
    );
    if (!res.ok) throw new Error(res.status);
    const empresas = await res.json();
    if (!empresas.length) return;

    grid.innerHTML = empresas.map(e => {
      const nombre     = e.title.rendered;
      const sector     = e.acf?.sector     || '';
      const estado     = e.acf?.estado     || '';
      const descripcion = e.acf?.descripcion || '';
      const web        = e.acf?.web        || '';
      const año        = new Date(e.date).getFullYear();
      const imagen     = e._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

      return `
        <article class="portfolio-card reveal">
          <div class="portfolio-card__img-wrap">
            ${imagen
              ? `<img src="${imagen}" alt="${nombre}" class="portfolio-card__img" loading="lazy" decoding="async">`
              : `<div class="portfolio-card__img-placeholder"></div>`
            }
            <div class="portfolio-card__initial" aria-hidden="true">${nombre.charAt(0)}</div>
          </div>
          <div class="portfolio-card__info">
            <div class="portfolio-card__meta">
              <span class="portfolio-card__year">${año}</span>
              ${sector ? `<span class="portfolio-card__sector">${sector.toUpperCase()}</span>` : ''}
              ${estado ? `<span class="portfolio-card__estado portfolio-card__estado--${estado.toLowerCase().replace(/\s+/g, '-')}">${estado}</span>` : ''}
            </div>
            <h3 class="portfolio-card__name">${nombre}</h3>
            ${descripcion ? `<p class="portfolio-card__tipo">${descripcion}</p>` : ''}
            ${web ? `<a href="${web}" class="portfolio-card__web" target="_blank" rel="noopener noreferrer">Visitar web →</a>` : ''}
          </div>
        </article>
      `;
    }).join('');

    grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } catch (err) {
    console.error('Error cargando empresas:', err);
  }
}
