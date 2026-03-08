import Container from "../../../components/Container";
import CTASection from "../../../components/CTASection";
import { productos } from "../../../data/productos";

export function generateStaticParams() {
  return productos.map((producto) => ({ slug: producto.slug }));
}

export function generateMetadata({ params }) {
  const producto = productos.find((item) => item.slug === params.slug);
  return {
    title: producto ? `${producto.nombre} | EcoGift Chile` : "Producto | EcoGift Chile",
    description: producto?.descripcion || "Producto promocional EcoGift"
  };
}

export default function ProductoDetallePage({ params }) {
  const producto = productos.find((item) => item.slug === params.slug);

  if (!producto) {
    return <main className="p-10">Producto no encontrado.</main>;
  }

  return (
    <main className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_420px]">
        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-12 shadow-sm">
          <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-300 text-slate-500">
            Imagen / mockup del producto
          </div>
        </div>
        <div>
          <span className="tag">{producto.categoria}</span>
          <h1 className="mt-4 text-4xl font-bold">{producto.nombre}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{producto.descripcion}</p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Uso recomendado</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Eventos y ferias</li>
              <li>• Campañas promocionales</li>
              <li>• Regalos corporativos</li>
              <li>• Kits de bienvenida</li>
            </ul>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={`/cotizar?producto=${producto.slug}`} className="btn-primary">Cotizar este producto</a>
            <a href="/productos" className="btn-secondary">Volver al catálogo</a>
          </div>
        </div>
      </Container>
      <div className="mt-16">
        <CTASection />
      </div>
    </main>
  );
}
