// vite.config.ts
import { defineConfig } from "file:///D:/PROJECT%20SHOWCASE/knigi_typescript/node_modules/vite/dist/node/index.js";
import react from "file:///D:/PROJECT%20SHOWCASE/knigi_typescript/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\PROJECT SHOWCASE\\knigi_typescript";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src/"),
      "@ui": `${path.resolve(__vite_injected_original_dirname, "./src/ui/")}`,
      "@template": `${path.resolve(__vite_injected_original_dirname, "./src/template/")}`,
      "@lib": `${path.resolve(__vite_injected_original_dirname, "./lib/")}`,
      "@helmet": `${path.resolve(__vite_injected_original_dirname, "./lib/")}`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQUk9KRUNUIFNIT1dDQVNFXFxcXGtuaWdpX3R5cGVzY3JpcHRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFBST0pFQ1QgU0hPV0NBU0VcXFxca25pZ2lfdHlwZXNjcmlwdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUFJPSkVDVCUyMFNIT1dDQVNFL2tuaWdpX3R5cGVzY3JpcHQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJ1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvXCIpLFxyXG4gICAgICBcIkB1aVwiOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3VpL1wiKX1gLFxyXG4gICAgICBcIkB0ZW1wbGF0ZVwiOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3RlbXBsYXRlL1wiKX1gLFxyXG4gICAgICBcIkBsaWJcIjogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL2xpYi9cIil9YCxcclxuICAgICAgXCJAaGVsbWV0XCI6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9saWIvXCIpfWAsXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNTLFNBQVMsb0JBQW9CO0FBQ25VLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLFFBQVE7QUFBQSxNQUNyQyxPQUFPLEdBQUcsS0FBSyxRQUFRLGtDQUFXLFdBQVcsQ0FBQztBQUFBLE1BQzlDLGFBQWEsR0FBRyxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCLENBQUM7QUFBQSxNQUMxRCxRQUFRLEdBQUcsS0FBSyxRQUFRLGtDQUFXLFFBQVEsQ0FBQztBQUFBLE1BQzVDLFdBQVcsR0FBRyxLQUFLLFFBQVEsa0NBQVcsUUFBUSxDQUFDO0FBQUEsSUFDakQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K