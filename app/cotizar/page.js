import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import QuoteForm from "../../components/QuoteForm";
import { Suspense } from "react";

export const metadata = {
  title: "Cotizar | EcoGift Chile",
  description: "Formulario para solicitar cotización de regalos corporativos y productos promocionales."
};

export default function CotizarPage() {
  return (
    <main className="py-16">
      <Container className="grid gap-10 lg:grid-cols-[1fr_480px]">
        <div>
          <SectionTitle
            eyebrow="Contacto / Cotizar"
            title="Cuéntanos con más detalle lo que buscas"
            text="Esta página deja listo el flujo para conectar con email, CRM o automatización."
          />
          <div className="mt-8 rounded-3xl border border-slate-200 bg-arena p-8">
            <p className="font-semibold">Contacto visible del sitio</p>
            <p className="mt-3 text-sm text-slate-700">ventas@ecogiftchile.cl</p>
            <p className="text-sm text-slate-700">+56 9 9758 2936</p>
          </div>
        </div>
        <Suspense>
          <QuoteForm />
        </Suspense>
      </Container>
    </main>
  );
}
