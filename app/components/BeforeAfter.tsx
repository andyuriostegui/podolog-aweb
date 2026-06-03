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
    pills: ["Hidrocoloides", "Electróbioral", "Alkacyme", "Terapia compresiva"],
    stat1: { value: "10 sem",       label: "Tiempo de cierre" },
    stat2: { value: "Sin recidiva", label: "A 6 meses"        },
    before: "/cases/case3.jpeg",
    after:  "/cases/case3-1.jpeg",
    tab: "Caso 02 · Úlcera venosa",
  },
  {
    num: "Caso 03",
    title: "Larvaterapia",
    diagnosis: "Herida crónica · Desbridamiento biológico",
    desc: "Aplicación de larvas estériles para desbridamiento de tejido necrótico. Técnica avanzada con resultados superiores al desbridamiento quirúrgico convencional.",
    pills: ["Terapia larval", "Material estéril", "Seguimiento semanal"],
    stat1: { value: "2 sem",  label: "Desbridamiento" },
    stat2: { value: "100%",   label: "Tejido limpio"   },
    before: "/cases/case2.jpeg",
    after:  "/cases/case2-1.jpeg",
    tab: "Caso 03 · Larvaterapia",
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
      className="relative w-full h-full min-h-[320px] sm:min-h-[400px] overflow-hidden cursor-col-resize select-none bg-[#0e0e0e]"
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
      <span className="absolute top-3 left-3 z-10 text-[0.58rem] text-white/90 tracking-[0.12em] uppercase font-bold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-[3px]">Antes</span>
      <span className="absolute top-3 right-3 z-10 text-[0.58rem] text-white/90 tracking-[0.12em] uppercase font-bold bg-[#8B7355]/80 backdrop-blur-sm px-2.5 py-1 rounded-[3px]">Después</span>
      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-white/80"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center gap-0.5">
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="2.5" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="2.5" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[0.54rem] text-white/50 tracking-[0.08em] uppercase pointer-events-none whitespace-nowrap">← desliza →</p>
    </div>
  );
}

function BlurGate({ onReveal }: { onReveal: () => void }) {
  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2.5 cursor-pointer"
      style={{ backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", background: "rgba(26,26,24,0.55)" }}
      onClick={onReveal}
    >
      <div className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FAFAF8" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      </div>
      <p className="font-['Playfair_Display',serif] text-[0.95rem] text-white font-semibold">Contenido médico</p>
      <p className="text-[0.7rem] text-white/55 text-center max-w-[180px] leading-[1.45] font-light">
        Imágenes clínicas reales de heridas y evolución.
      </p>
      <button className="mt-1 bg-white text-[#1a1a18] text-[0.62rem] tracking-[0.12em] uppercase font-bold px-5 py-2 rounded-[3px]">
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
    <section id="casos" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">

      {/* ── ENCABEZADO ── */}
      <div className="text-center px-6 py-12 md:py-20 border-b border-[#E8E6E0]">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-5 h-px bg-[#8B7355]" />
          <span className="text-[0.68rem] text-[#8B7355] tracking-[0.14em] uppercase font-medium">Evolución clínica</span>
          <span className="block w-5 h-px bg-[#8B7355]" />
        </div>
        <h2 className="font-['Playfair_Display',serif] text-[1.9rem] md:text-[2.6rem] font-semibold text-[#1a1a18] leading-[1.2] mb-2">
          Casos de <em className="not-italic italic text-[#8B7355]">éxito</em>
        </h2>
        <p className="text-[0.85rem] text-[#9B9B8E] font-light max-w-md mx-auto leading-relaxed">
          Resultados reales de nuestros protocolos de enfermería avanzada. Desliza para ver la recuperación.
        </p>
      </div>

      {/* ── TABS ── */}
      <div className="flex overflow-x-auto border-b border-[#E8E6E0]">
        {CASES.map((cas, i) => (
          <button
            key={i}
            onClick={() => switchCase(i)}
            className={`flex-1 min-w-[160px] px-4 py-3.5 text-[0.68rem] tracking-[0.08em] uppercase font-medium whitespace-nowrap border-b-2 transition-colors ${
              active === i
                ? "text-[#1a1a18] border-[#8B7355] bg-[#FAFAF8]"
                : "text-[#9B9B8E] border-transparent hover:text-[#1a1a18]"
            }`}
          >
            {cas.tab}
          </button>
        ))}
      </div>

      {/* ── GRID: slider + info ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#E8E6E0]">

        {/* Slider */}
        <div className="relative border-b lg:border-b-0 lg:border-r border-[#E8E6E0]">
          {blurred && <BlurGate onReveal={() => setBlurred(false)} />}
          <CompareSlider before={c.before} after={c.after} />
        </div>

        {/* Panel info */}
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10 bg-[#FAFAF8]">
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-[0.62rem] text-[#C4B89A] tracking-[0.14em] uppercase mb-1 font-medium">{c.num}</p>
              <h3 className="font-['Playfair_Display',serif] text-[1.2rem] md:text-[1.4rem] text-[#1a1a18] leading-[1.3]">
                {c.title}
              </h3>
            </div>
            <span className="inline-block text-[0.62rem] text-[#8B7355] bg-[#F0EDE6] border border-[#D4C9B8] px-2.5 py-1 rounded-[2px] w-max">
              {c.diagnosis}
            </span>
            <div className="h-px bg-[#E8E6E0]" />
            <p className="text-[0.8rem] text-[#6B6B60] leading-[1.75] font-light">{c.desc}</p>
            <div>
              <p className="text-[0.6rem] text-[#9B9B8E] uppercase tracking-[0.1em] mb-2 font-medium">Protocolo · Material</p>
              <div className="flex flex-wrap gap-1.5">
                {c.pills.map((p) => (
                  <span key={p} className="text-[0.65rem] text-[#6B6B60] bg-[#F5F2EA] border border-[#E8E6E0] px-2.5 py-1 rounded-[2px]">{p}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#E8E6E0]">
            <div className="grid grid-cols-2 gap-2.5">
              {[c.stat1, c.stat2].map(({ value, label }) => (
                <div key={label} className="bg-[#F5F2EA] px-3 py-2.5 rounded-[2px]">
                  <p className="font-['Playfair_Display',serif] text-[1.1rem] text-[#1a1a18] font-semibold">{value}</p>
                  <p className="text-[0.58rem] text-[#9B9B8E] uppercase tracking-[0.08em] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <button
                onClick={() => setBlurred((b) => !b)}
                className="flex items-center gap-1.5 text-[0.65rem] text-[#9B9B8E] hover:text-[#6B6B60] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  {blurred
                    ? <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>
                    : <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/><line x1="1" y1="1" x2="23" y2="23"/></>
                  }
                </svg>
                {blurred ? "Revelar imágenes" : "Ocultar imágenes"}
              </button>

              <a
                href="https://wa.me/527331099901?text=Hola,%20vi%20los%20casos%20clínicos%20y%20me%20interesa%20una%20valoración"
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto text-center bg-[#1a1a18] text-[#FAFAF8] text-[0.72rem] tracking-[0.1em] uppercase font-medium px-6 py-2.5 rounded-[2px] hover:bg-[#2e2e2b] transition-colors"
              >
                Agendar cita →
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}