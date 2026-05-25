# design.md — Desmos Group

## 1. Objectiu de la pàgina

Crear una **one page corporativa, sèria i de confiança** per a **Desmos Group**, firma independent especialitzada en l'adquisició d'empreses i assessorament M&A.

La web ha de transmetre:

- Professionalitat, discreció i rigor.
- Visió a llarg termini i alineació amb l'empresari.
- Capacitat real d'execució (empreses participades existents).
- Confiança com a soci estratègic, no com a simple intermediari financer.

**Claim principal:** *"Conectando empresas con su siguiente etapa"*

### Informació de base extreta del pitch del client

- **Qui són:** Firma independent especialitzada en adquisició d'empreses.
- **Enfoc:** Transició empresarial i relleu generacional.
- **Serveis:** Adquisició d'empreses, assessorament M&A, estructuració d'operacions, enfoc patrimonial.
- **Com treballen:** Processos discrets, flexibilitat en estructures, alineació amb l'empresari, horitzó a llarg termini.
- **Proposta de valor:** Assegurar la continuïtat del negoci, execució rigorosa, alineació d'interessos.
- **Procés:** Anàlisi → Estructuració → Execució → Acompanyament.
- **Empreses participades:** Sister Soft S.L. (2025), Remolques Speedrem (2026), Wallner Group (2026).
- **Àmbit geogràfic:** Espanya.
- **Idioma:** Castellà.

---

## 2. Concepte creatiu

### Idea principal

**"Confianza, ejecución y visión de largo plazo."**

La web ha de semblar la carta de presentació d'una firma financera de primer nivell: neta, continguda, sense excés de decoració. El disseny ha de parlar de solvència sense necessitat d'explicar-la. Cada element ha d'inspirar discreció i solidesa.

### To visual

- Fosc, elegant i corporatiu.
- Molt d'espai en blanc (o fosc) entre elements.
- Tipografia gran i amb autoritat als titulars.
- Fotografia de fons amb overlay fosc.
- Accents daurats o platejats com a únic element de color càlid.
- Sense elements decoratius excessius ni animacions vistoses.

### Referència estètica

Finxpert (ThemeForest) — finance consulting theme: layout professional, secció de xifres/estadístiques, serveis en grid, procés en timeline, portfolio d'empreses participades.

---

## 3. Arquitectura general de la one page

Web d'una sola pàgina amb navegació per ancoratges. Menú superior fix.

### Ordre de seccions

1. **Hero** — impacte visual i claim principal
2. **¿Reconoces esta situación?** — identificació del problema (4 pain-point quotes)
3. **Quiénes somos** — identitat i missió
4. **Stats bar** — 4 xifres clau flotant sobre fons clar (estil Finxpert)
5. **Empresas participadas** — credibilitat real, track record
6. **Qué hacemos** — serveis (4 targetes amb icona en quadrat + pill button)
7. **Cómo trabajamos** — procés en llista numerada separadors (estil Finxpert)
8. **Por qué Desmos** — proposta de valor + bloc timing loss aversion
9. **Contacto** — formulari + dades
10. **Footer** — legal

### Pàgines separades (opcionals, futures)

- `/empresa/:slug` — fitxa individual de cada empresa participada (si es vol ampliar info)

---

## 4. Idioma

- **Castellà** — únic idioma de la web.
- No cal selector d'idioma.
- Tots els textos en castellà des del primer moment.

---

## 5. Header

### Comportament

- Fix a la part superior.
- Fons transparent sobre el hero.
- En fer scroll: fons fosc sòlid (`#0C1B33`) amb ombra subtil.
- Logo a l'esquerra: **"Desmos Group"** en tipografia pròpia (sense imatge de logo per ara).
- Menú centrat o a la dreta.
- Botó CTA destacat: **"Contacto"**.

### Menú

```
Quiénes somos · Qué hacemos · Cómo trabajamos · Empresas · Contacto
```

### Versió mòbil

- Nom de marca a l'esquerra.
- Icona hamburguesa a la dreta.
- Menú desplegable fosc, text gran.

---

## 6. Hero

### Objectiu

Primera impressió de firma financera sèria. Impacte visual immediat.

### Composició

- Imatge o vídeo curt de fons: skyline de ciutat, reunió de negocis, sala de juntes, o abstracte financer. Overlay fosc intens (`rgba(12, 27, 51, 0.78)`).
- Text centrat o alineat a l'esquerra.
- Subtítol breu.
- Dos botons.

### Contingut

**Eyebrow (text petit sobre el títol):**
Firma independiente de adquisición de empresas

