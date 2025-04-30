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
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@icons": path.resolve(__dirname, "./src/components/icons"),
      "@functions": path.resolve(__dirname, "./src/components/functions"),
      "@routes": path.resolve(__dirname, "./src/routes/routes"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
