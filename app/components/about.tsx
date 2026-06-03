export default function About() {
  return (
    <section id="nosotros" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">

        {/* ── IMAGEN IZQUIERDA ── */}
        <div className="relative overflow-hidden bg-[#F0EDE6] min-h-[320px] md:min-h-0">
          <img
            src="/img1.png"
            alt="Paciente aliviada después de tratamiento podológico"
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.88) contrast(1.03)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#FAFAF8] hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8]/40 to-transparent md:hidden" />

          {/* Floating badge */}
          <div className="absolute bottom-5 right-4 md:bottom-8 md:right-6 bg-[#FAFAF8] border border-[#E8E6E0] px-3 py-2.5 md:px-4 md:py-3 rounded-[4px] flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.07)]">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-[#F0EDE6] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </div>
            <div>
              <p className="text-[0.78rem] font-medium text-[#1a1a18]">Tu bienestar, nuestra misión</p>
              <p className="text-[0.68rem] text-[#9B9B8E]">Cuidado con enfoque humano</p>
            </div>
          </div>
        </div>

        {/* ── CONTENIDO DERECHO ── */}
        <div className="flex flex-col justify-center px-7 py-10 md:px-16 md:py-24 border-t md:border-t-0 md:border-l border-[#E8E6E0]">

          {/* Tag */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-6 h-px bg-[#8B7355]" />
            <span className="text-[0.68rem] text-[#8B7355] tracking-[0.14em] uppercase font-medium">
              Acerca de nosotros
            </span>
          </div>

          {/* Título */}
          <h2 className="font-['Playfair_Display',serif] text-[1.8rem] md:text-[2.5rem] leading-[1.2] font-semibold text-[#1a1a18] mb-5">
            Especialistas en heridas
            <br />
            con enfoque{" "}
            <em className="not-italic italic text-[#8B7355]">clínico y humano</em>
          </h2>

          {/* Párrafos */}
          <p className="text-[0.88rem] md:text-[0.92rem] text-[#6B6B60] leading-[1.85] text-justify font-light mb-3">
            Somos un consultorio especializado en el manejo avanzado de heridas
            complicadas y cuidado podológico. Nuestro equipo combina material
            médico de vanguardia con un trato cercano y personalizado.
          </p>
          <p className="text-[0.88rem] md:text-[0.92rem] text-[#6B6B60] leading-[1.85] text-justify font-light mb-7">
            A diferencia de los salones de belleza convencionales, trabajamos con
            material 100% estéril y desechable, garantizando tu seguridad en cada
            procedimiento. Atendemos desde tu hogar o en nuestra clínica.
          </p>

          {/* Valores */}
          <div className="flex flex-col border-t border-b border-[#E8E6E0] mb-7">
            {[
              {
                title: "Seguridad clínica garantizada",
                desc: "Material estéril desechable y protocolos de esterilización en cada consulta.",
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
              },
              {
                title: "Atención rápida y flexible",
                desc: "Citas disponibles en menos de 24 horas, en clínica o a domicilio.",
                icon: <><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></>,
              },
              {
                title: "Especialista en heridas complejas",
                desc: "Enfermero con formación avanzada en heridas de difícil manejo.",
                icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="flex items-start gap-3 py-3.5 border-b border-[#F0EDE6] last:border-b-0"
              >
                <div className="w-8 h-8 bg-[#F0EDE6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </div>
                <div>
                  <p className="text-[0.8rem] font-medium text-[#1a1a18] mb-0.5">{title}</p>
                  <p className="text-[0.75rem] text-[#9B9B8E] leading-relaxed font-light">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 bg-[#1a1a18] text-[#FAFAF8] text-[0.74rem] tracking-[0.1em] uppercase font-medium px-6 py-3 rounded-[2px] w-full md:w-max justify-center md:justify-start hover:bg-[#2e2e2b] transition-colors"
          >
            Conoce nuestros servicios →
          </a>
        </div>

      </div>
    </section>
  );
}