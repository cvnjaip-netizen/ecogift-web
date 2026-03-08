import { formatPriceCLP } from "../utils/format";

export default function ProductCard({ producto }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <span className="tag">{producto.categoria}</span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{producto.nombre}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{producto.descripcion}</p>
      {producto.precio ? <p className="mt-4 text-sm font-semibold text-slate-900">Desde {formatPriceCLP(producto.precio)}</p> : null}
      <div className="mt-5 flex gap-3">
        <a href={`/productos/${producto.slug}`} className="btn-secondary text-sm">Ver detalle</a>
        <a href={`/cotizar?producto=${producto.slug}`} className="btn-primary text-sm">Cotizar</a>
      </div>
    </div>
  );
}
