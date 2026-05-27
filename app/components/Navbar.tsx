"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Servicios",   href: "#servicios"    },
  { label: "Nosotros",    href: "#nosotros"      },
  { label: "Tecnología",  href: "#tecnologia"    },
  { label: "Contacto",    href: "#contacto"      },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Sombra suave al hacer scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active link por sección visible */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50
        bg-[#FAFAF8]/95 backdrop-blur-sm
        border-b border-[#E8E6E0]
        transition-shadow duration-300
        ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : ""}
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">

        {/* ── LOGO ── */}
        <Link
          href="/"
          className="font-['Playfair_Display',serif] text-[1rem] md:text-[1.05rem] tracking-[0.06em] text-[#1a1a18] font-semibold shrink-0 leading-tight"
        >
          Consultorio de Heridas
          <span className="text-[#8B7355]">.</span>
          <br className="hidden sm:block" />
          <span className="text-[#8B7355] text-[0.72rem] tracking-[0.14em] uppercase font-['DM_Sans',sans-serif] font-medium not-serif">
            Complicadas
          </span>
        </Link>

        {/* ── LINKS DESKTOP ── */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <a
                key={label}
                href={href}
                className={`
                  relative text-[0.76rem] tracking-[0.08em] uppercase font-medium
                  transition-colors duration-200
                  ${isActive ? "text-[#1a1a18]" : "text-[#6B6B60] hover:text-[#1a1a18]"}
                `}
              >
                {label}
                {/* Underline activo */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-px bg-[#8B7355]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* ── CTA DESKTOP ── */}
        <a
          href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20reservar%20una%20cita"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:inline-flex items-center gap-2
            bg-[#1a1a18] text-[#FAFAF8]
            text-[0.74rem] tracking-[0.1em] uppercase font-medium
            px-5 py-2.5 rounded-[2px]
            hover:bg-[#2e2e2b] active:scale-[0.98]
            transition-all duration-200
          "
        >
          {/* WhatsApp icon */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.885a.5.5 0 00.606.63l6.208-1.625A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.006-1.373l-.36-.214-3.724.976.995-3.633-.235-.374A9.772 9.772 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
          </svg>
          Reservar ahora
        </a>

        {/* ── HAMBURGER MOBILE ── */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Abrir menú"
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px]"
        >
          <span className={`block h-px w-6 bg-[#1a1a18] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block h-px bg-[#1a1a18] transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-6"}`} />
          <span className={`block h-px w-6 bg-[#1a1a18] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="border-t border-[#E8E6E0] bg-[#FAFAF8] px-6 pt-4 pb-6 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.82rem] text-[#6B6B60] tracking-[0.08em] uppercase font-medium py-3 border-b border-[#F0EDE6] hover:text-[#1a1a18] transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://wa.me/521234567890?text=Hola,%20me%20interesa%20reservar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="
              mt-4 flex items-center justify-center gap-2
              bg-[#1a1a18] text-[#FAFAF8]
              text-[0.76rem] tracking-[0.1em] uppercase font-medium
              px-6 py-3 rounded-[2px]
              hover:bg-[#2e2e2b] transition-colors
            "
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.532 5.856L.057 23.885a.5.5 0 00.606.63l6.208-1.625A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.006-1.373l-.36-.214-3.724.976.995-3.633-.235-.374A9.772 9.772 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
            </svg>
            Reservar ahora
          </a>
        </div>
      </div>
    </header>
  );
}