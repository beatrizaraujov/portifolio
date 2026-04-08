import Hero from "./components/sections/Hero";
import Diferencial from "./components/sections/Diferencial";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Contact from "./components/sections/Contact";
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