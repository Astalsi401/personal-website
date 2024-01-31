import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import react from "@vitejs/plugin-react-swc";

const rewriteSlashToIndexHtml = () => {
  return {
    name: "rewrite-slash-to-index-html",
    apply: "serve",
    enforce: "post",
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use("/", (req, _, next) => {
        if (req.url === "/") {
          req.url = "/index.html";
        }
        next();
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: "G-F8SLV521P4",
      },
    }),
    rewriteSlashToIndexHtml(),
  ],
  base: "/personal-website",
  appType: "spa",
});
