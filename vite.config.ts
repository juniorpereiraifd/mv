import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Serve o Portal B2B (build em public/salao/, base /salao/) no dev server.
 *
 * No dev, o Vite reescreveria qualquer rota inexistente (inclusive /salao/)
 * para o index.html do próprio B2C, então o iframe do /salao carregaria o B2C
 * dentro do B2C. Este middleware intercepta /salao/* ANTES do fallback SPA:
 * serve o index.html do portal para qualquer rota sem extensão (SPA fallback
 * do portal) e deixa os assets (/salao/assets/*) passarem para o Vite, que os
 * resolve de public/. Sem isso, o dev server só serviria o portal em
 * /salao/index.html, e /salao/ cairia no SPA do B2C.
 */
function salaoMiddleware(): Plugin {
  const root = path.resolve(__dirname, 'public/salao')
  return {
    name: 'salao-static',
    configureServer(server) {
      server.middlewares.use('/salao', (req, res, next) => {
        const url = (req.url ?? '').split('?')[0]
        // Arquivo com extensão (ex.: /salao/assets/*.js): deixa o Vite servir.
        if (path.extname(url)) return next()
        // Rota SPA do portal (ex.: /salao, /salao/clientes): serve o index.html.
        const finalUrl = url.endsWith('/') || url === '' ? '/index.html' : '/' + url.replace(/^\/+/, '')
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(require('node:fs').readFileSync(path.join(root, finalUrl)))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), salaoMiddleware()],
})
