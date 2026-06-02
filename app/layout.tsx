import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consultorio de Heridas Complicadas · Iguala, Guerrero",
  description:
    "Enfermero especialista en heridas complejas y podología clínica en Taxco de Alarcón. Pie diabético, úlceras venosas, onicocriptosis y más. Material estéril, atención a domicilio.",
  keywords: [
    "heridas complicadas",
    "pie diabético",
    "podología Taxco",
    "úlceras venosas",
    "curación de heridas",
    "enfermero especialista heridas",
    "podólogo Iguala Guerrero",
    "atención domiciliaria heridas",
  ],
  authors: [{ name: "Consultorio de Heridas Complicadas" }],
  creator: "Consultorio de Heridas Complicadas",
  openGraph: {
    title: "Consultorio de Heridas Complicadas · Iguala, Guerrero",
    description:
      "Especialistas en heridas de difícil manejo y podología clínica. Material avanzado, protocolos clínicos y atención a domicilio.",
    url: "https://podolog-aweb.vercel.app",
    siteName: "Consultorio de Heridas Complicadas",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultorio de Heridas Complicadas · Taxco, Guerrero",
    description:
      "Especialistas en heridas de difícil manejo y podología clínica en Taxco.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}