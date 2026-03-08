import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ClienteGrid from "../../components/ClienteGrid";
import { clientes } from "../../data/clientes";

export const metadata = {
  title: "Clientes | EcoGift Chile",
  description: "Base de clientes visibles del sitio actual de EcoGift."
};

export default function ClientesPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Clientes"
          title="Marcas visibles en el sitio actual"
          text="Se cargó una selección de clientes visibles del sitio público para reforzar confianza y validación."
        />
        <div className="mt-10">
          <ClienteGrid clientes={clientes} />
        </div>
      </Container>
    </main>
  );
}
