import Hero from "./projetos/Hero";
import Diferencial from "./projetos/Diferencial";
import Projects from "./projetos/Projects";
import Tech from "./projetos/Tech";
import Contact from "./projetos/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Diferencial />
      <Projects />
      <Tech />
      <Contact />
    </main>
  );
}