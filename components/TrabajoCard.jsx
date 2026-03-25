export default function TrabajoCard({ trabajo }) {
  const { imagen, titulo, categoria, cliente, resumen, slug } = trabajo;

  return (
    <div className="eco-showcase-card flex flex-col h-full">
      {/* Image Area */}
      <div className="h-56 overflow-hidden bg-slate-100 flex items-center justify-center p-4">
        {imagen ? (
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-contain"
          />
        ) : (
          <svg
            className="w-full h-full text-slate-300"
            fill="currentColor"
            viewBox="0 0 100 100"
          >
            <rect width="100" height="100" fill="currentColor" opacity="0.1" />
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="currentColor"
              opacity="0.5"
              fontSize="12"
            >
              Sin imagen
            </text>
          </svg>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <span className="tag">{categoria}</span>

        <h3 className="mt-3 text-lg font-bold">{titulo}</h3>

        <p className="mt-1 text-sm font-semibold text-eco-green">
          {cliente}
        </p>

        <p className="mt-3 text-sm text-eco-muted leading-relaxed">
          {resumen}
        </p>

        {/* Link */}
        <a
          href={`/trabajos/${slug}`}
          className="mt-4 inline-flex text-sm font-bold text-eco-green hover:text-eco-green3 transition-colors"
        >
          Ver caso →
        </a>
      </div>
    </div>
  );
}
