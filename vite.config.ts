import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personal-website",
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-F8SLV521P4",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@store": path.resolve(__dirname, "./src/assets/store"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@components": path.resolve(__dirname, "./src/components/components"),
      "@functions": path.resolve(__dirname, "./src/components/functions"),
      "@routes": path.resolve(__dirname, "./src/routes/routes"),
    },
  },
});
