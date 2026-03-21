import Image from 'next/image';
import { clientes } from '../data/clientes';

export default function ClienteGrid() {
  const withLogos = clientes.filter(c => c.logoPath);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 px-4">
      {withLogos.map((cliente) => (
        <div
          key={cliente.dominio}
          className="flex items-center justify-center bg-white rounded-lg p-4 shadow-sm border border-gray-100"
          style={{ height: '80px' }}
        >
          <img
            src={'/images/clientes/' + cliente.logoPath}
            alt={cliente.nombre}
            title={cliente.nombre}
            style={{ maxHeight: '52px', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
