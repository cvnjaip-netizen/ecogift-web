export default function CategoryCard({ nombre }) {
  const href = `/productos?categoria=${encodeURIComponent(nombre)}`;
  return (
    <a
      href={href}
      className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-teal-700 hover:shadow-md transition-all cursor-pointer"
    >
      <p className="font-semibold text-slate-900">{nombre}</p>
    </a>
  );
}
