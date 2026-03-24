import { clientes } from '../data/clientes';

export default function ClienteGrid() {
  return (
    <div className="eco-band">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-eco-ink">
            Clientes
          </h2>
          <p className="mt-4 text-eco-muted">
            Empresas y organizaciones que han confiado en EcoGift para sus
            regalos corporativos.
          </p>
        </div>

        {/* Right Section - Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {clientes.map((cliente) => (
            <div key={cliente.id} className="eco-logo-pill">
              <img
                src={`/images/clientes/${cliente.logoPath}`}
                alt={cliente.nombre}
                style={{
                  maxHeight: '40px',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
