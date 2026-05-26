// =====================================================
// EMPRESAS PARTICIPADAS — EDITABLE POR EL CLIENTE
// =====================================================
//
// INSTRUCCIONES PARA AÑADIR UNA EMPRESA NUEVA:
//
// 1. Copia el bloque { ... } de cualquier empresa de abajo.
// 2. Pégalo al final de la lista, justo antes del corchete ];
//    (añade una coma después del bloque anterior).
// 3. Rellena los campos con la información de la nueva empresa.
// 4. Guarda este archivo y recarga la web. ¡Listo!
//
// CAMPOS DISPONIBLES:
//   nombre      → Nombre de la empresa (obligatorio)
//   sector      → Sector o industria, ej: "Software", "Industria" (obligatorio)
//   año         → Año de la operación, ej: 2025 (obligatorio)
//   tipo        → Tipo de operación (obligatorio)
//   imagen      → Ruta a la foto de portada, ej: "img/empresas/empresa.webp" (opcional — dejar "" si no hay)
//   web         → URL de su web, ej: "https://www.empresa.es" (opcional — dejar "" si no hay)
//
// =====================================================

const portfolio = [
  {
    nombre: "Sister Soft S.L.",
    sector: "Software",
    año: 2025,
    tipo: "Participación mayoritaria",
    imagen: "img/sistersoft.png",
    web: "",
  },
  {
    nombre: "Remolques Speedrem",
    sector: "Industria",
    año: 2026,
    tipo: "Participación mayoritaria",
    imagen: "img/speedrem.jpg",
    web: "",
  },
  {
    nombre: "Wallner Group",
    sector: "Servicios",
    año: 2026,
    tipo: "Adquisición vía reestructuración",
    imagen: "img/wallner.webp",
    web: "",
  },
];
