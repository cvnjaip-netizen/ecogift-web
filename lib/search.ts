export function searchItems(items: any[], query: string, fields: string[]) {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter((item) => {
    const haystack = fields.map((field) => String(item[field] || "")).join(" ").toLowerCase();
    return haystack.includes(q);
  });
}
