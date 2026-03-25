import Container from "./Container";

export default function Hero() {
  const topCategories = [
    { emoji: "🧊", label: "Botellas y mugs", sub: "Alta rotación" },
    { emoji: "🎒", label: "Bolsos y mochilas", sub: "Merch útil" },
    { emoji: "🎁", label: "Kits de bienvenida", sub: "Alta intención" },
    { emoji: "⚡", label: "Tecnología y escritorio", sub: "Selección premium" },
  ];

  return (
    <section className="pt-2 pb-4 md:pt-3 md:pb-6">
      <Container>
        <div className="hero-card p-5 md:p-8 lg:p-10 z-10 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">

            {/* Left column */}
            <div>
              <span className="eco-eyebrow text-[11px]">Merchandising corporativo en Chile</span>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-3 mb-3 leading-tight">
                Regalos corporativos, productos promocionales y kits con foco en marca.
              </h1>

              <p className="text-sm md:text-base mb-4 leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.78)" }}>
                EcoGift crea soluciones de merchandising personalizado según las
                necesidades, presupuesto y objetivos de cada empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <a href="/cotizar" className="btn-lime py-2.5 px-5 text-sm text-center">
                  Cotizar ahora ↗
                </a>
                <a
                  href="/productos"
                  className="rounded-full py-2.5 px-5 text-sm text-center font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
                >
                  Explorar categorías
                </a>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="eco-stat text-center py-3 px-2">
                  <p className="text-xl font-extrabold text-white">+500</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>Empresas atendidas</p>
                </div>
                <div className="eco-stat text-center py-3 px-2">
                  <p className="text-xl font-extrabold text-white">+20k</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>Productos entregados</p>
                </div>
                <div className="eco-stat text-center py-3 px-2">
                  <p className="text-xl font-extrabold text-white">+26</p>
                  <p className="text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.60)" }}>Categorías disponibles</p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="hidden lg:flex flex-col">
              <div className="eco-quick-panel">
                <h2 className="text-base font-bold text-eco-ink mb-2">Compra por Categoría</h2>

                <form action="/productos" method="GET" className="relative mb-4">
                  <input
                    type="text"
                    name="busqueda"
                    placeholder="Buscar mugs, kits, mochilas..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  />
                  <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</button>
                </form>

                <div className="grid grid-cols-2 gap-2">
                  {topCategories.map((cat, i) => (
                    <a
                      key={i}
                      href={`/productos?categoria=${encodeURIComponent(cat.label)}`}
                      className="rounded-2xl border border-slate-100 bg-white p-2.5 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                    >
                      <div className="text-xl mb-1">{cat.emoji}</div>
                      <p className="text-[10px] text-slate-500">{cat.sub}</p>
                      <p className="text-xs font-bold text-slate-800">{cat.label}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
