import Icon from '../../../components/Icon/Icon'
import type { Merchant } from '../../../data/merchants'
import './AboutSection.css'

interface AboutSectionProps {
  merchant: Merchant
}

/**
 * AboutSection – bloco "Sobre" (design 68:3866): descrição do restaurante,
 * lista "O que você pode aproveitar" (comodidades em 2 colunas) e o card de
 * "Localização" (tile de mapa + endereço + botão "Como chegar").
 *
 * Desvio: sem asset de mapa, o tile usa um gradiente neutro com pin central.
 */
export default function AboutSection({ merchant }: AboutSectionProps) {
  return (
    <section id="sobre" className="about-section">
      <div className="about-section__block">
        <h2 className="about-section__title">Sobre o restaurante</h2>
        <p className="about-section__description">
          {merchant.about} <span className="about-section__more">Ler mais</span>
        </p>
      </div>

      <div className="about-section__block">
        <h2 className="about-section__title">O que você pode aproveitar</h2>
        <ul className="about-section__amenities">
          {merchant.amenities.map((amenity) => (
            <li className="about-section__amenity" key={amenity.label}>
              <Icon name={amenity.icon} size={20} />
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="about-section__block">
        <h2 className="about-section__title">Localização</h2>

        <div className="about-section__location">
          <div className="about-section__map" aria-hidden="true">
            <Icon name="pin" size={41} />
          </div>

          <div className="about-section__location-body">
            <p className="about-section__address">{merchant.address}</p>
            <button type="button" className="about-section__route">
              <Icon name="route" style="Line" size={16} />
              Como chegar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
