import type { Metadata } from "next";

import Intro from "./Intro";
import Capabilities from "./Capabilities";
import Trajetoria from "./Trajetoria";
import AlemDoCodigo from "./AlemDoCodigo";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Da análise de operações ao desenvolvimento front-end: áreas de atuação, trajetória profissional e o que acompanha a entrega técnica.",
};

export default function SobrePage() {
  return (
    <>
      <Intro />
      <Capabilities />
      <Trajetoria />
      <AlemDoCodigo />
    </>
  );
}
