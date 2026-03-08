export default function CategoryCard({ nombre }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-700 hover:shadow-suave">
      <p className="font-semibold text-slate-900">{nombre}</p>
    </div>
  );
}
