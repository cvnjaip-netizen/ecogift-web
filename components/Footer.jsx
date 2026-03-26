import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 py-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold text-eco-ink mb-3">EcoGift</h3>
            <p className="text-eco-ink/70 text-sm leading-relaxed">
              Regalos corporativos y promocionales. Soluciones personalizadas para eventos, campañas, onboarding y acciones de marca.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-semibold text-eco-ink mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/productos"
                  className="text-eco-ink/70 hover:text-eco-green transition text-sm"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="/trabajos"
                  className="text-eco-ink/70 hover:text-eco-green transition text-sm"
                >
                  Trabajos
                </a>
              </li>
              <li>
                <a
                  href="/soluciones"
                  className="text-eco-ink/70 hover:text-eco-green transition text-sm"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="/clientes"
                  className="text-eco-ink/70 hover:text-eco-green transition text-sm"
                >
                  Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-eco-ink mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:ventas@ecogiftchile.cl"
                  className="text-eco-ink/70 hover:text-eco-green transition"
                >
                  ventas@ecogiftchile.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56997582936"
                  className="text-eco-ink/70 hover:text-eco-green transition"
                >
                  +56 9 9758 2936
                </a>
              </li>
              <li className="text-eco-ink/70">Santiago</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8 mt-8">
          <p className="text-center text-sm text-eco-ink/60">
            © 2026 EcoGift. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
          }
