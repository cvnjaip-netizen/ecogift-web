export default function TrabajoCard({ trabajo }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {trabajo.imagen ? (
        <div className="h-48 overflow-hidden bg-slate-100">
          <img
            src={trabajo.imagen}
            alt={trabajo.titulo}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="h-48 bg-slate-100 flex items-center justify-center">
          <svg className="h-12 w-12 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
      <div className="p-6">
        <span className="tag">{trabajo.categoria}</span>
        <h3 className="mt-4 text-xl font-semibold">{trabajo.titulo}</h3>
        <p className="mt-1 text-sm font-medium text-brand-700">{trabajo.cliente}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{trabajo.resumen}</p>
        <a href={`/trabajos/${trabajo.slug}`} className="mt-5 inline-flex text-sm font-medium text-brand-700 hover:text-brand-800">
          Ver caso →
        </a>
      </div>
    </div>
  );
}
