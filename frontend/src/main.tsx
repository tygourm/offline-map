import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "@/app.tsx";
import "@/index.css";

import { ThemeProvider } from "@/components/providers/theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
