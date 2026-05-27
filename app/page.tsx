import Navbar from "./components/Navbar";
import Hero   from "./components/Hero";
import About  from "./components/about";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import BeforeAfter from "./components/BeforeAfter";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <BeforeAfter />
        <Contact />
        {/* próximas secciones aquí */}
      </div>
    </main>
  );
}