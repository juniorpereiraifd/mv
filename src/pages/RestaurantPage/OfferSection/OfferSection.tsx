import { Link } from 'react-router-dom'
import Icon from '../../../components/Icon/Icon'
import type { Merchant } from '../../../data/merchants'
import './OfferSection.css'

interface OfferSectionProps {
  merchant: Merchant
}

/**
 * OfferSection – bloco "Benefício pra você" (design 68:3801): sobre a
 * superfície secundária (68:3805), o carrossel de cards de oferta (logo,
 * título, subtítulo e pills de disponibilidade) e, abaixo, o bloco "Ganhe
 * também" (68:3833) com o losango do Clube.
 */
export default function OfferSection({ merchant }: OfferSectionProps) {
  return (
    <section id="ofertas" className="offer-section">
      <h2 className="offer-section__title">Benefício pra você</h2>

      <div className="offer-section__offers">
        <div className="offer-section__carousel">
          {merchant.offers.map((offer, index) => (
            <Link
              to={`/loja/${merchant.slug}/beneficio/${index}`}
              className="offer-card offer-card--link"
              key={offer.title}
            >
              <img className="offer-card__logo" src={merchant.logo} alt="" />

              <div className="offer-card__content">
                <h3 className="offer-card__title">{offer.title}</h3>
                <p className="offer-card__subtitle">{offer.subtitle}</p>
                {offer.availability.length > 0 && (
                  <div className="offer-card__availability">
                    {offer.availability.map((pill) => (
                      <span className="offer-card__pill" key={pill}>
                        {pill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="offer-section__club">
          <h3 className="offer-section__club-label">Ganhe também</h3>
          <div className="offer-section__club-card">
            <span className="offer-section__club-icon">
              <Icon name="clube" size={16} />
            </span>
            <p className="offer-section__club-text">
              <strong>{merchant.clubOffer.title}</strong> <span>{merchant.clubOffer.note}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
