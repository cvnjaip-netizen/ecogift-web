const emojiMap = {
  "Accesorios de escritorio": "🖊️",
  "Artículos promocionales": "📦",
  "Audio y tecnología": "🎧",
  "Bolsas ecológicas": "🛍️",
  "Bolsos y mochilas": "🎒",
  "Cajas y estuches": "📦",
  "Cargadores y accesorios": "🔌",
  "Cuadernos y libretas": "📓",
  "Delantales": "👨‍🍳",
  "Gorras": "🧢",
  "Iluminación": "💡",
  "Llaveros": "🔑",
  "Lápices y bolígrafos": "✏️",
  "Paraguas": "☂️",
  "Porta objetos": "🗂️",
  "Productos naturales": "🌿",
  "Sets y kits": "🎁",
  "Sublimación": "🎨",
  "Toallas": "🏖️",
  "USB y tecnología": "💻",
  "Vasos mugs termos y tazas": "☕",
};

const descriptorMap = {
  "Accesorios de escritorio": "Organización y trabajo",
  "Artículos promocionales": "Merchandising corporativo",
  "Audio y tecnología": "Gadgets y sonido",
  "Bolsas ecológicas": "Packaging sustentable",
  "Bolsos y mochilas": "Transporte con estilo",
  "Cajas y estuches": "Presentación y empaque",
  "Cargadores y accesorios": "Energía y conectividad",
  "Cuadernos y libretas": "Notas y creatividad",
  "Delantales": "Cocina y eventos",
  "Gorras": "Headwear con marca",
  "Iluminación": "Luz y visibilidad",
  "Llaveros": "Accesorios con marca",
  "Lápices y bolígrafos": "Escritura corporativa",
  "Paraguas": "Protección y estilo",
  "Porta objetos": "Orden y almacenaje",
  "Productos naturales": "Bienestar eco-friendly",
  "Sets y kits": "Packs de bienvenida",
  "Sublimación": "Impresión personalizada",
  "Toallas": "Textiles promocionales",
  "USB y tecnología": "Almacenamiento y tech",
  "Vasos mugs termos y tazas": "Bebidas personalizadas",
};

export default function CategoryCard({ nombre, index, isHeroish }) {
  const emoji = emojiMap[nombre] || "🎁";
  const descriptor = descriptorMap[nombre] || "Productos promocionales";
  const href = `/productos?categoria=${encodeURIComponent(nombre)}`;

  if (isHeroish) {
    return (
      <a href={href} className="eco-category-pill">
        <h3 className={`mt-3 font-bold text-lg ${isHeroish ? "text-white" : ""}`}>
          {nombre}
        </h3>
        <div className="mt-4 text-5xl">{emoji}</div>
      </a>
    );
  }

  // eco-showcase-card
  const bgClass = index % 2 === 0 ? "eco-visual-green" : "eco-visual-sand";

  return (
    <a href={href} className="eco-showcase-card block h-full">
      <div className={`h-32 flex items-center justify-center text-5xl ${bgClass}`}>
        {emoji}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-base">{nombre}</h3>
        <p className="mt-2 text-sm text-eco-muted">{descriptor}</p>
      </div>
    </a>
  );
}