**Títol principal (molt gran):**
Conectando empresas con su siguiente etapa

**Subtítol:**
Acompañamos a empresarios en los momentos más importantes de su negocio. Discreción, rigor y visión a largo plazo.

**Botons:**
- `Conocer Desmos` (principal, accent daurat)
- `Contactar` (secundari, transparent amb vora)

### Moviment

- Parallax lleuger sobre la imatge de fons.
- Text amb entrada suau des de baix (fade + translateY).
- Sense sliders ni animacions complexes.

---

## 7. Secció "Quiénes somos"

### Layout

Dues columnes en desktop:
- Esquerra: text.
- Dreta: imatge o element gràfic abstracte (línies geomètriques, gràfic fosc).

### Contingut

**Títol:**
Una firma construida sobre la confianza

**Text:**
Desmos Group es una firma independiente especializada en la adquisición de empresas, con especial enfoque en situaciones de transición empresarial y relevo generacional.

Trabajamos con empresarios que buscan un socio de confianza para el momento más importante de su negocio: la continuidad. No somos intermediarios. Somos el comprador.

**Punts clau (icones):**
- Firma independiente
- Visión de largo plazo
- Procesos discretos
- Alineación con el empresario

---

## 8. Secció "Qué hacemos"

### Layout

Grid de 4 targetes en desktop (2+2 en tablet, 1 columna en mòbil).

### Serveis

**1. Adquisición de empresas**
Adquirimos empresas consolidadas con vocación de continuidad y crecimiento. Operamos con capital propio y sin intermediarios.

**2. Asesoramiento en M&A**
Acompañamos en procesos de compraventa, tanto en el lado comprador como vendedor, con criterio financiero y empresarial.

**3. Estructuración de operaciones**
Diseñamos estructuras flexibles adaptadas a cada situación: compras totales, parciales, incorporación de socios, reestructuraciones.

**4. Enfoque patrimonial**
Integramos la visión financiera y patrimonial del empresario en cada operación, buscando soluciones a medida.

### Estil de les targetes

- Fons fosc amb vora daurada subtil a l'esquerra o a dalt.
- Icona lineal.
- Títol en blanc.
- Text en gris clar.
- Hover: lleuger enlluernament de la targeta.

---

## 9. Secció "Cómo trabajamos"

### Layout

Timeline horitzontal en desktop (vertical en mòbil). 4 passos numerats.

### Passos

**01 — Análisis**
Estudiamos en profundidad la empresa, su sector, situación financiera y potencial de continuidad.

**02 — Estructuración**
Definimos la estructura óptima de la operación, adaptada a los objetivos del empresario y a la situación real del negocio.

**03 — Ejecución**
Gestionamos el proceso de cierre con rigor, discreción y agilidad. Minimizamos incertidumbre para todas las partes.

**04 — Acompañamiento**
Nuestra relación no termina en el cierre. Acompañamos la transición operativa para asegurar la continuidad del negocio.

### Estil

- Números grans en accent daurat.
- Línia connectora entre passos.
- Animació d'entrada progressiva en fer scroll (cada pas apareix amb retard).

---

## 10. Secció "Empresas participadas"

### Objectiu

Mostrar credibilitat i track record real. **Sistema dissenyat perquè el client pugui afegir noves empreses fàcilment.**

### Sistema editable pel client

Les empreses es definiran en un **array JavaScript** a l'inici d'un fitxer `data/portfolio.js` (o dins un bloc clarament delimitat al `index.html`). Cada empresa té:

```js
const portfolio = [
  {
    nom: "Sister Soft S.L.",
    sector: "Software",
    any: 2025,
    tipus: "Participación mayoritaria",
    descripcio: "Empresa de desarrollo de software de gestión empresarial.",
    logo: "",        // ruta a img/logos/sister-soft.webp (opcional)
    web: "",         // URL externa (opcional)
  },
  {
    nom: "Remolques Speedrem",
    sector: "Industria",
    any: 2026,
    tipus: "Participación mayoritaria",
    descripcio: "Fabricante y distribuidor de remolques industriales.",
    logo: "",
    web: "",
  },
  {
    nom: "Wallner Group",
    sector: "Servicios",
    any: 2026,
    tipus: "Adquisición vía reestructuración",
    descripcio: "",
    logo: "",
    web: "",
  },
];
```

**Instruccions per al client (a incloure en un comentari al codi):**
> Para añadir una empresa nueva, duplica el bloque `{ ... }` anterior, rellena los campos y guarda el archivo.

