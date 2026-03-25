import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const soluciones = [
  {
    slug: "eventos",
    titulo: "Regalos para eventos",
    descripcion: "Productos promocionales para activaciones, ferias, lanzamientos y experiencias de marca."
  },
  {
    slug: "onboarding",
    titulo: "Kits de bienvenida",
    descripcion: "Sets para nuevos ingresos, equipos internos y employer branding."
  },
  {
    slug: "corporativos",
    titulo: "Regalos corporativos",
    descripcion: "Productos funcionales o premium para clientes, equipos y campañas de relacionamiento."
  },
  {
    slug: "tecnologia",
    titulo: "Merchandising tecnológico",
    descripcion: "Powerbanks, mouse pads, accesorios y objetos con alto valor percibido."
  }
];

export const metadata = {
  title: "Soluciones | EcoGift Chile",
  description: "Soluciones de merchandising para eventos, kits de bienvenida, regalos corporativos y campañas."
};

export default function SolucionesPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Soluciones"
          title="Diseñado para necesidades reales de negocio"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {soluciones.map((solucion) => (
            <div key={solucion.slug} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">{solucion.titulo}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{solucion.descripcion}</p>
              <a href={`/cotizar?producto=${encodeURIComponent(solucion.titulo)}`} className="mt-5 inline-flex text-sm font-medium text-brand-700">Cotizar solución →</a>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}
