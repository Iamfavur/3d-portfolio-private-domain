// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/3d-portfolio-private-domain/", // YOUR REPO NAME HERE
  plugins: [react()],
});
