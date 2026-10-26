import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ isSsrBuild }) => ({
  base: "/",
  plugins: [react()],
  build: { outDir: isSsrBuild ? "dist-ssr" : "dist" },
  server: { port: 8082 },
}));
