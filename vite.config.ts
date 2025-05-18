import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Only expose environment variables that start with VITE_
    // This ensures API keys without the VITE_ prefix remain private
    ...Object.fromEntries(
      Object.entries(process.env)
        .filter(([key]) => key.startsWith('VITE_'))
        .map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)])
    )
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    // Allow any host to access the server
    host: true,
    // Allow any port to be used
    port: parseInt(process.env.PORT || '5173'),
    strictPort: false,
    // Explicitly list all possible proxy domains
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.manusvm.computer',
      '5173-i9b13baivx8ecmkejnt9o-b54e9e30.manusvm.computer',
      '5174-i9b13baivx8ecmkejnt9o-b54e9e30.manusvm.computer',
      '8080-i9b13baivx8ecmkejnt9o-b54e9e30.manusvm.computer',
      'i9b13baivx8ecmkejnt9o-b54e9e30.manusvm.computer'
    ],
    // Disable host checking completely for maximum compatibility
    hmr: {
      // Allow HMR from any host
      clientPort: 443
    }
  }
})
