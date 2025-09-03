import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from 'vite-plugin-pwa';
import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: "localhost",
    port: 5173,
    strictPort: false,
    open: true,
    hmr: {
      port: 5174,
      protocol: "ws",
      host: "localhost",
    },
  },
  plugins: [
    react(),
    compression({
      algorithms: ['gzip'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    compression({
      algorithms: ['brotliCompress'],
      exclude: [/\.(br)$/, /\.(gz)$/],
    }),
    // VitePWA disabled for development to avoid service worker issues
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
    //   manifest: {
    //     name: 'Techaxis Consulting',
    //     short_name: 'Techaxis',
    //     description: 'Oracle ERP & Digital Transformation Solutions',
    //     theme_color: '#0f1419',
    //     background_color: '#ffffff',
    //     display: 'standalone',
    //     orientation: 'portrait',
    //     scope: '/',
    //     start_url: '/',
    //     icons: [
    //       {
    //         src: '/src/assets/techAxix_logo-removebg-preview.png',
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: '/src/assets/techAxix_logo-removebg-preview.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   }
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime"
    ],
  },
  clearScreen: false,
  logLevel: "info",
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-slot', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          routing: ['react-router-dom'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime'
    ]
  },
  define: {
    global: 'globalThis',
  },
});
