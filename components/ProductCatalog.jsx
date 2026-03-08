"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { searchItems } from "../lib/search";
import { filterByCategory } from "../lib/filters";

export default function ProductCatalog({ productos, categorias }) {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const filtrados = useMemo(() => {
    const byCategory = filterByCategory(productos, categoria);
    return searchItems(byCategory, busqueda, ["nombre", "categoria", "descripcion"]);
  }, [productos, categoria, busqueda]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold">Buscar y filtrar</h3>
        <input
          className="input mt-4"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="mt-6">
          <label className="text-sm font-medium text-slate-700">Categoría</label>
          <select className="input mt-2" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option>Todos</option>
            {categorias.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </aside>
      <div>
        <p className="mb-4 text-sm text-slate-600">{filtrados.length} productos encontrados</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtrados.map((producto) => (
            <ProductCard key={producto.slug} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
}
