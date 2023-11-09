import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["primeng_messages,ng2-img-max"],
  },
});
