import Container from "./Container";
const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/clientes", label: "Clientes" },
  { href: "/cotizar", label: "Cotizar" },
];
export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between py-3">
        <a href="/" className="flex-shrink-0">
          <img
            src="/images/ecogift-logo-navbar.jpg"
            alt="EcoGift"
            style={{ maxHeight: '72px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </a>
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-green-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="/cotizar"
          className="hidden md:inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          Cotizar
        </a>
      </Container>
    </header>
  );
}
