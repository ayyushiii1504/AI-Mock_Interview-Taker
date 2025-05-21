import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), tailwindcss(),],
  define: {
    'process.env': {
      VITE_API_BASE_URL: JSON.stringify('http://localhost:18000/api'),
    },
  },
})
