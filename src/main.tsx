import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const { pathname, search, hash } = window.location;
if (pathname.endsWith(".html")) {
  const clean = pathname === "/index.html" ? "/" : pathname.slice(0, -".html".length);
  window.history.replaceState(null, "", clean + search + hash);
}

const container = document.getElementById("root")!;
if (container.hasChildNodes()) hydrateRoot(container, <App />);
else createRoot(container).render(<App />);
