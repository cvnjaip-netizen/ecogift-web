import Container from "./Container";

export default function CTASection() {
  return (
    <section className="bg-brand-700 py-20 text-white">
      <Container className="text-center">
        <h2 className="text-4xl font-bold">¿Necesitas una propuesta para tu proyecto?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Cuéntanos qué buscas y prepara una primera base para cotizar productos, kits o campañas corporativas.
        </p>
        <a href="/cotizar" className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-medium text-brand-700">Ir a cotizar</a>
      </Container>
    </section>
  );
}
