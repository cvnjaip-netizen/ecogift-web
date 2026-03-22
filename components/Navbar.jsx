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
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <Container className="flex items-center justify-between py-3">
        <a href="/" className="flex-shrink-0">
          <div
            style={{
              width: '200px',
              height: '56px',
              backgroundImage: 'url(/images/ecogift-logo-v2.png)',
              backgroundSize: '300px auto',
              backgroundPosition: '-47px -72px',
              backgroundRepeat: 'no-repeat'
            }}
            role="img"
            aria-label="EcoGift"
          />
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