### Layout de les targetes

Grid de 3 columnes en desktop (1 en mòbil). Cada targeta mostra:
- Any i tipus d'operació (eyebrow petit).
- Nom de l'empresa (títol).
- Sector (badge/etiqueta).
- Descripció breu.
- Logo si existeix (o inicial del nom si no).
- Botó "Ver más" si té URL o pàgina pròpia.

### Estil

- Fons de targeta fosc (`#111827`) amb vora subtil.
- Hover: elevació suau (box-shadow).
- Badge de sector en accent daurat.

---

## 11. Secció "Por qué Desmos"

### Layout

3 columnes de diferenciadors + optionalment un bloc de xifres.

### Diferenciadors

**Somos el comprador**
No actuamos como intermediarios. Operamos con capital propio, lo que nos permite decidir con agilidad y cerrar con seguridad.

**Discreción total**
Cada proceso se gestiona con la máxima confidencialidad. Respetamos los tiempos y la privacidad del empresario en todo momento.

**Alineación de intereses**
Nuestro éxito depende del éxito de la operación. No cobramos si no cerramos. Estamos en el mismo lado de la mesa.

### Bloc de xifres (si el client les aprova)

```
3  Empresas participadas
2025–2026  Operaciones cerradas
100%  Capital propio
```

> Nota: només mostrar xifres reals i aprovades pel client. No inventar.

---

## 12. Secció "Contacto"

### Layout

Dues columnes:
- Esquerra: text introductori + dades de contacte.
- Dreta: formulari.

### Contingut

**Títol:**
Hablemos

**Text:**
Si estás pensando en el futuro de tu empresa y buscas un interlocutor de confianza, estamos disponibles para una primera conversación discreta y sin compromiso.

**Dades de contacte:**
- Email: [pendent del client]
- Telèfon: [pendent del client]
- Adreça: [pendent del client]

### Camps del formulari

- Nombre
- Empresa
- Email
- Teléfono
- Mensaje
- Acepto la política de privacidad (checkbox obligatori)
- Botó: **Enviar mensaje**

### Nota

El formulari ha de ser funcional (enviar a un email real). Implementar amb Formspree, EmailJS o similar (sense backend propi).

---

## 13. Footer

### Contingut

- Nom de marca: **Desmos Group**
- Frase de tancament: *"Conectando empresas con su siguiente etapa"*
- Menú d'ancoratges (igual que el header).
- Avís legal.
- Política de privacitat.
- Política de cookies.
- © Desmos Group [any actual]. Todos los derechos reservados.

### Estil

- Fons molt fosc (`#060E1C`).
- Text gris clar.
- Separador horitzontal fi en daurat.

---

## 14. Direcció visual

### Paleta de colors

Color principal definit pel client: **`#163838`** (verd fosc profund, estètica Finxpert).

| Rol | HEX | Ús |
|---|---|---|
| **Verd fosc** | `#163838` | Fons principal, header, hero |
| **Verd targeta** | `#1A4444` | Targetes, seccions alternades |
| **Verd fosc+** | `#0F2828` | Seccions ¿Reconoces? / Qué hacemos |
| **Verd footer** | `#0A1E1E` | Footer |
| **Daurat** | `#C4922A` | Accents, botons, icones, separadors |
| **Blanc trencat** | `#F5F3EE` | Fons de seccions clares, text principal |
| **Gris teulat** | `#9CBABC` | Text secundari (lleugerament verdós) |
| **Verd fosc text** | `#1A2E2E` | Text principal en seccions clares |
| **Verd vora** | `#224E4E` | Vores, separadors subtils |

### Variables CSS

```css
:root {
  --bg-dark:     #163838;
  --bg-card:     #1A4444;
  --bg-darker:   #0F2828;
  --bg-footer:   #0A1E1E;
  --bg-light:    #F5F3EE;
  --accent:      #C4922A;
  --accent-lt:   #D4A843;
  --text-lt:     #F5F3EE;
  --text-muted:  #9CBABC;
  --text-dark:   #1A2E2E;
  --border:      #224E4E;
}
```

### Referència estètica confirmada

**Finxpert (ThemeForest):** Paleta verd fosc teal, tipografia bold, stats bar amb números grans difuminats, targetes de servei amb icones en quadrat arrodonit, procés en llista numerada amb separadors horitzontals i botons fletxa circulars.

### Alternança de seccions

