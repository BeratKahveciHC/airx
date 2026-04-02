import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'mock-mail-php',
      configureServer(server) {
        server.middlewares.use('/mail.php', (req, res) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true, message: 'Mock: mail sent (dev mode)' }))
        })
      },
    },
  ],
})
