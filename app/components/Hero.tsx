export default function Hero() {
  return (
    <>
      {/* Google Fonts — añade esto también en tu layout.tsx o globals.css */}
      {/* @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap'); */}

      <section className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">

        {/* ── HERO GRID ── */}
        <div className="grid md:grid-cols-2 min-h-[88vh]">

          {/* Columna izquierda */}
          <div className="relative flex flex-col justify-center px-8 md:px-14 py-16 md:py-24">

            {/* Separador vertical derecho */}
            <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#D4C9B8] to-transparent" />

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-[#F0EDE6] border border-[#D4C9B8] text-[#8B7355] text-[0.7rem] tracking-[0.12em] uppercase px-4 py-1.5 rounded-[2px] mb-8 w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]" />
              Enfermería especializada · Protocolos clínicos
            </span>

            {/* Título */}
            <h1 className="font-['Playfair_Display',serif] text-[3rem] md:text-[3.4rem] lg:text-[3.8rem] leading-[1.1] font-semibold text-[#1a1a18] mb-6">
              Cuidado{" "}
              <em className="not-italic italic text-[#8B7355]">preciso</em>
              <br />
              para la salud
              <br />
              de tus pies
            </h1>

            {/* Subtítulo */}
            <p className="text-[1rem] text-[#6B6B60] leading-[1.75] max-w-[400px] mb-10 font-light">
              Olvídate de los riesgos en los salones de belleza. Recibe
              asistencia especializada con protocolos de enfermería para
              higiene preventiva y manejo de heridas.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20agendar%20una%20valoración"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a1a18] text-[#FAFAF8] px-8 py-3.5 text-[0.8rem] tracking-[0.08em] uppercase font-medium rounded-[2px] hover:bg-[#333] transition-colors text-center"
              >
                Agendar Valoración
              </a>
              <a
                href="#servicios"
                className="border border-[#D4C9B8] text-[#1a1a18] px-8 py-3.5 text-[0.8rem] tracking-[0.08em] uppercase font-medium rounded-[2px] hover:bg-[#F5F2EA] transition-colors text-center"
              >
                Ver Servicios
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-[#E8E6E0]">
              {[
                { num: "2,400+", label: "Pacientes atendidos" },
                { num: "8 años", label: "Experiencia clínica" },
                { num: "100%", label: "Material estéril" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-['Playfair_Display',serif] text-[1.8rem] text-[#1a1a18] font-semibold leading-none">
                    {num}
                  </div>
                  <div className="text-[0.72rem] text-[#9B9B8E] uppercase tracking-[0.08em] mt-1.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — imagen */}
          <div className="relative overflow-hidden bg-[#F0EDE6] min-h-[480px] md:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80"
              alt="Procedimiento podológico clínico profesional"
              className="w-full h-full object-cover"
              style={{ filter: "contrast(1.02) saturate(0.92)" }}
            />
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1a1a18]/25" />

            {/* Floating card */}
            <div className="absolute bottom-8 -left-4 md:left-auto md:-left-6 bg-[#FAFAF8] border border-[#E8E6E0] px-5 py-3.5 rounded-[4px] flex items-center gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
              <div className="w-9 h-9 bg-[#F0EDE6] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[0.88rem] font-medium text-[#1a1a18]">Atención certificada</p>
                <p className="text-[0.72rem] text-[#9B9B8E]">Normas NOM-087 · Material desechable</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── TRUST BAR ── */}
        <div className="bg-[#1a1a18] flex flex-wrap justify-center gap-x-10 gap-y-3 px-8 py-4">
          {[
            {
              label: "Esterilización autoclave",
              icon: (
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              ),
            },
            {
              label: "Citas en 24 hrs",
              icon: (
                <>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </>
              ),
            },
            {
              label: "Atención domiciliaria",
              icon: (
                <>
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </>
              ),
            },
          ].map(({ label, icon }, i, arr) => (
            <div key={label} className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[#A8A89E] text-[0.72rem] tracking-[0.08em] uppercase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8A89E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icon}
                </svg>
                {label}
              </div>
              {i < arr.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-[#5A5A52]" />
              )}
            </div>
          ))}
        </div>

      </section>
    </>
  );
}