"use client";

const TOP_TESTIMONIALS = [
  {
    quote:
      "Tengo diabetes hace 12 años y nadie me había explicado cómo cuidar mis pies tan bien. La herida que traía desde hace meses cerró en menos de tres semanas. Ya no me duele caminar.",
    name: "Rosa María T.",
    detail: "63 años · Guadalajara",
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

const Stars = ({ dark = false }: { dark?: boolean }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={`text-[14px] ${dark ? "text-[#C4A97D]" : "text-[#C4A97D]"}`}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif] py-16 md:py-24">
      
      {/* Contenedor central alineado con el resto del sitio */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── ENCABEZADO ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#8B7355]/40" />
            <span className="text-[0.7rem] text-[#8B7355] tracking-[0.2em] uppercase font-bold">
              Testimonios
            </span>
            <span className="block w-8 h-px bg-[#8B7355]/40" />
          </div>
          <h2 className="font-['Playfair_Display',serif] text-[2.2rem] md:text-[3rem] font-semibold text-[#1a1a18] leading-[1.1] mb-4">
            Lo que dicen <em className="not-italic italic text-[#8B7355]">nuestros pacientes</em>
          </h2>
          <p className="text-[0.9rem] text-[#6B6B60] font-light max-w-lg mx-auto">
            Casos reales. Recuperación real. La tranquilidad de estar en buenas manos.
          </p>
        </div>

        {/* ── FILA SUPERIOR: 3 CARDS INDIVIDUALES ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {TOP_TESTIMONIALS.map(({ quote, name, detail, initials, diagnosis, featured }) => (
            <div
              key={name}
              className={`flex flex-col justify-between p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border ${
                featured 
                  ? "bg-[#1a1a18] border-[#1a1a18] transform md:-translate-y-2 transition-transform" 
                  : "bg-white border-[#E8E6E0]"
              }`}
            >
              <div>
                <Stars />
                <p
                  className={`font-['Playfair_Display',serif] text-[1.05rem] leading-[1.7] italic mb-6 ${
                    featured ? "text-[#F0EDE6]" : "text-[#2a2a28]"
                  }`}
                >
                  "{quote}"
                </p>
              </div>

              <div>
                <div className={`h-px w-full mb-6 ${featured ? "bg-white/10" : "bg-[#E8E6E0]"}`} />
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-['Playfair_Display',serif] text-[1rem] font-semibold ${
                      featured
                        ? "bg-white/10 text-[#C4A97D]"
                        : "bg-[#FAFAF8] border border-[#E8E6E0] text-[#8B7355]"
                    }`}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className={`text-[0.85rem] font-bold ${featured ? "text-[#FAFAF8]" : "text-[#1a1a18]"}`}>
                      {name}
                    </p>
                    <p className={`text-[0.7rem] font-light mb-1.5 ${featured ? "text-white/50" : "text-[#9B9B8E]"}`}>
                      {detail}
                    </p>
                    <span
                      className={`inline-block text-[0.65rem] px-2.5 py-1 rounded-[4px] font-medium ${
                        featured
                          ? "text-[#C4A97D] bg-[#C4A97D]/10"
                          : "text-[#8B7355] bg-[#F5F2EA]"
                      }`}
                    >
                      {diagnosis}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FILA INFERIOR: Testimonial grande + Métricas ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">

          {/* Testimonio grande (Ocupa 3 columnas) */}
          <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#E8E6E0] flex flex-col justify-center">
            <Stars />
            <p className="font-['Playfair_Display',serif] text-[1.2rem] md:text-[1.4rem] leading-[1.7] italic text-[#2a2a28] mb-8">
              <span className="text-[3rem] text-[#D4C9B8] leading-none align-[-0.8rem] mr-2">"</span>
              Llevaba años con hongos en las uñas y probé de todo. Lo que me aplicaron aquí en dos meses hizo lo que ninguna crema de farmacia pudo en años. Ya veo mis uñas sanas de nuevo.
            </p>
            <div className="h-px bg-[#E8E6E0] mb-6" />
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FAFAF8] border border-[#E8E6E0] flex items-center justify-center text-[#8B7355] font-['Playfair_Display',serif] font-bold text-[1rem] flex-shrink-0">
                AP
              </div>
              <div>
                <p className="text-[0.85rem] font-bold text-[#1a1a18]">Alejandra P.</p>
                <p className="text-[0.7rem] text-[#9B9B8E] font-light mb-1">28 años · Cuernavaca</p>
                <span className="inline-block text-[0.65rem] text-[#8B7355] bg-[#F5F2EA] px-2.5 py-1 rounded-[4px] font-medium">
                  Onicomicosis
                </span>
              </div>
            </div>
          </div>

          {/* Métricas (Ocupa 2 columnas) */}
          <div className="md:col-span-2 bg-[#F5F2EA] p-8 md:p-12 rounded-2xl flex flex-col justify-center gap-8 border border-[#E8E6E0]">
            <div>
              <div className="flex items-end gap-3 mb-2">
                <span className="font-['Playfair_Display',serif] text-[3.5rem] text-[#1a1a18] font-bold leading-none">4.9</span>
                <div className="flex gap-1 pb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-[#C4A97D] text-[1.2rem]">★</span>
                  ))}
                </div>
              </div>
              <p className="text-[0.7rem] text-[#8B7355] uppercase tracking-[0.15em] font-bold">
                Calificación promedio
              </p>
            </div>

            <div className="h-px bg-[#D4C9B8]/40" />
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#6B6B60"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <p className="text-[0.7rem] text-[#6B6B60] font-medium tracking-[0.05em]">
                Reseñas verificadas en Google
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}