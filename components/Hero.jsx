import Container from "./Container";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <Container>
        <div className="hero-card p-8 md:p-12 lg:p-16 z-10 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
            {/* Left Column */}
            <div>
              {/* Eyebrow */}
              <span className="eco-eyebrow">Merchandising corporativo en Chile</span>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-eco-ink mt-4 mb-6 leading-tight">
                Regalos corporativos, productos promocionales y kits con foco en marca.
              </h1>

              {/* Description */}
              <p className="text-lg text-eco-ink/80 mb-8 leading-relaxed max-w-2xl">
                EcoGift crea soluciones personalizadas según necesidades y presupuestos, con propuestas originales para eventos, campañas, bienvenida de colaboradores y activaciones de marca.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/cotizar" className="btn-lime py-3 px-6 text-center">
                  Solicitar cotización
                </a>
                <a
                  href="/trabajos"
                  className="btn-secondary border border-white py-3 px-6 text-center"
                >
                  Ver trabajos reales
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="eco-stat">
                  <div className="text-2xl md:text-3xl font-bold text-eco-green">200+</div>
                  <p className="text-sm text-eco-ink/70 mt-1">Productos</p>
                </div>
                <div className="eco-stat">
                  <div className="text-2xl md:text-3xl font-bold text-eco-green">20+</div>
                  <p className="text-sm text-eco-ink/70 mt-1">Clientes</p>
                </div>
                <div className="eco-stat">
                  <div className="text-2xl md:text-3xl font-bold text-eco-green">6+</div>
                  <p className="text-sm text-eco-ink/70 mt-1">Años</p>
                </div>
              </div>
            </div>

            {/* Right Column - Qué encontrarás Panel */}
            <div className="hidden lg:flex flex-col">
              <div className="bg-white/90 rounded-4xl p-6 shadow-eco border border-slate-100">
                <h2 className="text-2xl font-bold text-eco-ink mb-6">Qué encontrarás</h2>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="eco-bullet-icon flex-shrink-0 mt-1">✓</span>
                    <span className="text-eco-ink/80">Productos personalizados con marca</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="eco-bullet-icon flex-shrink-0 mt-1">✓</span>
                    <span className="text-eco-ink/80">Soluciones para cualquier presupuesto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="eco-bullet-icon flex-shrink-0 mt-1">✓</span>
                    <span className="text-eco-ink/80">Diseño y asesoramiento completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="eco-bullet-icon flex-shrink-0 mt-1">✓</span>
                    <span className="text-eco-ink/80">Entrega rápida y confiable</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a href="/productos" className="text-eco-green font-semibold hover:text-eco-green2 transition">
                    Explorar catálogo →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
            }
