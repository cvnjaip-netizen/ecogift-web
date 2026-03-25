const emojiMap = {
  "Vasos mugs termos y tazas": "☕",
  "Libretas": "📓",
  "Mochilas": "🎒",
  "Tecnología": "💻",
  "Bolsas de papel": "🛍️",
  "Lápices": "✏️",
  "BBQ y Herramientas": "🔧",
  "Viajes y ocio": "✈️",
  "Herramientas y automovil": "🚗",
  "Oficina y negocios": "💼",
  "Llaveros": "🔑",
  "Invierno": "❄️",
  "Lentes promocionales": "🕶️",
  "Belleza y salud": "💅",
  "Accesorios cocina": "🍳",
  "Infantil": "🧸",
  "Home Office-Relax": "🏠",
  "Día del Padre": "👔",
  "Sombreros y gorras": "🧢",
  "Destacados": "⭐",
  "Hogar y decoración": "🛋️",
  "Mascotas": "🐾",
  "Sustentables": "♻️",
  "Bolsas de Algodón y Yute": "👜",
  "Bolsas": "🛍️",
  "Apparel": "👕"
};

const descriptorMap = {
  "Vasos mugs termos y tazas": "Bebidas personalizadas",
  "Libretas": "Organización y notas",
  "Mochilas": "Transporte con estilo",
  "Tecnología": "Gadgets y accesorios tech",
  "Bolsas de papel": "Packaging ecológico",
  "Lápices": "Escritura corporativa",
  "BBQ y Herramientas": "Outdoor y parrilla",
  "Viajes y ocio": "Aventura y relax",
  "Herramientas y automovil": "Utilidad práctica",
  "Oficina y negocios": "Productividad diaria",
  "Llaveros": "Accesorios con marca",
  "Invierno": "Abrigo y temporada fría",
  "Lentes promocionales": "Estilo y protección solar",
  "Belleza y salud": "Bienestar personal",
  "Accesorios cocina": "Gourmet y hogar",
  "Infantil": "Diversión para niños",
  "Home Office-Relax": "Comodidad en casa",
  "Día del Padre": "Regalos especiales",
  "Sombreros y gorras": "Headwear con marca",
  "Destacados": "Los más pedidos",
  "Hogar y decoración": "Ambiente y estilo",
  "Mascotas": "Para los peludos",
  "Sustentables": "Eco-friendly y verde",
  "Bolsas de Algodón y Yute": "Tote bags naturales",
  "Bolsas": "Bolsas reutilizables",
  "Apparel": "Ropa corporativa"
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
