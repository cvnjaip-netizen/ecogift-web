export default function TrabajoCard({ trabajo }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="tag">{trabajo.categoria}</span>
      <h3 className="mt-4 text-xl font-semibold">{trabajo.titulo}</h3>
      <p className="mt-1 text-sm font-medium text-brand-700">{trabajo.cliente}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600">{trabajo.resumen}</p>
      <a href={`/trabajos/${trabajo.slug}`} className="mt-5 inline-flex text-sm font-medium text-brand-700 hover:text-brand-800">
        Ver caso →
      </a>
    </div>
  );
}
