import Container from "../../../components/Container";
import CTASection from "../../../components/CTASection";
import { productos } from "../../../data/productos";

export function generateStaticParams() {
  return productos.map((producto) => ({ slug: producto.slug }));
}

function findProducto(slug) {
  const normalized = decodeURIComponent(slug).normalize("NFC");
  return productos.find((item) => item.slug.normalize("NFC") === normalized);
}

export function generateMetadata({ params }) {
  const producto = findProducto(params.slug);
  return {
    title: producto ? `${producto.nombre} | EcoGift Chile` : "Producto | EcoGift Chile",
    description: producto?.descripcion || "Producto promocional EcoGift"
  };
}

export default function ProductoDetallePage({ params }) {
  const producto = findProducto(params.slug);

  if (!producto) {
    return <main className="p-10">Producto no encontrado.</main>;
  }

  return (
    <main className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_420px]">
        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 shadow-sm flex items-center justify-center min-h-80">
          {producto.imagen ? (
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="max-h-80 w-full object-contain rounded-2xl"
            />
          ) : (
            <div className="flex h-80 w-full flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white gap-3 text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">{producto.nombre}</span>
            </div>
          )}
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
