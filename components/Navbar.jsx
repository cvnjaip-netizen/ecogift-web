import Container from "./Container";

export default function Navbar() {
  return (
    <header className="eco-topbar sticky top-8 z-30">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/images/ecogift-logo-navbar.png"
                alt="EcoGift"
                className="h-36 w-auto"
              />
            </a>
          </div>

          {/* Menu Pill + Cotizar - Hidden on mobile */}
          <nav className="eco-menu-pill hidden md:flex items-center">
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
            <a
              href="/cotizar"
              className="ml-2 bg-[#D7FF4D] text-slate-900 font-semibold rounded-full py-2 px-4 text-sm hover:bg-[#c8f044] transition-colors"
            >
              Cotizar
            </a>
          </nav>

          {/* Mobile Menu - Details/Summary pattern */}
          <details className="md:hidden">
            <summary className="cursor-pointer p-2 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-eco-ink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <a
                    href="/cotizar"
                    className="bg-[#D7FF4D] text-slate-900 font-semibold rounded-full py-2 px-4 text-sm hover:bg-[#c8f044] transition-colors block text-center"
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </nav>
          </details>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a
              href="/cotizar"
              className="bg-[#D7FF4D] text-slate-900 font-semibold rounded-full py-2 px-4 text-sm hover:bg-[#c8f044] transition-colors"
            >
              Cotizar
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