- **Fons fosc** (`--bg-dark` `#163838`): Hero, Cómo trabajamos, Contacto.
- **Fons fosc+** (`--bg-darker` `#0F2828`): ¿Reconoces esta situación?, Qué hacemos.
- **Fons targeta** (`--bg-card` `#1A4444`): Empresas participadas.
- **Fons clar** (`--bg-light` `#F5F3EE`): Quiénes somos, Stats bar, Por qué Desmos.

---

## 15. Tipografia

### Selecció

- **Titulars:** `Playfair Display` — serif elegant i bold, gran impacte visual, autoritat. Pes: 600–700.
- **Cos i UI:** `DM Sans` — net, modern, llegible. Pes: 400–600.
- **Eyebrows i etiquetes:** `DM Sans` — majúscules, letter-spacing ample.

### Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet">
```

### Mides orientatives

| Element | Mida desktop | Mida mòbil |
|---|---|---|
| Títol hero | `clamp(3rem, 6vw, 5.5rem)` | `2.5rem` |
| Títols de secció | `clamp(2rem, 4vw, 3.5rem)` | `1.75rem` |
| Subtítols | `1.25rem` | `1.1rem` |
| Cos de text | `1rem` | `0.95rem` |
| Eyebrow | `0.75rem` uppercase | `0.75rem` |

---

## 16. Iconografia

### Estil

- Icones lineals, traç fi.
- Biblioteca recomanada: **Lucide Icons** o **Heroicons** (SVG inline, sense dependència externa).
- Sense icones de color: totes en blanc o accent daurat.

### Usos

- Serveis: icones financeres (gràfic, document, mans encaixant, engranatge, escut).
- Contacte: correu, telèfon, ubicació.
- Proposta de valor: escudo, ull, rellotge, diana.

---

## 17. Animacions i moviment

### Principis

Discreció total. El moviment no ha de cridar l'atenció, ha de reforçar la sensació de solidesa.

### Animacions recomanades

- Fade-in + lleuger translateY en fer scroll (tots els blocs).
- Números de la secció "Por qué Desmos" amb comptador animat (si n'hi ha).
- Timeline de passos amb aparició progressiva (stagger).
- Hover en targetes de portfolio: elevació suau.
- Parallax molt lleuger al hero.

### Evitar

- Animacions ràpides o "bouncy".
- Partícules o elements flotants.
- Transicions excessives entre seccions.
- Efectes que retardin la càrrega.

---

## 18. Fotografia

### Estil

- Imatges de negoci: reunions, sales de juntes, documents, gràfics, skylines urbans.
- Tractament: fosc, overlay blau nocturn, desaturació lleu.
- NO fotos de stock genèriques i alegres. To seriós i professional.

### Imatges necessàries

1. Hero: imatge de fons de gran impacte (skyline, reunió, arquitectura corporativa).
2. Quiénes somos: imatge corporativa o abstracte geomètric.
3. Empreses participades: logo o imatge de cada empresa si el client les aporta.

### Recomanació

Usar imatges d'Unsplash o Pexels de to financer fins que el client aporti les seves pròpies. Totes en format WebP.

---

## 19. SEO

### Meta títol

```
Desmos Group | Adquisición de empresas y asesoramiento M&A
```

### Meta descripció

```
Desmos Group es una firma independiente especializada en adquisición de empresas, transición empresarial y asesoramiento M&A en España. Discreción, rigor y visión a largo plazo.
```

### Open Graph

```html
<meta property="og:title" content="Desmos Group | Adquisición de empresas">
<meta property="og:description" content="Firma independiente especializada en adquisición de empresas y transición empresarial en España.">
<meta property="og:image" content="https://www.desmosgroup.es/img/og-image.webp">
<meta property="og:locale" content="es_ES">
```

### Paraules clau principals

- adquisición de empresas
- compra de empresas España
- relevo generacional empresas
- asesoramiento M&A
- transición empresarial
- firma independiente adquisiciones

---

## 20. Accessibilitat

- Contrast mínim 4.5:1 entre text i fons.
- Text alternatiu en totes les imatges.
- Botons amb labels accessibles.
- Formulari amb labels associats correctament.
- Navegació per teclat funcional.
- No dependre del color per transmetre informació.

---

## 21. Rendiment

- Imatges en format WebP.
- Lazy loading per imatges fora de viewport.
- Google Fonts amb `display=swap`.
- Minimize JavaScript (vanilla JS, sense frameworks pesants).
- CSS crític inline si és possible.
- Target: Lighthouse > 90 en Performance, > 95 en SEO.

---

## 22. Estructura de fitxers

```
/DesmosGroup
  index.html
  /css
    style.css
    animations.css
  /js
    main.js
    portfolio.js       ← fitxer que edita el client per afegir empreses
  /img
    hero-bg.webp
    og-image.webp
    /logos             ← logos de les empreses participades
  /fonts               ← tipografies locals si cal
  /briefing
    design.md
