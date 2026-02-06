import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Use default react plugin or react-swc if desired
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Custom domain setup for GitHub Pages or any production server
  base: '/',  // Set base to the root for GitHub Pages deployment or change to `/your-repository-name/` if deploying to a subpath

  plugins: [
    react(), // Default react plugin
    mode === "development" && require('lovable-tagger').componentTagger(), // Enable 'componentTagger' only in development mode
  ].filter(Boolean), // Remove undefined elements in production

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Create a shorthand alias for your src directory
    },
  },

  build: {
    outDir: 'dist',  // The folder where the build files will be output
    sourcemap: false, // Disable sourcemaps for production (can be true if you want to debug)
    rollupOptions: {
      output: {
        manualChunks: undefined,  // Optional: Controls chunking behavior
      },
    },
  },

  // No need for `server` settings in production; those are useful only for development
  server: mode === "development" ? {
    host: "::",  // Allows for IPv6 and local network access during dev
    port: 8080,  // Port during development
    hmr: { overlay: false },  // Disable HMR overlay during development
  } : undefined,
}));
