import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Exporttofigma } from "./screens/Exporttofigma/Exporttofigma";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Exporttofigma />
  </StrictMode>,
);
