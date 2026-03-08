"use client";

import { useSearchParams } from "next/navigation";

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const producto = searchParams.get("producto") || "";

  return (
    <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-suave">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Nombre" />
        <input className="input" placeholder="Empresa" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Teléfono" />
      </div>
      <input className="input" defaultValue={producto} placeholder="Producto de interés" />
      <textarea className="input min-h-40" placeholder="Cuéntanos con más detalle lo que buscas, cantidades estimadas, fecha objetivo y tipo de personalización." />
      <button type="button" className="btn-primary">Enviar cotización</button>
      <p className="text-xs text-slate-500">Formulario de interfaz listo para conectar con email, CRM o backend.</p>
    </form>
  );
}
