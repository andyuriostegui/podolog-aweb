"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const CASES = [
  {
    num: "Caso 01",
    title: "Pie diabético con úlcera plantar",
    diagnosis: "Pie diabético · Grado 2",
    desc: "Paciente masculino, 67 años. Úlcera plantar de 4 meses sin respuesta previa. Curaciones semanales a domicilio.",
    pills: ["Alginato de calcio", "Aquacel Extra", "Safgel", "Curación semanal"],
    stat1: { value: "6 sem",  label: "Tiempo de cierre" },
    stat2: { value: "100%",   label: "Cierre total"     },
    before: "/cases/case1-2.jpeg",
    after:  "/cases/case1.jpeg",
    tab: "Caso 01 · Pie diabético",
  },
  {
    num: "Caso 02",
    title: "Úlcera venosa en pierna",
    diagnosis: "Úlcera venosa crónica",
    desc: "Paciente femenina, 71 años. Úlcera de 8 meses en pierna izquierda. Hidrocoloides y terapia compresiva quincenal.",
    pills: ["Hidrocoloides", "Electro Boral", "Alkacyme", "Terapia compresiva"],
    stat1: { value: "10 sem",       label: "Tiempo de cierre" },
    stat2: { value: "Sin recidiva", label: "A 6 meses"        },
    before: "/cases/case3.jpeg",
    after:  "/cases/case3-1.jpeg",
    tab: "Caso 02 · Úlcera venosa",
  },
  {
    num: "Caso 03",
    title: "Onicocriptosis bilateral",
    diagnosis: "Uña encarnada · Grado II",
    desc: "Paciente masculino, 29 años. Infección recurrente en ambos pulgares. Matricectomía parcial con asepsia estricta.",
    pills: ["Matricectomía parcial", "Material desechable", "Seguimiento 4 sem"],
    stat1: { value: "1 sesión", label: "Resolución"   },
    stat2: { value: "0",        label: "Recurrencias" },
    before: "/cases/case2.jpeg",
    after:  "/cases/case2-1.jpeg",
    tab: "Caso 03 · Onicocriptosis",
  },
];

function CompareSlider({ before, after }: { before: string; after: string }) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pct, setPct] = useState(50);

  const move = useCallback((clientX: number) => {
    if (!wrapRef.current) return;
    const { left, width } = wrapRef.current.getBoundingClientRect();
    setPct(Math.min(100, Math.max(0, ((clientX - left) / width) * 100)));
  }, []);

  useEffect(() => {
    const onMove  = (e: MouseEvent) => { if (dragging.current) move(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging.current) move(e.touches[0].clientX); };
    const onUp    = () => { dragging.current = false; };
    window.addEventListener("mousemove",  onMove);
    window.addEventListener("touchmove",  onTouch, { passive: true });
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("touchend",   onUp);
    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("touchmove",  onTouch);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("touchend",   onUp);
    };
  }, [move]);

  const fullW = wrapRef.current?.offsetWidth ?? 360;

  return (
    <div
      ref={wrapRef}
      className="relative w-full h-full min-h-[400px] overflow-hidden cursor-col-resize select-none bg-[#0e0e0e]"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
    >
      <img src={after} alt="Después"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <img src={before} alt="Antes"
          className="absolute inset-0 h-full object-cover"
          style={{ width: fullW, minWidth: fullW }}
          draggable={false}
        />
      </div>
      <span className="absolute top-4 left-4 z-10 text-[0.6rem] text-white/90 tracking-[0.15em] uppercase font-bold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-[4px]">Antes</span>
      <span className="absolute top-4 right-4 z-10 text-[0.6rem] text-white/90 tracking-[0.15em] uppercase font-bold bg-[#8B7355]/80 backdrop-blur-sm px-3 py-1 rounded-[4px]">Después</span>
      <div className="absolute top-0 bottom-0 z-20 w-[2px] bg-white/80 shadow-[0_0_10px_rgba(0,0,0,0.5)]" style={{ left: `${pct}%`, transform: "translateX(-50%)" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center gap-1 transition-transform hover:scale-110">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[0.6rem] text-white/60 tracking-[0.1em] uppercase font-medium pointer-events-none whitespace-nowrap bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">← desliza →</p>
    </div>
  );
}

function BlurGate({ onReveal }: { onReveal: () => void }) {
  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all hover:bg-black/50"
      style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", background: "rgba(26,26,24,0.6)" }}
      onClick={onReveal}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      </div>
      <p className="font-['Playfair_Display',serif] text-[1.1rem] text-white font-semibold tracking-wide">Contenido médico</p>
      <p className="text-[0.75rem] text-white/70 text-center max-w-[200px] leading-[1.5] font-light">
        Imágenes clínicas reales de heridas y evolución.
      </p>
      <button className="mt-2 bg-white text-[#1a1a18] text-[0.65rem] tracking-[0.15em] uppercase font-bold px-6 py-2.5 rounded-[4px] hover:scale-105 transition-transform">
        Ver caso clínico
      </button>
    </div>
  );
}

