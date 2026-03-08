import Container from "./Container";
import CTASection from "./CTASection";

export default function Hero() {
  return (
    <section className="bg-arena py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="tag">Merchandising corporativo en Chile</span>
          <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
            Regalos corporativos, productos promocionales y kits con foco en marca.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            EcoGift crea soluciones personalizadas según necesidades y presupuestos,
            con propuestas originales para eventos, campañas, bienvenida de colaboradores
            y activaciones de marca.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/cotizar" className="btn-primary">Solicitar cotización</a>
            <a href="/trabajos" className="btn-secondary">Ver trabajos reales</a>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-suave">
          <h2 className="text-2xl font-semibold">Qué encontrarás</h2>
          <ul className="mt-5 grid gap-3 text-sm text-slate-700">
            <li>• Catálogo de productos promocionales por categoría</li>
            <li>• Casos reales con marcas y clientes visibles</li>
            <li>• Soluciones para eventos, kits y regalos corporativos</li>
            <li>• Flujo directo para solicitar cotización</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
