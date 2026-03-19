export default function ProductCard({ producto }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {producto.imagen ? (
        <div className="h-48 overflow-hidden bg-slate-100">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-48 bg-slate-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      <div className="p-5">
        <span className="tag">{producto.categoria}</span>
        <h3 className="mt-3 text-base font-semibold text-slate-900 line-clamp-2">{producto.nombre}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{producto.descripcion}</p>
        <div className="mt-5 flex gap-3">
          <a href={`/productos/${producto.slug}`} className="btn-secondary text-sm">Ver detalle</a>
          <a href={`/cotizar?producto=${producto.slug}`} className="btn-primary text-sm">Cotizar</a>
        </div>
      </div>
    </div>
  );
}
