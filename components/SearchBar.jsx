"use client";

export default function SearchBar({ value, onChange, placeholder = "Buscar..." }) {
  return <input className="input" value={value} onChange={onChange} placeholder={placeholder} />;
}
