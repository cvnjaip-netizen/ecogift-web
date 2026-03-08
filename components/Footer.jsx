import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold">EcoGift Chile</h3>
          <p className="mt-3 text-sm text-slate-600">
            Regalos corporativos y promocionales. Soluciones personalizadas para eventos,
            campañas, onboarding y acciones de marca.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Navegación</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/productos">Productos</a></li>
            <li><a href="/trabajos">Trabajos</a></li>
            <li><a href="/soluciones">Soluciones</a></li>
            <li><a href="/clientes">Clientes</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>ventas@ecogiftchile.cl</li>
            <li>+56 9 9758 2936</li>
            <li>Santiago, Chile</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
