import EmbeddedPortalPage from '../../components/EmbeddedPortalPage/EmbeddedPortalPage'

/**
 * Formulário de cadastro de interesse embutido na rota `/cadastro` – destino do
 * CTA "Cadastrar meu interesse" do hero do MovePage (Figma 154:6211).
 *
 * Aponta para o Google Forms publicado (modo `viewform`, que responde sem
 * X-Frame-Options/CSP `frame-ancestors` e é embutível no iframe). Sobrescreva
 * via `VITE_CADASTRO_FORM_URL` quando o formulário mudar de endereço.
 */
const CADASTRO_FORM_URL =
  (import.meta.env.VITE_CADASTRO_FORM_URL as string | undefined) ??
  'https://docs.google.com/forms/d/e/1FAIpQLSdvNjAmPVPEk46zJPoCLCtA4har7obV9EXzvZLL0-Nvdu7YQA/viewform?pli=1'

/**
 * CadastroPage – CTA "Cadastrar meu interesse" do hero do MovePage.
 *
 * Rota `/cadastro`. Mesma mecânica de /salao e /reservas: o formulário externo
 * é exibido em iframe full-screen dentro do shell do EmbeddedPortalPage (barra
 * discreta com voltar para `/move`), em vez de abrir o link numa nova aba – o
 * usuário continua no demo e volta com um toque.
 */
export default function CadastroPage() {
  return <EmbeddedPortalPage src={CADASTRO_FORM_URL} title="Cadastrar meu interesse" />
}
