const MATERIAL = [
  "Alginato de calcio",
  "Aquacel Extra",
  "Electróbioral antiséptico",
  "Alkacyme jabón enzimático",
  "Terapia larval",
  "Terapia de presión negativa",
  "Tilapia",
  "Hidrocoloides",
  "Safgel",
];

const SERVICES = [
  {
    num: "01",
    title: "Podología General",
    desc: "Tratamiento de callos, durezas, onicomicosis y uñas encarnadas. Higiene y cuidado preventivo con protocolos de enfermería.",
    img: "/podolo1.jpg",
    imgAlt: "Podología general",
    tags: ["Onicocriptosis", "Pie de atleta", "Onicomicosis", "Helomas plantares"],
  },
  {
    num: "02",
    title: "Manejo de Heridas",
    desc: "Todo tipo de heridas de difícil manejo. Curación avanzada con material clínico especializado que no encontrarás en consultorios convencionales.",
    img: "/podo2.jpg",
    imgAlt: "Manejo avanzado de heridas",
    tags: ["Pie diabético", "Úlceras venosas", "Ojo de pescado", "Heridas complejas"],
  },
  {
    num: "03",
    title: "Ortopodología",
    desc: "Plantillas personalizadas, corrección postural y análisis biomecánico del pie para el alivio del dolor crónico y prevención de lesiones.",
    img: "/podo3.jpg",
    imgAlt: "Ortopodología y biomecánica",
    tags: ["Plantillas a medida", "Biomecánica", "Dolor crónico"],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">

      {/* ── ENCABEZADO ── */}
      <div className="text-center px-6 py-12 md:py-20 border-b border-[#E8E6E0]">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-5 h-px bg-[#8B7355]" />
          <span className="text-[0.7rem] text-[#8B7355] tracking-[0.14em] uppercase font-medium">
            Nuestros servicios
          </span>
          <span className="block w-5 h-px bg-[#8B7355]" />
        </div>
        <h2 className="font-['Playfair_Display',serif] text-[1.9rem] md:text-[2.6rem] font-semibold text-[#1a1a18] leading-[1.2] mb-4">
          Atención especializada
          <br />
          para cada{" "}
          <em className="not-italic italic text-[#8B7355]">tipo de herida</em>
        </h2>
        <p className="text-[0.88rem] text-[#9B9B8E] max-w-lg mx-auto leading-[1.7] font-light">
          Enfermero especialista en heridas con formación en podología clínica.
          Material avanzado y seguimiento real en cada caso.
        </p>
      </div>

      {/* ── GRID DE CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E8E6E0] border-b border-[#E8E6E0]">
        {SERVICES.map(({ num, title, desc, img, imgAlt, tags }) => (
          <div key={num} className="group cursor-default overflow-hidden">

            {/* Imagen */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={img}
                alt={imgAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "saturate(0.82) contrast(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a18]/35" />
              <span className="absolute top-4 left-4 text-[0.68rem] text-white/80 tracking-[0.12em] font-medium">
                {num}
              </span>
            </div>

            {/* Cuerpo */}
            <div className="px-6 md:px-7 py-6 bg-[#FAFAF8] group-hover:bg-[#F5F2EA] transition-colors">
              <h3 className="font-['Playfair_Display',serif] text-[1.1rem] text-[#1a1a18] mb-2">
                {title}
              </h3>
              <p className="text-[0.8rem] text-[#9B9B8E] leading-[1.7] font-light mb-4">
                {desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[0.65rem] text-[#8B7355] bg-[#F0EDE6] border border-[#D4C9B8] px-2.5 py-1 rounded-[2px] tracking-[0.06em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/527331099901?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.75rem] text-[#8B7355] tracking-[0.06em] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Agendar consulta →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── FRANJA MATERIAL AVANZADO ── */}
      <div className="bg-[#F5F2EA] border-b border-[#E8E6E0] px-6 md:px-16 py-8 md:py-10">
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-6">
          <div className="md:w-56 flex-shrink-0">
            <h4 className="font-['Playfair_Display',serif] text-[1.05rem] text-[#1a1a18] mb-1">
              Material clínico avanzado
            </h4>
            <p className="text-[0.75rem] text-[#9B9B8E] font-light leading-relaxed">
              Insumos especializados para resultados superiores en heridas complejas.
            </p>
          </div>
          <div className="h-px md:h-10 md:w-px bg-[#D4C9B8] flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {MATERIAL.map((m) => (
              <span
                key={m}
                className="text-[0.7rem] text-[#6B6B60] bg-[#FAFAF8] border border-[#D4C9B8] px-3 py-1.5 rounded-[2px] tracking-[0.04em]"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="bg-[#1a1a18] px-6 md:px-16 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left">
        <p className="font-['Playfair_Display',serif] text-[1.3rem] md:text-[1.7rem] text-[#FAFAF8] font-semibold leading-[1.3]">
          ¿No sabes qué servicio necesitas?{" "}
          <em className="not-italic italic text-[#C4A97D]">Te orientamos sin costo.</em>
        </p>
        <a
          href="https://wa.me/527331099901?text=Hola,%20necesito%20orientación%20sobre%20qué%20servicio%20necesito"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex-shrink-0 bg-[#FAFAF8] text-[#1a1a18] text-[0.76rem] tracking-[0.1em] uppercase font-medium px-8 py-3.5 rounded-[2px] hover:bg-[#F0EDE6] transition-colors"
        >
          Hablar con el especialista →
        </a>
      </div>

    </section>
  );
}