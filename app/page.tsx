import Intro from "./components/home/Intro";
import Work from "./components/home/Work";
import Career from "./components/home/Career";
import Teaching from "./components/home/Teaching";
import Technologies from "./components/home/Technologies";
import About from "./components/home/About";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <>
      <Intro />
      <Work />
      <Career />
      <Teaching />
      <Technologies />
      <About />
      <Contact />
    </>
  );
}
