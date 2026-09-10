import EmbeddedPortalPage from '../../components/EmbeddedPortalPage/EmbeddedPortalPage'

/**
 * Endereço do Portal B2B (CRM do restaurante) embutido na rota `/salao`.
 *
 * Aponta para o deploy remoto https://portal-move.vercel.app. O portal responde
 * 200 sem X-Frame-Options/CSP `frame-ancestors`, então é embutível no iframe.
 *
 * Sobrescreva via `VITE_PORTAL_B2B_URL` quando quiser apontar para outra base
 * (ex.: a cópia local `public/salao/` durante o desenvolvimento – ver vite.config.ts).
 */
const PORTAL_B2B_URL =
  (import.meta.env.VITE_PORTAL_B2B_URL as string | undefined) ?? 'https://portal-move.vercel.app'

/**
 * SalaoPage – "Visão do restaurante" (card do MovePage, Figma 103:8013).
 *
 * Rota `/salao`. O Portal B2B do restaurante (deploy remoto
 * https://portal-move.vercel.app) é exibido em iframe full-screen dentro do
 * shell do EmbeddedPortalPage (barra discreta com voltar para `/move`). O
 * conteúdo abaixo da barra é 100% do app parceiro.
 */
export default function SalaoPage() {
  return <EmbeddedPortalPage src={PORTAL_B2B_URL} title="Visão do restaurante" />
}
