"use client";
import { useState } from "react";

const BRAND_COLORS = [
  "#16a34a","#2563eb","#9333ea","#dc2626","#d97706",
  "#0891b2","#7c3aed","#db2777","#059669","#b45309"
];

function hashColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return BRAND_COLORS[Math.abs(h) % BRAND_COLORS.length];
}

function initials(name) {
  const words = name.trim().split(/\s+/);
  return words.length >= 2 ? (words[0][0] + words[1][0]).toUpperCase() : name.slice(0, 2).toUpperCase();
}

function LogoWithFallback({ cliente }) {
  const [stage, setStage] = useState(0);

  if (stage >= 2) {
    return (
      <div
        style={{ backgroundColor: hashColor(cliente.nombre) }}
        className="flex h-14 w-14 items-center justify-center rounded-xl text-white font-bold text-xl leading-none"
      >
        {initials(cliente.nombre)}
      </div>
    );
  }

  // stage 0: Clearbit — high-quality logos for major brands
  // stage 1: icon.horse — fetches real favicon from company website, never returns a silent globe
  const src =
    stage === 0
      ? `https://logo.clearbit.com/${cliente.dominio}`
      : `https://icon.horse/icon/${cliente.dominio}`;

  return (
    <img
      key={stage}
      src={src}
      alt={cliente.nombre}
      className="h-14 w-14 object-contain"
      onError={() => setStage((s) => s + 1)}
    />
  );
}

export default function ClienteGrid({ clientes }) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
      {clientes.map((cliente) => (
        <div
          key={cliente.nombre}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-5 shadow-sm"
        >
          <LogoWithFallback cliente={cliente} />
          <span className="text-center text-xs font-medium text-slate-700 leading-tight">
            {cliente.nombre}
          </span>
        </div>
      ))}
    </div>
  );
}
