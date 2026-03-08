export function filterByCategory(items: any[], category: string) {
  if (!category || category === "Todos") return items;
  return items.filter((item) => item.categoria === category);
}
