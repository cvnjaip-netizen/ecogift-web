export default {
  name: "product",
  title: "Producto",
  type: "document",
  fields: [
    { name: "name", title: "Nombre", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "description", title: "Descripción", type: "text" },
    { name: "image", title: "Imagen", type: "image" },
    { name: "category", title: "Categoría", type: "string" },
    { name: "price", title: "Precio", type: "number" }
  ]
};
