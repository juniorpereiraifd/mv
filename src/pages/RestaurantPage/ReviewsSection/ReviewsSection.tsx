import Icon from '../../../components/Icon/Icon'
import MomentsCarousel from '../../../components/MomentsCarousel/MomentsCarousel'
import type { Merchant } from '../../../data/merchants'
import './ReviewsSection.css'

interface ReviewsSectionProps {
  merchant: Merchant
}

/** Linha do gráfico de notas – rótulo à esquerda, estrela + valor à direita. */
function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="reviews-section__bar">
      <span className="reviews-section__bar-label">{label}</span>
      <span className="reviews-section__bar-score">
        <Icon name="star" size={12} />
        <span>{value > 0 ? value.toFixed(1) : '—'}</span>
      </span>
    </div>
  )
}

/**
 * ReviewsSection – bloco "Avaliações" (design 68:3865): card da nota (valor
 * 40px, total de avaliações e gráfico Comida/Serviço/Ambiente), o resumo
 * "O que os clientes dizem?" (com selo "Resumido por IA") e, por último, o
 * rail de "Momentos compartilhados" (design 68:3911) – dentro da seção, sem
 * título nem "Ver todos".
 *
 * Desvio: lojas novas (sem nota) exibem "—" e barras sem valor.
 */
export default function ReviewsSection({ merchant }: ReviewsSectionProps) {
  return (
    <section id="avaliacoes" className="reviews-section">
      <div className="reviews-section__header">
        <h2 className="reviews-section__title">Avaliações</h2>
        <a
          className="reviews-section__see-all"
          href="#avaliacoes"
          onClick={(e) => e.preventDefault()}
        >
          Ver todas
        </a>
      </div>

      <div className="reviews-section__rating">
        <div className="reviews-section__rating-card">
          <div className="reviews-section__graph">
            <div className="reviews-section__score">
              <div className="reviews-section__score-value">
                <Icon name="star" size={24} />
                <span className="reviews-section__score-number">
                  {merchant.ratingValue ?? '—'}
                </span>
              </div>
              <span className="reviews-section__score-count">
                {merchant.reviewTotal} avaliações
              </span>
            </div>

            <div className="reviews-section__graph-divider" aria-hidden="true" />

            <div className="reviews-section__bars">
              <ScoreBar label="Comida" value={merchant.reviewScores.food} />
              <ScoreBar label="Serviço" value={merchant.reviewScores.service} />
              <ScoreBar label="Ambiente" value={merchant.reviewScores.atmosphere} />
            </div>
          </div>

          <div className="reviews-section__summary">
            <div className="reviews-section__summary-header">
              <Icon name="star" size={16} />
              <span className="reviews-section__summary-title">O que os clientes dizem?</span>
              <span className="reviews-section__summary-ai">Resumido por IA</span>
            </div>
            <p className="reviews-section__summary-text">{merchant.reviewSummary}</p>
          </div>
        </div>
      </div>

      <MomentsCarousel moments={merchant.sharedMoments} />
    </section>
  )
}
