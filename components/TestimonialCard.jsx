export default function TestimonialCard({ quote = "Este bloque está listo para futuras referencias de clientes." }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="italic text-slate-700">“{quote}”</p>
    </div>
  );
}
