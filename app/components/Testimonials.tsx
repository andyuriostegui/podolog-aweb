"use client";

const TOP_TESTIMONIALS = [
  {
    quote:
      "Tengo diabetes hace 12 años y nadie me había explicado cómo cuidar mis pies tan bien. La herida que traía desde hace meses cerró en menos de tres semanas. Ya no me duele caminar.",
    name: "Rosa María T.",
    detail: "63 años · Iguala",
    initials: "RM",
    diagnosis: "Pie diabético",
    featured: false,
  },
  {
    quote:
      "Fui a varios salones de belleza a que me quitaran la uña encarnada y cada vez me infectaba más. Aquí lo resolvieron de una sola vez, con jeringas nuevas, guantes, todo limpio. Ojalá hubiera venido antes.",
    name: "Jorge Luis M.",
    detail: "34 años · Taxco",
    initials: "JL",
    diagnosis: "Onicocriptosis",
    featured: true,
  },
  {
    quote:
      "Mi mamá tiene una úlcera venosa en la pierna desde hace un año. Nos atendieron a domicilio, vinieron cada semana y la evolución fue impresionante. Muy profesionales y con mucha paciencia.",
    name: "Carmen G.",
    detail: "41 años · Iguala",
    initials: "CG",
    diagnosis: "Úlcera venosa",
    featured: false,
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="text-[#C4A97D] text-[13px]">★</span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">

      {/* ── ENCABEZADO ── */}
      <div className="text-center px-6 py-12 md:py-20 border-b border-[#E8E6E0]">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="block w-5 h-px bg-[#8B7355]" />
          <span className="text-[0.68rem] text-[#8B7355] tracking-[0.14em] uppercase font-medium">Testimonios</span>
          <span className="block w-5 h-px bg-[#8B7355]" />
        </div>
        <h2 className="font-['Playfair_Display',serif] text-[1.9rem] md:text-[2.6rem] font-semibold text-[#1a1a18] leading-[1.2] mb-2">
          Lo que dicen{" "}
          <em className="not-italic italic text-[#8B7355]">nuestros pacientes</em>
        </h2>
        <p className="text-[0.85rem] text-[#9B9B8E] font-light max-w-md mx-auto leading-relaxed">
          Casos reales. Recuperación real.
        </p>
      </div>

      {/* ── FILA SUPERIOR: 3 CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E6E0] border-b border-[#E8E6E0]">
        {TOP_TESTIMONIALS.map(({ quote, name, detail, initials, diagnosis, featured }) => (
          <div
            key={name}
            className={`flex flex-col justify-between p-7 md:p-9 ${
              featured ? "bg-[#1a1a18]" : "bg-[#FAFAF8]"
            }`}
          >
            <div>
              <Stars />
              <p className={`font-['Playfair_Display',serif] text-[0.95rem] md:text-[1rem] leading-[1.7] italic flex-1 ${
                featured ? "text-[#F0EDE6]" : "text-[#2a2a28]"
              }`}>
                "{quote}"
              </p>
            </div>
            <div>
              <div className={`h-px my-5 ${featured ? "bg-white/10" : "bg-[#E8E6E0]"}`} />
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-['Playfair_Display',serif] text-[0.9rem] font-semibold ${
                  featured ? "bg-white/10 text-[#C4A97D]" : "bg-[#F0EDE6] text-[#8B7355]"
                }`}>
                  {initials}
                </div>
                <div>
                  <p className={`text-[0.82rem] font-medium ${featured ? "text-[#FAFAF8]" : "text-[#1a1a18]"}`}>{name}</p>
                  <p className={`text-[0.7rem] font-light mb-1 ${featured ? "text-white/45" : "text-[#9B9B8E]"}`}>{detail}</p>
                  <span className={`inline-block text-[0.6rem] px-2 py-0.5 rounded-[2px] border ${
                    featured
                      ? "text-[#C4A97D] bg-[rgba(196,169,125,0.12)] border-[rgba(196,169,125,0.3)]"
                      : "text-[#8B7355] bg-[#F0EDE6] border-[#D4C9B8]"
                  }`}>
                    {diagnosis}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── FILA INFERIOR: Testimonio largo + Métricas ── */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] divide-y md:divide-y-0 md:divide-x divide-[#E8E6E0] border-b border-[#E8E6E0]">

        {/* Testimonio largo */}
        <div className="flex flex-col justify-between p-7 md:p-12 bg-[#FAFAF8]">
          <Stars />
          <p className="font-['Playfair_Display',serif] text-[1.05rem] md:text-[1.2rem] leading-[1.75] italic text-[#2a2a28] flex-1">
            <span className="text-[2.5rem] text-[#D4C9B8] leading-none align-[-0.5rem] mr-1">"</span>
            Llevaba años con hongos en las uñas y probé de todo. Lo que me
            aplicaron aquí en dos meses hizo lo que ninguna crema de farmacia
            pudo en años. Ya veo mis uñas sanas de nuevo.
          </p>
          <div>
            <div className="h-px bg-[#E8E6E0] my-5" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F0EDE6] flex items-center justify-center text-[#8B7355] font-['Playfair_Display',serif] font-semibold text-[0.9rem] flex-shrink-0">
                AP
              </div>
              <div>
                <p className="text-[0.82rem] font-medium text-[#1a1a18]">Alejandra P.</p>
                <p className="text-[0.7rem] text-[#9B9B8E] font-light mb-1">28 años · Cuernavaca</p>
                <span className="inline-block text-[0.6rem] text-[#8B7355] bg-[#F0EDE6] border border-[#D4C9B8] px-2 py-0.5 rounded-[2px]">
                  Onicomicosis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas */}
        <div className="bg-[#F5F2EA] flex flex-col justify-center gap-6 p-7 md:p-10">
          <div>
            <div className="font-['Playfair_Display',serif] text-[3.2rem] text-[#1a1a18] font-semibold leading-none mb-1">
              4.9
            </div>
            <div className="flex gap-0.5 mb-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#C4A97D] text-[1rem]">★</span>
              ))}
            </div>
            <p className="text-[0.68rem] text-[#9B9B8E] uppercase tracking-[0.1em]">
              Calificación promedio
            </p>
          </div>

          <div className="h-px bg-[#D4C9B8]" />

          <div>
            <div className="font-['Playfair_Display',serif] text-[2.2rem] text-[#1a1a18] font-semibold leading-none mb-1">
              +120
            </div>
            <p className="text-[0.68rem] text-[#9B9B8E] uppercase tracking-[0.1em]">
              Pacientes atendidos
            </p>
          </div>

          <div className="h-px bg-[#D4C9B8]" />

          <p className="text-[0.68rem] text-[#9B9B8E] font-light leading-relaxed">
            Reseñas verificadas · Google Maps
          </p>
        </div>
      </div>

    </section>
  );
}