import Container from "../../../components/Container";
import CaseStudyGallery from "../../../components/CaseStudyGallery";
import CTASection from "../../../components/CTASection";
import { trabajos } from "../../../data/trabajos";

export function generateStaticParams() {
  return trabajos.map((trabajo) => ({ slug: trabajo.slug }));
}

export function generateMetadata({ params }) {
  const trabajo = trabajos.find((item) => item.slug === params.slug);
  return {
    title: trabajo ? `${trabajo.titulo} | EcoGift Chile` : "Trabajo | EcoGift Chile",
    description: trabajo?.resumen || "Caso EcoGift"
  };
}

export default function TrabajoDetallePage({ params }) {
  const trabajo = trabajos.find((item) => item.slug === params.slug);

  if (!trabajo) {
    return <main className="p-10">Caso no encontrado.</main>;
  }

  return (
    <main className="py-16">
      <Container className="max-w-5xl">
        <span className="tag">{trabajo.categoria}</span>
        <h1 className="mt-4 text-4xl font-bold">{trabajo.titulo}</h1>
        <p className="mt-2 text-lg font-medium text-brand-700">{trabajo.cliente}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Desafío</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{trabajo.resumen}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Resultado</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{trabajo.resultado}</p>
          </div>
        </div>

        <div className="mt-10">
          {trabajo.imagen ? (
            <div className="overflow-hidden rounded-3xl shadow-md">
              <img
                src={trabajo.imagen}
                alt={trabajo.titulo}
                className="w-full object-cover"
                style={{ maxHeight: '560px' }}
              />
            </div>
          ) : (
            <CaseStudyGallery />
          )}
        </div>

        <div className="mt-10 flex gap-4">
          <a href="/cotizar" className="btn-primary">Solicitar algo similar</a>
          <a href="/trabajos" className="btn-secondary">Ver más trabajos</a>
        </div>
      </Container>
      <div className="mt-16">
        <CTASection />
      </div>
    </main>
  );
}
