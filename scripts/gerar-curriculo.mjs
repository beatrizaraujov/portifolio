/**
 * Gera o PDF do currículo a partir da rota /curriculo, com o Chrome já instalado.
 * Uso: com o site em execução (npm run dev ou npm start), execute `npm run curriculo`.
 * Variáveis opcionais: CHROME_PATH e CURRICULO_URL.
 */
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";

const chrome =
  process.env.CHROME_PATH ??
  "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.env.CURRICULO_URL ?? "http://localhost:3000/curriculo";
const destino = resolve("public/curriculo-maria-beatriz-araujo-viana.pdf");

execFileSync(chrome, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=8000",
  `--print-to-pdf=${destino}`,
  url,
]);

console.log(`Currículo gerado em ${destino}`);
