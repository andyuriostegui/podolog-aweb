import type { Config } from "tailwindcss";

const config: Config = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clinic: {
          bg: '#F8FAF9', // Un blanco con un toque imperceptible de verde menta
          surface: '#FFFFFF', // Para tarjetas sobre el fondo bg
          primary: '#2C7A7B', // Teal médico: da muchísima confianza y es moderno
          primaryHover: '#235E5F',
          textMuted: '#64748B', // Slate 500 para descripciones
          textDark: '#0F172A', // Slate 900 para títulos, menos agresivo que el negro
        },
        accent: {
          sand: '#F3EDE4', // Para secciones secundarias, da calidez humana
        }
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.04)',
      }
    },
  },
  plugins: [],
};
export default config;