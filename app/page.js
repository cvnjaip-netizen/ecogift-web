import Container from '../components/Container';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TrabajoCard from '../components/TrabajoCard';
import ClienteGrid from '../components/ClienteGrid';
import CTASection from '../components/CTASection';
import StickyCTA from '../components/StickyCTA';
import ChatWidget from '../components/ChatWidget';
import { categorias } from '../data/categorias';
import { productos } from '../data/productos';
import { trabajos } from '../data/trabajos';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Clients Section */}
      <section className="py-12 px-4">
        <ClienteGrid />
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <Container>
          <SectionTitle
            title="Explora el cat\u00e1logo por categor\u00eda"
            text="La estructura se construy\u00f3 con las categor\u00edas p\u00fablicas visibles del sitio actual."
          />

          {/* Featured Categories Grid */}
          <div className="grid md:grid-cols-[1.1fr_0.9fr_0.9fr] gap-4 mb-4">
            {categorias.slice(0, 3).map((cat, index) => (
              <CategoryCard key={index} nombre={cat} index={index} />
            ))}
          </div>

          {/* Showcase Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categorias.slice(3, 12).map((cat, index) => (
              <CategoryCard key={index + 3} nombre={cat} index={index + 3} />
            ))}
          </div>

          <div className="text-center">
            <a href="/productos" className="btn-secondary">
              Ver todo el cat\u00e1logo
            </a>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="bg-eco-paper/50 py-16">
        <Container>
          <SectionTitle
            title="Productos Destacados"
            text="Cat\u00e1logo inicial cargado con productos visibles y representativos del sitio p\u00fablico."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productos
              .filter((p) => p.destacado)
              .slice(0, 8)
              .map((producto, index) => (
                <ProductCard key={index} producto={producto} />
              ))}
          </div>
        </Container>
      </section>

      {/* Trabajos Section */}
      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Trabajos reales"
            title="Casos y proyectos visibles de EcoGift"
            text="Casos creados a partir del feed p\u00fablico de trabajos y piezas promocionales visibles en el sitio."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-8">
            {trabajos.slice(0, 6).map((trabajo, index) => (
              <TrabajoCard key={index} trabajo={trabajo} />
            ))}
          </div>
          <div className="text-center">
            <a href="/trabajos" className="btn-secondary">
              Ver todos los trabajos
            </a>
          </div>
        </Container>
      </section>

      {/* Soluciones Section */}
      <section className="py-16" id="soluciones">
        <Container>
          <SectionTitle
            eyebrow="Soluciones"
            title="Pensado para campa\u00f1as, eventos y kits"
            text="La navegaci\u00f3n prioriza necesidades de negocio antes que el cat\u00e1logo puro."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">\uD83C\uDFEA</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Regalos para eventos
              </h3>
              <p className="text-eco-muted">
                Merchandising y regalos promocionales para ferias, lanzamientos y activaciones.
              </p>
            </div>
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">\uD83C\uDF81</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Kits de bienvenida
              </h3>
              <p className="text-eco-muted">
                Sets corporativos para nuevos ingresos, equipos internos y employer branding.
              </p>
            </div>
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">\uD83D\uDCBC</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Regalos corporativos
              </h3>
              <p className="text-eco-muted">
                Productos funcionales o premium para clientes, equipos y campa\u00f1as de relacionamiento.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Sticky CTA */}
      <StickyCTA />

      {/* Chat Widget */}
      <ChatWidget />
    </>
  );
}
