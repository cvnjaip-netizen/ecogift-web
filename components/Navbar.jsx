import Container from "./Container";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/trabajos", label: "Trabajos" },
  { href: "/soluciones", label: "Soluciones" },
  { href: "/clientes", label: "Clientes" },
  { href: "/cotizar", label: "Cotizar" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="/" className="flex items-center">
          <div className="bg-white rounded">
            <img
              src="/images/ecogift-logo.png"
              alt="EcoGift"
              className="h-14 w-auto object-contain"
            />
          </div>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-700 hover:text-brand-700">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/cotizar" className="btn-primary text-sm">Solicitar cotización</a>
      </Container>
    </header>
  );
}
