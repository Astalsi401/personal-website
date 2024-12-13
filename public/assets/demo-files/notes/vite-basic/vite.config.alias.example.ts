import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal-website",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@store": path.resolve(__dirname, "./src/assets/store"),
      "@types": path.resolve(__dirname, "./src/assets/types"),
      "@styles": path.resolve(__dirname, "./src/assets/styles"),
      "@components": path.resolve(__dirname, "./src/components/components"),
      "@functions": path.resolve(__dirname, "./src/components/functions"),
      "@routes": path.resolve(__dirname, "./src/routes/routes"),
    },
  },
});
