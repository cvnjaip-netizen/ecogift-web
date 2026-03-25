import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProductCatalog from "../../components/ProductCatalog";
import FAQ from "../../components/FAQ";
import { productos } from "../../data/productos";
import { categorias } from "../../data/categorias";

export const metadata = {
  title: "Productos promocionales | EcoGift Chile",
  description: "Catálogo de productos promocionales y regalos corporativos organizados por categoría.",
};

export default function ProductosPage({ searchParams }) {
  const initialCategoria = searchParams?.categoria || "Todos";
  const initialBusqueda = searchParams?.busqueda || "";

  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Productos promocionales y regalos corporativos"
        />
        <div className="mt-10">
          <ProductCatalog
            key={initialCategoria + initialBusqueda}
            productos={productos}
            categorias={categorias}
            initialCategoria={initialCategoria}
            initialBusqueda={initialBusqueda}
          />
        </div>
        <div className="mt-16">
          <FAQ />
        </div>
      </Container>
    </main>
  );
}
