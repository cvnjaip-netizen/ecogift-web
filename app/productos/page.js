import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProductCatalog from "../../components/ProductCatalog";
import FAQ from "../../components/FAQ";
import { productos } from "../../data/productos";
import { categorias } from "../../data/categorias";

export const metadata = {
  title: "Productos promocionales | EcoGift Chile",
  description: "Catálogo de productos promocionales y regalos corporativos organizados por categoría."
};

export default function ProductosPage({ searchParams }) {
  const initialCategoria = searchParams?.categoria || "Todos";
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Productos promocionales y regalos corporativos"
          text="Catálogo completo con búsqueda y filtrado por categoría."
        />
        <div className="mt-10">
          <ProductCatalog productos={productos} categorias={categorias} initialCategoria={initialCategoria} />
        </div>
        <div className="mt-16">
          <FAQ />
        </div>
      </Container>
    </main>
  );
}
