import Container from "../components/Container";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import TrabajoCard from "../components/TrabajoCard";
import ClienteGrid from "../components/ClienteGrid";
import CTASection from "../components/CTASection";
import { categorias } from "../data/categorias";
import { productos } from "../data/productos";
import { trabajos } from "../data/trabajos";
import { clientes } from "../data/clientes";

export default function HomePage() {
  return (
    <main>
      <Hero />

<section className="py-20">
        <Container>
          <SectionTitle
            title="Clientes"
            text="Empresas y organizaciones que han confiado en EcoGift para sus regalos corporativos."
          />
          <div className="mt-10">
            <ClienteGrid clientes={clientes} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            title="Explora el catÃ¡logo por categorÃ­a"
            text="La estructura se construyÃ³ con las categorÃ­as pÃºblicas visibles del sitio actual."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categorias.slice(0, 12).map((nombre) => <CategoryCard key={nombre} nombre={nombre} />)}
          </div>
          <div className="mt-8">
            <a href="/productos" className="btn-secondary">Ver todo el catÃ¡logo</a>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container>
          <SectionTitle
            eyebrow="Productos destacados"
            title="Productos promocionales listos para cotizar"
            text="CatÃ¡logo inicial cargado con productos visibles y representativos del sitio pÃºblico."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {productos.filter((p) => p.destacado).slice(0, 8).map((producto) => (
              <ProductCard key={producto.slug} producto={producto} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Trabajos reales"
            title="Casos y proyectos visibles de EcoGift"
            text="Casos creados a partir del feed pÃºblico de trabajos y piezas promocionales visibles en el sitio."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trabajos.slice(0, 6).map((trabajo) => (
              <TrabajoCard key={trabajo.slug} trabajo={trabajo} />
            ))}
          </div>
          <div className="mt-8">
            <a href="/trabajos" className="btn-secondary">Ver todos los trabajos</a>
          </div>
        </Container>
      </section>

      <section className="bg-arena py-20">
        <Container>
          <SectionTitle
            eyebrow="Soluciones"
            title="Pensado para campaÃ±as, eventos y kits"
            text="La navegaciÃ³n prioriza necesidades de negocio antes que el catÃ¡logo puro."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Regalos para eventos", "Merchandising y regalos promocionales para ferias, lanzamientos y activaciones."],
              ["Kits de bienvenida", "Sets corporativos para nuevos ingresos, equipos internos y employer branding."],
              ["Regalos corporativos", "Productos funcionales o premium para clientes, equipos y campaÃ±as de relacionamiento."]
            ].map(([titulo, texto]) => (
              <div key={titulo} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">{titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{texto}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      

      <CTASection />
    </main>
  );
}
