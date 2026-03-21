"use client";

export default function ClienteGrid({ clientes }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
      {clientes.map((cliente) => (
        <div
          key={cliente.nombre}
          className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-5 shadow-sm"
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${cliente.dominio}&sz=64`}
            alt={cliente.nombre}
            className="h-8 w-8 object-contain"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <span className="text-center text-xs font-medium text-slate-700 leading-tight">
            {cliente.nombre}
          </span>
        </div>
      ))}
    </div>
  );
}
