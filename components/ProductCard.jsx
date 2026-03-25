export default function ProductCard({ producto }) {
  const { imagen, nombre, categoria, descripcion, slug } = producto;

  return (
    <div className="eco-showcase-card flex flex-col h-full">
      {/* Image Area */}
      <div className="h-48 overflow-hidden bg-slate-100">
        {imagen ? (
          <img
            src={imagen}
            alt={nombre}
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
      <div className="p-5 flex flex-col flex-grow">
        <span className="tag">{categoria}</span>

        <h3 className="mt-3 font-semibold line-clamp-2">{nombre}</h3>

        <p className="mt-2 text-sm text-eco-muted line-clamp-2">
          {descripcion}
        </p>

        {/* Buttons Row */}
        <div className="mt-4 flex gap-3">
          <a
            href={`/productos/${slug}`}
            className="btn-secondary text-sm py-2 px-4"
          >
            Ver detalle
          </a>
          <a
            href={`/cotizar?producto=${slug}`}
            className="btn-lime text-sm py-2 px-4"
          >
            Cotizar
          </a>
        </div>
      </div>
    </div>
  );
        }
