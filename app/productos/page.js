import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ProductCatalog from "../../components/ProductCatalog";
import FAQ from "../../components/FAQ";
import Pagination from "../../components/Pagination";
import { productos } from "../../data/productos";
import { categorias } from "../../data/categorias";

export const metadata = {
  title: "Productos promocionales | EcoGift Chile",
  description: "Catálogo de productos promocionales y regalos corporativos organizados por categoría."
};

export default function ProductosPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Catálogo"
          title="Productos promocionales y regalos corporativos"
          text="Página de catálogo con búsqueda y filtrado por categoría, basada en la estructura pública visible del sitio."
        />
        <div className="mt-10">
          <ProductCatalog productos={productos} categorias={categorias} />
        </div>
        <div className="mt-10">
          <Pagination />
        </div>
        <div className="mt-16">
          <FAQ />
        </div>
      </Container>
    </main>
  );
}
