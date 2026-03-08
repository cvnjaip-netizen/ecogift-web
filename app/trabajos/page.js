import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import TrabajoCard from "../../components/TrabajoCard";
import { trabajos } from "../../data/trabajos";

export const metadata = {
  title: "Trabajos y casos | EcoGift Chile",
  description: "Selección de trabajos visibles, campañas y proyectos corporativos de EcoGift."
};

export default function TrabajosPage() {
  return (
    <main className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Portafolio"
          title="Trabajos visibles y casos de uso"
          text="Casos creados a partir de textos y referencias visibles en el feed público del sitio."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trabajos.map((trabajo) => (
            <TrabajoCard key={trabajo.slug} trabajo={trabajo} />
          ))}
        </div>
      </Container>
    </main>
  );
}
