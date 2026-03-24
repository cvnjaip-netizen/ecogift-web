import Container from "./Container";

export default function Navbar() {
  return (
    <header className="eco-topbar sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/images/ecogift-logo-navbar.png"
                alt="EcoGift"
                style={{ maxHeight: "180px" }}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Menu Pill - Hidden on mobile */}
          <nav className="eco-menu-pill hidden md:flex">
            <a href="/" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Inicio
            </a>
            <a href="/productos" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Productos
            </a>
            <a href="/trabajos" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Trabajos
            </a>
            <a href="/soluciones" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Soluciones
            </a>
            <a href="/clientes" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Clientes
            </a>
            <a href="/cotizar" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
              Cotizar
            </a>
          </nav>

          {/* CTA Group - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/trabajos" className="btn-secondary py-2 px-4 text-sm">
              Ver trabajos
            </a>
            <a href="/cotizar" className="btn-primary py-2 px-4 text-sm">
              Cotizar
            </a>
          </div>

          {/* Mobile Menu - Details/Summary pattern */}
          <details className="md:hidden">
            <summary className="cursor-pointer p-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-eco-ink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <nav className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
              <div className="flex flex-col p-4">
                <a href="/" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Inicio
                </a>
                <a href="/productos" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Productos
                </a>
                <a href="/trabajos" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Trabajos
                </a>
                <a href="/soluciones" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Soluciones
                </a>
                <a href="/clientes" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Clientes
                </a>
                <a href="/cotizar" className="px-4 py-2 text-sm font-medium hover:text-eco-green transition">
                  Cotizar
                </a>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a href="/cotizar" className="btn-primary py-2 px-4 text-sm block text-center">
                    Cotizar
                  </a>
                </div>
              </div>
            </nav>
          </details>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a href="/cotizar" className="btn-primary py-2 px-4 text-sm">
              Cotizar
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
                  }