```

---

## 23. Wireframe textual

```
[HEADER]
Desmos Group          Quiénes somos · Qué hacemos · Cómo trabajamos · Empresas          [Contacto]

[HERO — fons fosc, overlay intens]
Firma independiente de adquisición de empresas
"Conectando empresas con su siguiente etapa"
Acompañamos a empresarios en los momentos más importantes de su negocio.
[Conocer Desmos]  [Contactar]

[QUIÉNES SOMOS — fons clar]
Text corporatiu + imatge o element gràfic

[QUÉ HACEMOS — fons fosc]
Adquisición · Asesoramiento M&A · Estructuración · Enfoque patrimonial

[CÓMO TRABAJAMOS — fons fosc]
01 Análisis → 02 Estructuración → 03 Ejecución → 04 Acompañamiento

[EMPRESAS PARTICIPADAS — fons molt fosc]
[Sister Soft S.L. 2025]  [Remolques Speedrem 2026]  [Wallner Group 2026]
+ futures empreses afegides pel client

[POR QUÉ DESMOS — fons clar]
Somos el comprador · Discreción total · Alineación de intereses
[Xifres si el client les aprova]

[CONTACTO — fons fosc]
Text + dades                    Formulari de contacte

[FOOTER — fons molt fosc]
Desmos Group · "Conectando empresas con su siguiente etapa"
Legal · Privacitat · Cookies · © 2025
```

---

## 24. Copy base en castellà

### Hero

**Eyebrow:** Firma independiente de adquisición de empresas
**Título:** Conectando empresas con su siguiente etapa
**Subtítulo:** Acompañamos a empresarios en los momentos más importantes de su negocio. Discreción, rigor y visión a largo plazo.

### Quiénes somos

Desmos Group es una firma independiente especializada en la adquisición de empresas, con especial enfoque en situaciones de transición empresarial y relevo generacional.

No somos intermediarios ni asesores externos. Somos el comprador. Eso nos permite actuar con agilidad, tomar decisiones con criterio propio y comprometernos de verdad con la continuidad del negocio.

### Qué hacemos

Trabajamos con empresarios que se enfrentan a decisiones importantes: vender su empresa, incorporar un socio, resolver una sucesión o reestructurar su negocio. En cada caso, aportamos capital, criterio y acompañamiento real.

### Cómo trabajamos

Cada operación es diferente. Por eso nuestro proceso parte siempre del empresario: sus objetivos, su situación y el futuro que quiere para su empresa.

### Por qué Desmos

La diferencia entre un asesor y un comprador es la piel en el juego. En Desmos, ponemos capital propio en cada operación. Nuestra alineación con el empresario es total.

### Contacto

Si estás pensando en el futuro de tu empresa y buscas un interlocutor de confianza, estamos disponibles para una primera conversación discreta y sin compromiso.

---

## 25. Notes per al desenvolupador

1. Web vanilla HTML + CSS + JS. Sense frameworks (React, Vue, etc.) per simplicitat i rendiment.
2. El fitxer `js/portfolio.js` és l'únic que toca el client. Ha de tenir comentaris clars en castellà.
3. El portfolio es renderitza dinàmicament des de l'array JavaScript.
4. El formulari de contacte ha de funcionar sense backend. Usar Formspree o EmailJS.
5. Tots els textos han d'estar en castellà des del primer dia. Cap text en anglès visible.
6. El header ha de canviar de transparent a sòlid en fer scroll (amb transició suau).
7. Prioritzar la versió mòbil des del principi (mobile-first).
8. Les animacions d'scroll han d'usar `IntersectionObserver`, no scroll events directes.
9. No usar jQuery ni llibreries pesants.
10. Les metaetiquetes SEO han d'estar completes des del primer deploy.

---

## 26. Pendent de confirmar amb el client

- Email, telèfon i adreça de contacte reals.
- Descripció breu de cada empresa participada (Sister Soft, Remolques Speedrem, Wallner Group).
- Si volen logos de les empreses participades o prefereixen discreció visual.
- Xifres reals per a la secció "Por qué Desmos" (si volen mostrar-ne).
- Domini definitiu (desmosgroup.es? desmos-group.es?).
- Hosting o preferència de desplegament.
- Si volen pàgina separada per a cada empresa participada (en una primera fase o en el futur).
- Aprovació del copy base.