export default function BeforeAfter() {
  const [active,  setActive]  = useState(0);
  const [blurred, setBlurred] = useState(true);
  const c = CASES[active];

  const switchCase = (i: number) => { setActive(i); setBlurred(true); };

  return (
    <section id="casos" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif] py-16 md:py-24">
      
      {/* Contenedor central (El secreto del minimalismo) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#8B7355]/40" />
            <span className="text-[0.7rem] text-[#8B7355] tracking-[0.2em] uppercase font-bold">Evolución Clínica</span>
            <span className="block w-8 h-px bg-[#8B7355]/40" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-[2.2rem] md:text-[3rem] font-semibold text-[#1a1a18] leading-[1.1] mb-4">
            Casos de <em className="not-italic italic text-[#8B7355]">éxito</em>
          </h2>
          <p className="text-[0.9rem] text-[#6B6B60] font-light max-w-lg mx-auto">
            Resultados reales de nuestros protocolos de enfermería avanzada. Desliza para ver la recuperación.
          </p>
        </div>

        {/* Tarjeta contenedora de todo el interactivo */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E8E6E0] overflow-hidden">
          
          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-[#E8E6E0] bg-[#FAFAF8]/50 scrollbar-hide">
            {CASES.map((cas, i) => (
              <button
                key={i}
                onClick={() => switchCase(i)}
                className={`flex-1 min-w-[200px] px-6 py-4 text-[0.75rem] tracking-[0.1em] uppercase font-bold whitespace-nowrap border-b-2 transition-all ${
                  active === i 
                    ? "text-[#1a1a18] border-[#8B7355] bg-white" 
                    : "text-[#9B9B8E] border-transparent hover:text-[#6B6B60] hover:bg-white/50"
                }`}
              >
                {cas.tab}
              </button>
            ))}
          </div>

          {/* Grid Minimalista (Mitad y Mitad) */}
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Slider */}
            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-auto border-b lg:border-b-0 lg:border-r border-[#E8E6E0]">
              {blurred && <BlurGate onReveal={() => setBlurred(false)} />}
              <CompareSlider before={c.before} after={c.after} />
            </div>

            {/* Panel de Info - Con buen respiro (padding) */}
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 bg-white">
              <div className="flex flex-col h-full justify-between">
                
                {/* Bloque Superior */}
                <div>
                  <p className="text-[0.7rem] text-[#C4B89A] tracking-[0.2em] uppercase mb-2 font-bold">{c.num}</p>
                  <h3 className="font-['Playfair_Display',serif] text-[1.4rem] md:text-[1.6rem] text-[#1a1a18] leading-[1.3] mb-4">
                    {c.title}
                  </h3>
                  
                  <span className="inline-block text-[0.7rem] text-[#8B7355] bg-[#FAFAF8] border border-[#E8E6E0] px-3 py-1.5 rounded-[4px] font-semibold mb-6">
                    {c.diagnosis}
                  </span>
                  
                  <p className="text-[0.85rem] text-[#6B6B60] leading-[1.8] font-light mb-6">
                    {c.desc}
                  </p>
                  
                  <div>
                    <p className="text-[0.65rem] text-[#9B9B8E] uppercase tracking-[0.15em] mb-3 font-bold">Protocolo / Material</p>
                    <div className="flex flex-wrap gap-2">
                      {c.pills.map((p) => (
                        <span key={p} className="text-[0.7rem] text-[#1a1a18] bg-[#F5F2EA] px-3 py-1.5 rounded-[4px] font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bloque Inferior (Estadísticas y CTA) */}
                <div className="mt-8 pt-8 border-t border-[#E8E6E0]">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[c.stat1, c.stat2].map(({ value, label }) => (
                      <div key={label} className="bg-[#FAFAF8] border border-[#E8E6E0] px-4 py-3 rounded-[8px]">
                        <p className="font-['Playfair_Display',serif] text-[1.2rem] text-[#1a1a18] font-semibold">{value}</p>
                        <p className="text-[0.65rem] text-[#8B7355] uppercase tracking-[0.1em] mt-1 font-bold">{label}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      onClick={() => setBlurred((b) => !b)}
                      className="flex items-center gap-2 text-[0.7rem] text-[#9B9B8E] hover:text-[#1a1a18] transition-colors font-bold uppercase tracking-[0.1em]"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {blurred
                          ? <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                          : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><line x1="1" y1="1" x2="23" y2="23"/></>
                        }
                      </svg>
                      {blurred ? "Revelar imágenes" : "Ocultar imágenes"}
                    </button>
                    
                    <a
                      href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20una%20valoración%20clínica"
                      target="_blank" rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center text-[0.7rem] text-white bg-[#1a1a18] hover:bg-[#8B7355] tracking-[0.15em] uppercase font-bold px-6 py-3 rounded-[4px] transition-colors"
                    >
                      Agendar Cita
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}