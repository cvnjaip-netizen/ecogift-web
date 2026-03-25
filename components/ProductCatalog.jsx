"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { searchItems } from "../lib/search";
import { filterByCategory } from "../lib/filters";

const categoryEmojis = {
  "Accesorios de escritorio": "✏️",
  "Artículos promocionales": "🏷️",
  "Audio y tecnología": "⚡",
  "Bolsas ecológicas": "🌿",
  "Bolsos y mochilas": "🎒",
  "Cajas y estuches": "📦",
  "Cargadores y accesorios": "🔌",
  "Cuadernos y libretas": "📓",
  "Delantales": "👨‍🍳",
  "Gorras": "🧢",
  "Iluminación": "💡",
  "Llaveros": "🔑",
  "Lápices y bolígrafos": "✒️",
  "Paraguas": "☂️",
  "Porta objetos": "🗃️",
  "Productos naturales": "🌱",
  "Sets y kits": "🎁",
  "Sublimación": "🖨️",
  "Toallas": "🏖️",
  "USB y tecnología": "💾",
  "Vasos mugs termos y tazas": "☕"
};

const featuredSlugs = [
  'vasos-ecologicos-para-cafe-con-manga-impresa', 'llaveros-con-charms', 'bolsa-totebag-de-algodón', 'mugs-doble-pared',
  'libreta-21x14-tipo-moleskine', 'libreta-simple-kraft-21x14', 'aromatizadores-de-auto-personalizados', 'regalo-día-del-padre',
  'lanyard-para-el-celular-c-21694', 'sombrero-pescador', 'cuello-polar-g19', 'g15-manta-impermeable-picnic',
  'gorro-lana-g12', 'sombreros-tipo-panamá-para-eventos', 'jockey-desgastado-j-pre', 'cooler-6-litros-c6l'
];

export default function ProductCatalog({ productos, categorias, initialCategoria = "Todos", initialBusqueda = "" }) {
  const [busqueda, setBusqueda] = useState(initialBusqueda);
  const [categoria, setCategoria] = useState(initialCategoria);

  const showCategoryGrid = categoria === "Todos" && busqueda === "";

  const filtrados = useMemo(() => {
    const byCategory = filterByCategory(productos, categoria);
    const results = searchItems(byCategory, busqueda, ["nombre", "categoria", "descripcion"]);
    return results.sort((a, b) => {
      const aIdx = featuredSlugs.indexOf(a.slug);
      const bIdx = featuredSlugs.indexOf(b.slug);
      const aFeatured = aIdx !== -1;
      const bFeatured = bIdx !== -1;
      if (aFeatured && !bFeatured) return -1;
      if (!aFeatured && bFeatured) return 1;
      if (aFeatured && bFeatured) return aIdx - bIdx;
      return 0;
    });
  }, [productos, categoria, busqueda]);

  const productCount = (cat) => productos.filter(p => p.categoria === cat).length;

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Categoría</h3>
        <select className="input" value={categoria} onChange={(e) => { setCategoria(e.target.value); }}>
          <option>Todos</option>
          {categorias.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <h3 className="font-semibold mt-6 mb-2">Buscar</h3>
        <input
          className="input"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </aside>
      <div>
        {showCategoryGrid ? (
          <>
            <p className="mb-4 text-sm text-slate-600">Explora nuestras categorías</p>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className="rounded-2xl border border-slate-100 bg-white p-4 text-left hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  <div className="text-2xl mb-2">{categoryEmojis[cat] || "📦"}</div>
                  <p className="text-sm font-bold text-slate-800">{cat}</p>
                  <p className="text-xs text-slate-500 mt-1">{productCount(cat)} productos</p>
                </button>
              ))}
              <button
                onClick={() => { setCategoria("Todos"); setBusqueda("a"); }}
                className="rounded-2xl border-2 border-dashed border-eco-green bg-eco-bg p-4 text-left hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <div className="text-2xl mb-2">🔍</div>
                <p className="text-sm font-bold text-eco-green">Explora todo el Catálogo</p>
                <p className="text-xs text-slate-500 mt-1">{productos.length} productos</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-slate-600">{filtrados.length} productos encontrados</p>
              {categoria !== "Todos" && (
                <button onClick={() => { setCategoria("Todos"); setBusqueda(""); }} className="text-sm text-eco-green font-medium hover:underline">
                  ← Ver categorías
                </button>
              )}
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtrados.map((producto) => (
                <ProductCard key={producto.slug} producto={producto} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
                  }
