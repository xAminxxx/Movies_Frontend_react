import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5259",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
