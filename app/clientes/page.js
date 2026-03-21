import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ClienteGrid from "../../components/ClienteGrid";
import { clientes } from "../../data/clientes";

export const metadata = {
  title: "Clientes | EcoGift Chile",
  description: "Empresas y organizaciones que han confiado en EcoGift para sus regalos corporativos."
};

export default function ClientesPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          title="Clientes"
          text="Empresas y organizaciones que han confiado en EcoGift para sus regalos corporativos."
        />
        <div className="mt-10">
          <ClienteGrid clientes={clientes} />
        </div>
      </Container>
    </main>
  );
}
