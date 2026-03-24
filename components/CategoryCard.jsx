const emojiMap = {
  "Vasos mugs termos y tazas": "🥤",
  "Libretas": "📓",
  "Mochilas": "🎒",
  "Tecnología": "💻",
  "Bolsas de papel": "🛍️",
  "Lápices": "✏️",
  "BBQ y Herramientas": "🔧",
  "Viajes y ocio": "✈️",
  "Herramientas y automovil": "🔩",
  "Oficina y negocios": "🏢",
  "Llaveros": "🔑",
  "Invierno": "🧣"
};

const descriptorMap = {
  "Vasos mugs termos y tazas": "Bebidas personalizadas",
  "Libretas": "Organización y notas",
  "Mochilas": "Portabilidad sostenible",
  "Tecnología": "Accesorios innovadores",
  "Bolsas de papel": "Alternativas ecológicas",
  "Lápices": "Escritura responsable",
  "BBQ y Herramientas": "Herramientas duraderas",
  "Viajes y ocio": "Aventuras conscientes",
  "Herramientas y automovil": "Equipamiento profesional",
  "Oficina y negocios": "Espacios productivos",
  "Llaveros": "Detalles memorables",
  "Invierno": "Confort estacional"
};

export default function CategoryCard({ nombre, index }) {
  const emoji = emojiMap[nombre] || "📦";
  const descriptor = descriptorMap[nombre] || nombre;
  const href = `/productos?categoria=${encodeURIComponent(nombre)}`;

  if (index < 3) {
    // eco-feature-card
    const isHeroish = index === 0;
    return (
      <a
        href={href}
        className={`eco-feature-card ${isHeroish ? "heroish" : ""} min-h-[230px] flex flex-col items-center justify-center text-center`}
      >
        <span className="eco-label">
          {isHeroish ? "Categoría protagonista" : "Exploración rápida"}
        </span>
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
