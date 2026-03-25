import Container from "./Container";

export default function Hero() {
  const topCategories = [
    { emoji: "🥤", label: "Botellas y mugs", sub: "Alta rotación" },
    { emoji: "🎒", label: "Bolsos y mochilas", sub: "Merch útil" },
    { emoji: "🎁", label: "Kits de bienvenida", sub: "Alta intención" },
    { emoji: "⚡", label: "Tecnología y escritorio", sub: "Selección premium" },
  ];

  return (
    <section className="pt-4 pb-8 md:pt-6 md:pb-12">
      <Container>
        <div className="hero-card p-6 md:p-10 lg:p-12 z-10 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">

            {/* ── Left column ── */}
            <div>
              <span className="eco-eyebrow">Merchandising corporativo en Chile</span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
                Regalos corporativos, productos promocionales y kits con foco en marca.
              </h1>

              <p className="text-base md:text-lg mb-6 leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.78)" }}>
                EcoGift crea soluciones de merchandising personalizado según las
                necesidades, presupuesto y objetivos de cada empresa. Desde regalos
                corporativos hasta campañas promocionales a gran escala.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href="/cotizar" className="btn-lime py-3 px-6 text-center">
                  Cotizar ahora ↗
                </a>
                <a
                  href="/productos"
                  className="btn-secondary py-3 px-6 text-center"
                  style={{ borderColor: "rgba(255,255,255,0.20)", color: "#fff" }}
                >
                  Explorar categorías
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="eco-stat text-center">
                  <p className="text-2xl font-extrabold text-white">+500</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Empresas atendidas</p>
                </div>
                <div className="eco-stat text-center">
                  <p className="text-2xl font-extrabold text-white">+20k</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Productos entregados</p>
                </div>
                <div className="eco-stat text-center">
                  <p className="text-2xl font-extrabold text-white">+26</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Categorías disponibles</p>
                </div>
              </div>
            </div>

            {/* ── Right column – "Compra por campaña" panel ── */}
            <div className="hidden lg:flex flex-col">
              <div className="eco-quick-panel">
                <h2 className="text-lg font-bold text-eco-ink mb-3">Compra por campaña</h2>

                <div className="relative mb-5">
                  <input
                    type="text"
                    placeholder="Buscar mugs, kits, mochilas..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                    readOnly
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {topCategories.map((cat, i) => (
                    <a
                      key={i}
                      href={`/productos?categoria=${encodeURIComponent(cat.label)}`}
                      className="rounded-2xl border border-slate-100 bg-white p-3 hover:-translate-y-0.5 hover:shadow-lg transition-all"
                    >
                      <div className="text-2xl mb-2">{cat.emoji}</div>
                      <p className="text-xs text-slate-500">{cat.sub}</p>
                      <p className="text-sm font-bold text-slate-800">{cat.label}</p>
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
