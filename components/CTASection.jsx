'use client';

import { useState } from 'react';
import Container from './Container';

export default function CTASection() {
  const [formData, setFormData] = useState({
    empresa: '',
    correo: '',
    campana: '',
    volumen: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    // Reset or redirect after submission
  };

  return (
    <section className="py-16 px-4">
      <Container>
        <div className="eco-contact-card">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-eco-ink mb-3">
              ¿Necesitas una propuesta para tu proyecto?
            </h2>
            <p className="text-eco-ink/70 mb-8 max-w-2xl">
              Cuéntanos qué buscas y prepara una primera base para cotizar productos, kits o campañas corporativas.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="eco-field"
                />
                <input
                  type="email"
                  name="correo"
                  placeholder="Correo de trabajo"
                  value={formData.correo}
                  onChange={handleChange}
                  className="eco-field"
                />
                <input
                  type="text"
                  name="campana"
                  placeholder="Tipo de campaña"
                  value={formData.campana}
                  onChange={handleChange}
                  className="eco-field"
                />
                <input
                  type="text"
                  name="volumen"
                  placeholder="Volumen estimado"
                  value={formData.volumen}
                  onChange={handleChange}
                  className="eco-field"
                />
              </div>

              <textarea
                name="mensaje"
                placeholder="Cuéntanos qué necesitas..."
                value={formData.mensaje}
                onChange={handleChange}
                className="eco-field mb-6 min-h-32"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="btn-lime"
                >
                  Solicitar propuesta personalizada
                </button>
                <a
                  href="/cotizar"
                  className="btn-secondary"
                >
                  Ir a cotizar
                </a>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
