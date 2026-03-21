import { clientes } from '../data/clientes';

export default function ClienteGrid() {
  const withLogos = clientes.filter(c => c.logoPath);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4">
      {withLogos.map((cliente) => (
        <div
          key={cliente.dominio}
          className="flex items-center justify-center bg-white rounded-xl p-5 shadow-sm border border-gray-100"
          style={{ height: '110px' }}
        >
          <img
            src={'/images/clientes/' + cliente.logoPath}
            alt={cliente.nombre}
            title={cliente.nombre}
            style={{ maxHeight: '72px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
