"use client";

export default function ClienteGrid({ clientes }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {clientes.map((cliente) => (
        <div
          key={cliente.nombre}
          className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-sm"
        >
          <img
            src={`https://logo.clearbit.com/${cliente.dominio}`}
            alt={cliente.nombre}
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "block";
            }}
          />
          <span
            className="hidden text-center text-sm font-medium text-slate-700"
          >
            {cliente.nombre}
          </span>
        </div>
      ))}
    </div>
  );
}
