import type { Metadata } from "next";

import ProcessIntro from "./ProcessIntro";
import Etapas from "./Etapas";
import Colaboracao from "./Colaboracao";
import Ambiente from "./Ambiente";

export const metadata: Metadata = {
  title: "Processo",
  description:
    "O processo que conduz meus projetos: as quatro etapas de trabalho, a colaboração com design e produto e o ambiente de desenvolvimento.",
};

export default function ProcessoPage() {
  return (
    <>
      <ProcessIntro />
      <Etapas />
      <Colaboracao />
      <Ambiente />
    </>
  );
}
