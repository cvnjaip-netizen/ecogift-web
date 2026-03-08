export default function ClienteGrid({ clientes }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {clientes.map((cliente) => (
        <div key={cliente} className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center text-sm font-medium text-slate-700 shadow-sm">
          {cliente}
        </div>
      ))}
    </div>
  );
}
