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
      "@store": path.resolve(__dirname, "./src/assets/store"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@functions": path.resolve(__dirname, "./src/components/functions"),
      "@routes": path.resolve(__dirname, "./src/routes/routes"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
