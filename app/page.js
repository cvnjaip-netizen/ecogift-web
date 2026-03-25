import Container from '../components/Container';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import TrabajoCard from '../components/TrabajoCard';
import ClienteGrid from '../components/ClienteGrid';
import CTASection from '../components/CTASection';
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
            title="Explora el catálogo por categoría"
          />

          {/* All Categories Grid - uniform sizing */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categorias.slice(0, 12).map((cat, index) => (
              <CategoryCard key={index} nombre={cat} index={index} />
            ))}
          </div>

          <div className="text-center">
            <a href="/productos" className="btn-secondary">
              Ver todo el catálogo
            </a>
          </div>
        </Container>
      </section>

      {/* Products Section */}
      <section className="bg-eco-paper/50 py-16">
        <Container>
          <SectionTitle
            title="Productos Destacados"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-8">
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
            eyebrow="Últimos trabajos"
            title="Casos y proyectos visibles de EcoGift"
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
            title="Pensado para campañas, eventos y kits"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Regalos para eventos
              </h3>
              <p className="text-eco-muted">
                Merchandising y regalos promocionales para ferias, lanzamientos y activaciones.
              </p>
            </div>
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Kits de bienvenida
              </h3>
              <p className="text-eco-muted">
                Sets corporativos para nuevos ingresos, equipos internos y employer branding.
              </p>
            </div>
            <div className="eco-strategy-card">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-eco-ink mb-2">
                Regalos corporativos
              </h3>
              <p className="text-eco-muted">
                Productos funcionales o premium para clientes, equipos y campañas de relacionamiento.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
