"use client";

import { useState } from "react";

const MOTIVOS = [
  "Pie diabético",
  "Úlcera venosa",
  "Manejo de heridas complejas",
  "Uña encarnada (Onicocriptosis)",
  "Hongos en uñas (Onicomicosis)",
  "Callos o helomas plantares",
  "Ojo de pescado",
  "Pie de atleta",
  "No sé, necesito orientación",
];

const WA_NUMBER = "+527331099901";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", reason: "", zone: "", msg: "",
  });
  const [error, setError] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendWA = () => {
    if (!form.name || !form.phone || !form.reason) {
      setError("Por favor completa nombre, teléfono y motivo.");
      return;
    }
    setError("");
    let text = `Hola, me comunico desde su sitio web.\n\n`;
    text += `*Nombre:* ${form.name}\n`;
    text += `*Teléfono:* ${form.phone}\n`;
    text += `*Motivo:* ${form.reason}\n`;
    if (form.zone) text += `*Zona:* ${form.zone}\n`;
    if (form.msg)  text += `*Mensaje:* ${form.msg}\n`;
    text += `\nQuedo en espera de su respuesta. ¡Gracias!`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-[#FAFAF8] font-['DM_Sans',sans-serif]">
      <div className="grid md:grid-cols-2">

        {/* ── Lado izquierdo con imagen de fondo ── */}
        <div className="relative overflow-hidden flex flex-col justify-between px-8 py-12 md:px-14 md:py-16 min-h-[420px]">

          {/* Imagen de fondo */}
          <div className="absolute inset-0 z-0">
            <img
              src="/img2.png"
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.32) saturate(0.6)" }}
            />
            <div className="absolute inset-0 bg-[#1a1a18]/55" />
          </div>

          {/* Contenido */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-5 h-px bg-[#C4A97D]" />
              <span className="text-[0.68rem] text-[#C4A97D] tracking-[0.14em] uppercase font-medium">Contacto</span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-[1.8rem] md:text-[2.2rem] text-white font-semibold leading-[1.2] mb-4">
              ¿Listo para<br/>
              sentirte <em className="not-italic italic text-[#C4A97D]">mejor</em>?
            </h2>
            <p className="text-[0.82rem] text-white/55 leading-[1.75] font-light mb-8 max-w-sm">
              Escríbenos y te respondemos en menos de una hora. Atendemos en clínica y a domicilio en Iguala y zonas cercanas.
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  label: "WhatsApp: +52 733 109 9901",
                  icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14v2.92z" />,
                },
                {
                  label: "Iguala de la Independencia, Guerrero",
                  icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>,
                },
                {
                  label: "Atención domiciliaria disponible",
                  icon: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
                },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-3 text-[0.78rem] text-white/60 font-light">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C4A97D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      {icon}
                    </svg>
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Badge "Solo con cita" */}
          <div className="relative z-10 mt-8">
            <div className="inline-flex items-center gap-3 bg-[#C4A97D]/15 border border-[#C4A97D]/30 px-5 py-3 rounded-[2px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C4A97D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <div>
                <p className="text-[0.8rem] text-[#C4A97D] font-medium tracking-wide">Solo con cita previa</p>
                <p className="text-[0.68rem] text-white/40 font-light">Agenda por WhatsApp · Respuesta en menos de 1 hr</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Formulario ── */}
        <div className="flex flex-col justify-center px-8 py-12 md:px-14 md:py-16 border-t md:border-t-0 md:border-l border-[#E8E6E0]">
          <div className="flex flex-col gap-4 w-full max-w-md mx-auto md:mx-0">

            {/* Nombre + Teléfono */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nombre",   name: "name",  type: "text", placeholder: "Tu nombre" },
                { label: "Teléfono", name: "phone", type: "tel",  placeholder: "733 100 0000" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] text-[#9B9B8E] uppercase tracking-[0.1em] font-medium">{label}</label>
                  <input
                    type={type} name={name} value={(form as any)[name]}
                    onChange={handle} placeholder={placeholder}
                    className="bg-[#FAFAF8] border border-[#E8E6E0] text-[#1a1a18] text-[0.8rem] font-light px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#C4C4BB] font-['DM_Sans',sans-serif]"
                  />
                </div>
              ))}
            </div>

            {/* Motivo */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] text-[#9B9B8E] uppercase tracking-[0.1em] font-medium">Motivo de consulta</label>
              <select
                name="reason" value={form.reason} onChange={handle}
                className="bg-[#FAFAF8] border border-[#E8E6E0] text-[#1a1a18] text-[0.8rem] font-light px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#8B7355] transition-colors appearance-none cursor-pointer font-['DM_Sans',sans-serif]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%239B9B8E' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
              >
                <option value="" disabled>Selecciona un servicio</option>
                {MOTIVOS.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>

            {/* Zona */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] text-[#9B9B8E] uppercase tracking-[0.1em] font-medium">Zona o colonia</label>
              <input
                type="text" name="zone" value={form.zone} onChange={handle}
                placeholder="Ej. Centro, Iguala / prefiero a domicilio"
                className="bg-[#FAFAF8] border border-[#E8E6E0] text-[#1a1a18] text-[0.8rem] font-light px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#C4C4BB] font-['DM_Sans',sans-serif]"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.62rem] text-[#9B9B8E] uppercase tracking-[0.1em] font-medium">
                Mensaje adicional <span className="text-[#C4C4BB] normal-case tracking-normal">(opcional)</span>
              </label>
              <textarea
                name="msg" value={form.msg} onChange={handle}
                placeholder="Cuéntanos brevemente tu situación..."
                rows={3}
                className="bg-[#FAFAF8] border border-[#E8E6E0] text-[#1a1a18] text-[0.8rem] font-light px-3.5 py-2.5 rounded-[2px] outline-none focus:border-[#8B7355] transition-colors placeholder:text-[#C4C4BB] resize-none font-['DM_Sans',sans-serif]"
              />
            </div>

            {error && <p className="text-[0.7rem] text-red-500">{error}</p>}

            {/* Botón */}
            <button
              onClick={sendWA}
              className="w-full bg-[#1a1a18] text-white flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[2px] text-[0.76rem] tracking-[0.1em] uppercase font-medium hover:bg-[#2e2e2b] active:scale-[0.98] transition-all mt-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.885a.5.5 0 00.606.63l6.208-1.625A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.006-1.373l-.36-.214-3.724.976.995-3.633-.235-.374A9.772 9.772 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Enviar por WhatsApp
            </button>

            <p className="text-[0.63rem] text-[#C4C4BB] text-center font-light">
              Te redirige a WhatsApp con tu información lista. Sin registros, sin spam.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}