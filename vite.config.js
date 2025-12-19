hirundo-tech.github.io


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/hirundo-tech.github.io/", 
  plugins: [react(), tailwindcss()],
});
