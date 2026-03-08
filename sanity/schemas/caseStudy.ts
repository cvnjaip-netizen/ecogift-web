export default {
  name: "caseStudy",
  title: "Caso de estudio",
  type: "document",
  fields: [
    { name: "title", title: "Título", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "client", title: "Cliente", type: "string" },
    { name: "category", title: "Categoría", type: "string" },
    { name: "summary", title: "Resumen", type: "text" },
    { name: "result", title: "Resultado", type: "text" },
    { name: "images", title: "Imágenes", type: "array", of: [{ type: "image" }] }
  ]
};
