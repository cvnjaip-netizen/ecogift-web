const items = [
  ["¿Trabajan productos personalizados?", "Sí. El foco del sitio es merchandising corporativo y productos promocionales personalizables según campaña o necesidad."],
  ["¿Se pueden armar kits de bienvenida?", "Sí. El proyecto contempla soluciones para onboarding, eventos, regalos corporativos y campañas."],
  ["¿Cómo se solicita una cotización?", "Desde la página de cotización, indicando el producto o necesidad, cantidad estimada y contexto del proyecto."],
];

export default function FAQ() {
  return (
    <div className="grid gap-4">
      {items.map(([q, a]) => (
        <div key={q} className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold">{q}</h3>
          <p className="mt-2 text-sm text-slate-600">{a}</p>
        </div>
      ))}
    </div>
  );
}
