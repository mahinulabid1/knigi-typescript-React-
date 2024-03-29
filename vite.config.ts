import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@ui": `${path.resolve(__dirname, "./src/ui/")}`,
      "@template": `${path.resolve(__dirname, "./src/template/")}`,
      "@lib": `${path.resolve(__dirname, "./lib/")}`,
      "@helmet": `${path.resolve(__dirname, "./src/helmet.tsx")}`,
      "@store": `${path.resolve(__dirname, "./store/")}`,
    }
  }
})
