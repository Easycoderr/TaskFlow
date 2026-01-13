import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // Import the plugin
import react from "@vitejs/plugin-react"; // Or other framework plugins

export default defineConfig({
  plugins: [
    tailwindcss(), // Add the plugin here
    react(),
  ],
});
