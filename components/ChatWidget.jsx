"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(true);
  const phone = "56997582936";
  const message = "Hola, me gustaría cotizar productos promocionales.";
  const waUrl = 'https://wa.me/' + phone + '?text=' + encodeURIComponent("Hola, me gustaría cotizar productos promocionales.");

  return (
    <>
      {/* Floating WhatsApp button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat por WhatsApp"
        className="fixed bottom-20 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#9CC33B] text-white shadow-lg hover:scale-105 transition-transform"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.907 15.907 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.31 22.61c-.39 1.1-2.294 2.102-3.164 2.178-.794.068-1.788.098-2.886-.182a26.535 26.535 0 01-2.616-.966c-4.604-1.99-7.61-6.65-7.84-6.96-.232-.31-1.882-2.504-1.882-4.776s1.192-3.39 1.614-3.854c.424-.462.922-.578 1.23-.578.306 0 .614.004.882.016.284.012.664-.108.94.716.31 1.022 1.054 3.504 1.148 3.758.092.254.154.548.032.882-.124.334-.186.542-.37.834-.184.294-.388.656-.554.88-.184.248-.376.516-.162.94.216.424 1.254 2.068 2.694 3.35 1.85 1.648 3.412 2.156 3.892 2.396.48.242.76.204 1.04-.122.278-.324 1.196-1.396 1.516-1.876.318-.48.636-.396 1.072-.238.434.16 2.762 1.302 3.236 1.538.476.238.792.356.91.548.116.192.116 1.114-.274 2.214z"/>
        </svg>
      </button>

      {/* Chat popup */}
      {open && (
        <div className="fixed bottom-36 right-6 z-50 w-80 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-[#9CC33B] px-5 py-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-lg">
              E
            </div>
            <div>
              <p className="text-white font-bold text-sm">EcoGift Chile</p>
              <p className="text-white/80 text-xs">Normalmente responde en minutos</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/80 hover:text-white"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-5 bg-slate-50">
            <div className="bg-white rounded-xl p-3 shadow-sm text-sm text-slate-700 leading-relaxed">
              ¡Hola! Bienvenido a EcoGift. ¿En qué podemos ayudarte hoy?
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 pb-5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#9CC33B] py-3 text-white font-bold text-sm hover:bg-[#8AB332] transition-colors"
            >
              Iniciar conversación
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
